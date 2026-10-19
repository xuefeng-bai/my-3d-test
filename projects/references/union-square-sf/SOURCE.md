# Source / Sync Record

## Upstream

- Repository: https://github.com/PhiloLabs/fable51-worlds
- World directory: `union-square-sf/`
- Commit: `d24028466530a15d58d3d94537e6317b84101589`
- License: MIT, copyright (c) 2026 PhiloLabs — see [LICENSE](LICENSE)
- Authoring model: Claude Fable 5.1 (as documented by the upstream project)

## Build

The upstream is a Vite + TypeScript app:

```bash
cd union-square-sf
node tools/geo/sync_data.mjs
npm install
npx vite build
# -> dist/
```

The sync utility writes trimmed GIS, elevation and authored facade data into `public/data` for runtime fetches. The Vite config was given `base: './'` so relative assets and data resolve beneath the VITRINE reference directory. The resulting `dist/` tree (233 files, including generated GLB models) is copied.

## Local changes

1. Added data favicon.
2. Injected the VITRINE scene-index back link (positioned top-left to avoid the page's Viewpoint selector).
3. Added a small in-viewer OpenStreetMap / GSI credit line.
4. Added VITRINE README / SOURCE / THIRD_PARTY_NOTICES and generated a preview screenshot.

No world geometry, simulation, camera, controls or authored viewpoint was modified.

## Loading note

The page fetches many local GLB models and GIS/elevation JSON files. The first load is intentionally heavier than a single-file diorama; use a desktop browser with hardware acceleration.
