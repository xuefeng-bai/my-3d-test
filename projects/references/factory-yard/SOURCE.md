# Source / Sync Record

## Upstream

- Repository: https://github.com/Khalidabdi1/factory
- Commit: `438473a612ec8364f0046fb961133766da0c0be9`
- License: MIT, copyright (c) 2026 Khalid Abdi and Tolga Cohce — see [LICENSE](LICENSE)
- Authoring model: Claude Opus 5.5 (as documented by the upstream project)

## Build

The upstream is a Next.js 16 app with `output: 'export'`:

```bash
npm install
npm run build
# -> out/
```

For VITRINE, the temporary `next.config.ts` was changed to:

```ts
const config = {
  output: 'export',
  basePath: '/projects/references/factory-yard',
};
```

This keeps `_next/` assets and the page under the VITRINE reference route. The built `out/` tree is copied verbatim.

## Local changes

1. Added a data-URI favicon.
2. Injected the VITRINE scene-index back link (mode: bottom center; marked `vitrine-reference-back`).
3. Added VITRINE README / SOURCE / THIRD_PARTY_NOTICES and generated a preview screenshot.
4. Added the DM Mono OFL license file (`OFL-DM-Mono.txt`).

No world generation, simulation, UI or routing logic was modified.

## Rebuild note

If this case is moved to a different route, rebuild with a matching `basePath` or the Next asset URLs will point at the old location.
