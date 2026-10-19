'use strict';

/**
 * Zero-dependency static server for VITRINE. Every scene is generated in
 * the browser, so this only serves files for all projects under projects/
 * (ES modules do not work from file:// URLs).
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 4173);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...headers,
  });
  res.end(body);
}

function resolveRequestPath(rawUrl) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(rawUrl, `http://127.0.0.1:${PORT}`).pathname);
  } catch {
    return null;
  }
  if (pathname === '/' || pathname === '') pathname = '/index.html';
  // Project folders are served with directory-style URLs.
  if (pathname.endsWith('/')) pathname += 'index.html';
  else if (path.extname(pathname) === '') pathname += '/index.html';
  const filePath = path.resolve(ROOT, `.${pathname}`);
  if (filePath !== ROOT && !filePath.startsWith(`${ROOT}${path.sep}`)) return null;
  return filePath;
}

function getDirectoryRedirect(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl, `http://127.0.0.1:${PORT}`);
  } catch {
    return null;
  }
  if (url.pathname.endsWith('/') || path.extname(url.pathname) !== '') return null;

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return null;
  }

  const indexCandidate = path.resolve(ROOT, `.${pathname}`, 'index.html');
  if (indexCandidate !== ROOT && !indexCandidate.startsWith(`${ROOT}${path.sep}`)) return null;
  if (!fs.existsSync(indexCandidate)) return null;

  // A trailing slash keeps relative module URLs resolving inside the project.
  return `${url.pathname}/${url.search}`;
}

function serveFile(filePath, res) {
  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      send(res, 404, 'Not found', { 'Content-Type': 'text/plain; charset=utf-8' });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    });

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) send(res, 500, 'Read error');
      else res.destroy();
    });
    stream.pipe(res);
  });
}

function loadRegistry() {
  try {
    const registryPath = path.join(ROOT, 'projects', 'registry.json');
    const data = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
    return (Array.isArray(data.projects) ? data.projects : [])
      .filter((project) => project && project.title && project.entry);
  } catch {
    return [];
  }
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    send(res, 405, 'Method not allowed', { Allow: 'GET, HEAD' });
    return;
  }

  const redirectLocation = getDirectoryRedirect(req.url || '/');
  if (redirectLocation) {
    res.writeHead(302, { Location: redirectLocation, 'Cache-Control': 'no-store' });
    res.end();
    return;
  }

  const filePath = resolveRequestPath(req.url || '/');
  if (!filePath) {
    send(res, 400, 'Bad request', { 'Content-Type': 'text/plain; charset=utf-8' });
    return;
  }

  if (req.method === 'HEAD') {
    fs.stat(filePath, (error, stat) => {
      if (error || !stat.isFile()) {
        send(res, 404, 'Not found', { 'Content-Type': 'text/plain; charset=utf-8' });
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Content-Length': stat.size,
        'Cache-Control': 'no-store',
      });
      res.end();
    });
    return;
  }

  serveFile(filePath, res);
});

server.on('error', (error) => {
  if (error && error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Open http://127.0.0.1:${PORT}/ or stop the other server.`);
  } else {
    console.error(error);
  }
  process.exitCode = 1;
});

server.listen(PORT, '127.0.0.1', () => {
  const projects = loadRegistry();
  console.log('');
  console.log('  VITRINE - 3D Scene Archive');
  console.log(`  Scene index: http://127.0.0.1:${PORT}/`);
  for (const project of projects) {
    const entry = String(project.entry).replace(/^\//, '');
    console.log(`  - ${project.title}: http://127.0.0.1:${PORT}/${entry}`);
  }
  console.log('  Press Ctrl+C to stop the server.');
  console.log('');
});
