#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = path.join(rootDir, 'projects');
const registryPath = path.join(projectsDir, 'registry.json');
const templateDir = path.join(projectsDir, '_template');
const VALID_STATUS = new Set(['active', 'wip', 'archived']);

let checks = 0;
let errors = 0;
let warnings = 0;

function pass(message) {
  checks += 1;
  console.log(`  ok    ${message}`);
}

function fail(message) {
  checks += 1;
  errors += 1;
  console.log(`  FAIL  ${message}`);
}

function warn(message) {
  warnings += 1;
  console.log(`  warn  ${message}`);
}

function readJson(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`${path.relative(rootDir, filePath)}: invalid JSON (${error.message})`);
    return null;
  }
}

function resolveTarget(baseDir, specifier) {
  return specifier.startsWith('/')
    ? path.join(rootDir, specifier)
    : path.resolve(baseDir, specifier);
}

function readImportMap(projectDir, label) {
  const indexPath = path.join(projectDir, 'index.html');
  if (!existsSync(indexPath)) {
    fail(`${label}: missing index.html`);
    return null;
  }

  const html = readFileSync(indexPath, 'utf8');
  const match = html.match(/<script\s+type=["']importmap["']\s*>([\s\S]*?)<\/script>/i);
  if (!match) {
    fail(`${label}: index.html has no importmap`);
    return null;
  }

  let importMap;
  try {
    importMap = JSON.parse(match[1]);
  } catch (error) {
    fail(`${label}: importmap is not valid JSON (${error.message})`);
    return null;
  }

  if (!importMap.imports || typeof importMap.imports !== 'object') {
    fail(`${label}: importmap is missing the "imports" object`);
    return null;
  }

  const missing = [];
  for (const [specifier, target] of Object.entries(importMap.imports)) {
    if (!existsSync(resolveTarget(projectDir, target))) {
      missing.push(`${specifier} -> ${target}`);
    }
  }
  if (missing.length > 0) {
    fail(`${label}: importmap targets missing: ${missing.join('; ')}`);
    return null;
  }

  return importMap.imports;
}

function listJsFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const filePath = path.join(dir, entry);
    if (statSync(filePath).isDirectory()) {
      files.push(...listJsFiles(filePath));
    } else if (entry.endsWith('.js') || entry.endsWith('.mjs')) {
      files.push(filePath);
    }
  }
  return files;
}

const SPECIFIER_PATTERNS = [
  /\bfrom\s*['"]([^'"]+)['"]/g,
  /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
  /\bimport\s+['"]([^'"]+)['"]/g,
];

function collectSpecifiers(source) {
  const found = new Set();
  for (const pattern of SPECIFIER_PATTERNS) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(source))) found.add(match[1]);
  }
  return found;
}

function resolveSpecifier(specifier, imports, fileDir, documentDir) {
  if (specifier.startsWith('.') || specifier.startsWith('/')) {
    return resolveTarget(fileDir, specifier);
  }
  if (imports[specifier]) {
    return resolveTarget(documentDir, imports[specifier]);
  }
  for (const [key, target] of Object.entries(imports)) {
    if (key.endsWith('/') && specifier.startsWith(key)) {
      return resolveTarget(documentDir, target + specifier.slice(key.length));
    }
  }
  return null;
}

function checkModuleImports(projectDir, imports, label) {
  const jsFiles = listJsFiles(projectDir);
  const missing = [];

  for (const filePath of jsFiles) {
    const source = readFileSync(filePath, 'utf8');
    for (const specifier of collectSpecifiers(source)) {
      const target = resolveSpecifier(specifier, imports, path.dirname(filePath), projectDir);
      if (target === null) {
        if (!/^(https?:|data:|blob:)/.test(specifier)) {
          missing.push(`${path.relative(projectDir, filePath)}: ${specifier} (unresolved)`);
        }
      } else if (!existsSync(target)) {
        missing.push(`${path.relative(projectDir, filePath)}: ${specifier} -> ${path.relative(rootDir, target)}`);
      }
    }
  }

  if (missing.length > 0) {
    fail(`${label}: ${missing.length} unresolved module import(s):\n        ${missing.join('\n        ')}`);
  } else {
    pass(`${label}: all module imports resolve (${jsFiles.length} JS files)`);
  }
}

function checkProject(project) {
  const label = project.slug || '(unnamed)';
  const expectedEntry = `projects/${label}/`;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(label)) {
    fail(`${label}: slug is not valid kebab-case`);
  }
  if (!project.title) fail(`${label}: missing title`);
  if (!VALID_STATUS.has(project.status)) fail(`${label}: invalid status "${project.status}"`);
  if (project.entry !== expectedEntry) {
    fail(`${label}: entry should be "${expectedEntry}", got "${project.entry}"`);
  }
  if (project.preview && !existsSync(path.resolve(rootDir, project.preview))) {
    fail(`${label}: preview not found: ${project.preview}`);
  }

  const projectDir = path.join(projectsDir, label);
  if (!existsSync(projectDir)) {
    fail(`${label}: directory not found: ${expectedEntry}`);
    return;
  }
  if (!existsSync(path.join(projectDir, 'README.md'))) {
    fail(`${label}: missing README.md`);
  }

  const imports = readImportMap(projectDir, label);
  if (imports) checkModuleImports(projectDir, imports, label);
}

console.log('');
console.log('  MY-3D-TEST project check');
console.log('');

for (const relativePath of ['index.html', 'README.md', 'server.cjs', 'package.json', 'shared/hub/hub.css', 'shared/hub/hub.js']) {
  if (existsSync(path.join(rootDir, relativePath))) pass(`root: found ${relativePath}`);
  else fail(`root: missing ${relativePath}`);
}

const registry = readJson(registryPath);
if (!registry || !Array.isArray(registry.projects)) {
  fail('registry: missing projects array');
} else {
  const seen = new Set();
  for (const project of registry.projects) {
    if (!project || typeof project !== 'object') {
      fail('registry: invalid project entry');
      continue;
    }
    if (seen.has(project.slug)) fail(`registry: duplicate slug "${project.slug}"`);
    seen.add(project.slug);
    checkProject(project);
  }
  pass(`registry: ${registry.projects.length} project(s) registered`);
}

if (existsSync(templateDir)) {
  const imports = readImportMap(templateDir, '_template');
  if (imports) checkModuleImports(templateDir, imports, '_template');
} else {
  fail('missing projects/_template/');
}

console.log('');
console.log(`  ${errors === 0 ? 'PASS' : 'FAIL'}: ${checks} checks, ${errors} error(s), ${warnings} warning(s).`);
console.log('');

process.exitCode = errors === 0 ? 0 : 1;
