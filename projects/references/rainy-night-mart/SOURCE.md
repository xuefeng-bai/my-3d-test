# Source / Sync Record

## Upstream

- Repository: https://github.com/givfei5-hash/rainy-night-mart
- Commit: `fab61152105dfcc48ba05f7a978678bfa64587c6`
- Source path copied: `index.html`
- License: MIT, copyright (c) 2026 givfei5-hash — see [LICENSE](LICENSE)

## Synced files

- `index.html` — upstream single-file scene
- `README.md`, `SOURCE.md`, `THIRD_PARTY_NOTICES.md`, `preview/hero.jpg` — added by VITRINE

The upstream `preview.png` and upstream README are not copied; a new VITRINE preview is used.

## Local changes

1. Changed the import map from:
   - `https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js`
   - `https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/`
   
   to VITRINE's local shared copy:
   - `../../../shared/vendor/three/three.module.js`
   - `../../../shared/vendor/three/addons/`
2. Added `<link rel="icon" href="data:,">` to avoid a missing-favicon request.
3. Injected the VITRINE scene-index back link (marked `vitrine-reference-back`) into `index.html`.

No scene code, camera, materials, geometry or assets were otherwise modified. The scene was smoke-tested with VITRINE's Three.js r169 before being listed.

## Notes

This is a single-file, no-build Three.js project. It only imports `three` and `OrbitControls`.
