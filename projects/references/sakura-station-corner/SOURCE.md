# Source / Sync Record

## Upstream

- Repository: https://github.com/fanhuayishiy/ai-demo
- Project directory in upstream: `sakura-station-corner/`
- Commit: `13a6321601d595ee0a9678bbce8414b18e910e8b`
- Source path copied: `sakura-station-corner/dist/`
- License: MIT, copyright (c) 2026 fanhuayishiy — see [LICENSE](LICENSE)

## Synced files

- `index.html` and `assets/*` — the upstream committed Vite build output
- `README.md`, `SOURCE.md`, `THIRD_PARTY_NOTICES.md`, `preview/hero.jpg` — added by VITRINE

Only the built static output is vendored. The upstream 128 MB repository and its source tree are intentionally not copied. The upstream project source remains available at the linked repository.

## Local changes

1. Injected the VITRINE scene-index back link (marked `vitrine-reference-back`) into `index.html`.
2. Added VITRINE project documentation and generated a new preview screenshot.

No scene code, camera, materials, asset content or weather logic was otherwise modified.

## Notes

The page boots through a progress overlay while it assembles procedural assets; first paint can take several seconds on slower GPUs. The upstream app includes its own quality adaptation and FPS readout.
