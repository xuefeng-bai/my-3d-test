# Source / Sync Record

## Upstream

- Repository: https://github.com/Halorui-ai/yoru-mart-diorama
- Commit: `98c1686f92f8934917456596b7fdbc194c4707fe`
- Source path copied: `offline/`
- License: MIT, copyright (c) 2026 Ray (Halorui-ai) — see [LICENSE](LICENSE)

## Synced files

- `index.html` — upstream self-contained offline build
- `fonts/zen-kaku-gothic-new-700.woff` — upstream font asset
- `fonts/OFL.txt` — SIL Open Font License 1.1 for Zen Kaku Gothic New
- `textures/*.jpg` — upstream poster textures
- `使用说明.txt` — upstream offline-package note
- `README.md`, `SOURCE.md`, `THIRD_PARTY_NOTICES.md`, `preview/hero.jpg` — added by VITRINE

## Local changes

1. Injected the VITRINE scene-index back link (marked `vitrine-reference-back`) into the end of `index.html`.
2. Added the font OFL license and VITRINE documentation where the upstream offline package did not include them.
3. Generated a new VITRINE preview screenshot; the upstream `docs/` preview image is not shipped.

No scene code, camera, materials or assets were otherwise modified.

## Notes

The upstream project declares the offline package to be fully self-contained. A browser network audit with no external requests is part of VITRINE reference QA.
