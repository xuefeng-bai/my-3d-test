# Source / Sync Record

## Upstream

- Repository: https://github.com/PhiloLabs/fable51-worlds
- World directory: `kyoto-higashiyama/`
- Commit: `d24028466530a15d58d3d94537e6317b84101589`
- License: MIT, copyright (c) 2026 PhiloLabs — see [LICENSE](LICENSE)
- Authoring model: Claude Fable 5.1 (as documented by the upstream project)

## Build

The upstream viewer is a self-contained HTML file produced from the Vite output:

```bash
# in kyoto-higashiyama/
npm install
npx vite build
node viewer/build.mjs
# -> viewer/higashiyama.html
```

The synced `index.html` is that standalone viewer output. The geometry, textures, UI and Three.js runtime are all inlined; there are no external assets at runtime.

## Local changes

1. Removed the optional Google Fonts preconnect/stylesheet. The viewer's CSS declares local font fallbacks, so it remains fully offline.
2. Added a data-URI favicon.
3. Injected the VITRINE scene-index back link (marked `vitrine-reference-back`).
4. Added a small in-viewer OpenStreetMap / GSI credit line.
5. Added VITRINE README / SOURCE / THIRD_PARTY_NOTICES and generated a new preview screenshot.

No world geometry, camera, controls, colour treatment or authored viewpoints were modified.

## Data attribution

The upstream README states that geometry is derived from OpenStreetMap (ODbL) and GSI elevation data, with cultural-property records used for architectural dimensions. Reference photographs are not redistributed. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the notices carried with this snapshot.
