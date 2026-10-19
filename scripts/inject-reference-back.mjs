#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const referencesDir = path.join(rootDir, 'projects', 'references');
const marker = '<!-- vitrine-reference-back -->';

const snippet = `
${marker}
<style>
  .vitrine-reference-back {
    position: fixed;
    z-index: 2147483647;
    top: max(14px, env(safe-area-inset-top));
    left: max(14px, env(safe-area-inset-left));
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 32px;
    padding: 0 13px 0 11px;
    border: 1px solid rgba(230, 241, 232, 0.22);
    border-radius: 999px;
    background: rgba(7, 12, 10, 0.66);
    color: rgba(241, 246, 239, 0.88);
    font-family: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.1em;
    text-decoration: none;
    white-space: nowrap;
    pointer-events: auto;
    cursor: pointer;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(14px) saturate(1.2);
    -webkit-backdrop-filter: blur(14px) saturate(1.2);
    transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
  }
  .vitrine-reference-back::before {
    content: "←";
    color: rgba(151, 228, 189, 0.9);
    font-size: 13px;
    line-height: 1;
  }
  .vitrine-reference-back:hover {
    border-color: rgba(151, 228, 189, 0.42);
    background: rgba(12, 23, 17, 0.84);
    transform: translateY(-1px);
  }
  .vitrine-reference-back:focus-visible {
    outline: 2px solid rgba(127, 227, 176, 0.9);
    outline-offset: 2px;
  }
  @media (max-width: 600px) {
    .vitrine-reference-back {
      top: max(10px, env(safe-area-inset-top));
      left: max(10px, env(safe-area-inset-left));
      height: 29px;
      padding: 0 11px 0 9px;
      font-size: 9px;
    }
  }
</style>
<a class="vitrine-reference-back" href="../../../" aria-label="返回 VITRINE 场景索引" title="返回 VITRINE 场景索引">VITRINE · 场景索引</a>
`;

if (!existsSync(referencesDir)) {
  console.error(`Missing references directory: ${path.relative(rootDir, referencesDir)}`);
  process.exit(1);
}

let changed = 0;
for (const entry of readdirSync(referencesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const indexPath = path.join(referencesDir, entry.name, 'index.html');
  if (!existsSync(indexPath)) continue;
  const html = readFileSync(indexPath, 'utf8');
  if (html.includes(marker)) {
    console.log(`skip  ${entry.name} (already patched)`);
    continue;
  }
  if (!/<\/body>/i.test(html)) {
    console.warn(`skip  ${entry.name} (no closing body tag)`);
    continue;
  }
  writeFileSync(indexPath, html.replace(/<\/body>/i, `${snippet}</body>`), 'utf8');
  changed += 1;
  console.log(`patch ${entry.name}`);
}

console.log(`\nDone. ${changed} reference page(s) patched.`);
