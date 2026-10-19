#!/usr/bin/env node
import {
  cpSync,
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = path.join(rootDir, 'projects');
const templateDir = path.join(projectsDir, '_template');
const registryPath = path.join(projectsDir, 'registry.json');

const args = process.argv.slice(2);

function printUsage() {
  console.log('');
  console.log('  Usage: npm run new -- <slug> [title] [summary]');
  console.log('');
  console.log('  Example:');
  console.log('    npm run new -- floating-islands "Floating Islands" "Procedural low-poly islands"');
  console.log('');
  console.log('  slug: lowercase letters, numbers and hyphens, e.g. my-scene.');
  console.log('');
}

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  printUsage();
  process.exit(args.length === 0 ? 1 : 0);
}

const [slug, titleArg, summaryArg] = args;

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.startsWith('_')) {
  console.error(`Invalid project name "${slug}". Use lowercase letters, numbers and hyphens, e.g. my-scene.`);
  process.exit(1);
}

const targetDir = path.join(projectsDir, slug);
if (existsSync(targetDir)) {
  console.error(`projects/${slug}/ already exists. Choose another name.`);
  process.exit(1);
}

if (!existsSync(templateDir)) {
  console.error('Missing projects/_template/. Cannot create a project.');
  process.exit(1);
}

if (!existsSync(registryPath)) {
  console.error('Missing projects/registry.json. Cannot register the project.');
  process.exit(1);
}

const title = (titleArg || slug).trim() || slug;
const summary = (summaryArg || 'TODO: one-line description of this 3D scene.').trim();

let registry;
try {
  registry = JSON.parse(readFileSync(registryPath, 'utf8'));
} catch (error) {
  console.error('projects/registry.json is not valid JSON:', error.message);
  process.exit(1);
}
if (!Array.isArray(registry.projects)) registry.projects = [];

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const tokenValues = {
  __PROJECT_SLUG__: slug,
  __PROJECT_TITLE__: title,
  __PROJECT_SUMMARY__: summary,
};
const tokenPattern = /__PROJECT_(?:SLUG|TITLE|SUMMARY)__/g;

function replaceTokens(dir) {
  for (const entry of readdirSync(dir)) {
    const filePath = path.join(dir, entry);
    if (statSync(filePath).isDirectory()) {
      replaceTokens(filePath);
      continue;
    }
    if (!/\.(html|css|js|md)$/.test(entry)) continue;

    const isHtml = entry.endsWith('.html');
    const text = readFileSync(filePath, 'utf8').replace(
      tokenPattern,
      (token) => (isHtml ? escapeHtml(tokenValues[token]) : tokenValues[token]),
    );
    writeFileSync(filePath, text, 'utf8');
  }
}

cpSync(templateDir, targetDir, { recursive: true });
replaceTokens(targetDir);

registry.projects.push({
  slug,
  title,
  summary,
  tags: ['Three.js', 'TODO'],
  status: 'wip',
  entry: `projects/${slug}/`,
  preview: null,
});
writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, 'utf8');

console.log('');
console.log(`  Created: projects/${slug}/`);
console.log(`  URL: http://127.0.0.1:4173/projects/${slug}/`);
console.log('  Registered in projects/registry.json (status: wip)');
console.log('');
console.log('  Next steps:');
console.log(`  1. Edit projects/${slug}/js/main.js and replace the template scene`);
console.log('  2. Add a screenshot to preview/ and set the preview field in registry.json');
console.log('  3. Add a row to the project list in the root README');
console.log('');
