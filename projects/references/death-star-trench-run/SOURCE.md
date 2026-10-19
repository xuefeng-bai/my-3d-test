# Source / Sync Record

## Upstream

- Repository: https://github.com/PhiloLabs/fable51-worlds
- World directory: `death-star-trench-run/`
- Commit: `d24028466530a15d58d3d94537e6317b84101589`
- License: MIT, copyright (c) 2026 PhiloLabs — see [LICENSE](LICENSE)
- Authoring model: Claude Fable 5.1 (as documented by the upstream project)

## Build

The upstream is a Vite + TypeScript app:

```bash
cd death-star-trench-run
npm install
npx vite build
# -> dist/
```

The Vite config was given `base: './'` so the static output resolves under the VITRINE reference route. The build uses Three.js r185.1 and its standard postprocessing/geometry addons.

## Local changes

1. Added a data-URI favicon.
2. Injected the VITRINE scene-index back link (top center).
3. Added VITRINE README / SOURCE / THIRD_PARTY_NOTICES and generated a preview screenshot.

No scene geometry, shaders, camera choreography, controls or gameplay code was modified.

## Trademark note

The upstream project is an unaffiliated homage. No film footage, audio, models or textures are bundled; every asset is procedural. `Star Wars`, X-wing, TIE fighter and Death Star are trademarks of Lucasfilm Ltd. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
