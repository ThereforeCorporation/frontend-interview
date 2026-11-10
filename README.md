# FrontendInterview

Angular 22 application using Angular Material and the Angular CLI application builder.

## Requirements and installation

Use Node.js `^22.22.3`, `^24.15.0`, or `>=26.0.0` with npm.
The project does not pin an npm version.

```sh
npm ci
npm start
```

Open `http://localhost:4200/`. The development server reloads when source files change.

## Dependency release age

When updating dependencies, select versions published at least 14 days ago,
including transitive dependencies, and commit the updated `package-lock.json`.
The release-age policy must be checked manually. The Node.js requirement is
enforced by `engines` and `engine-strict`.

Angular framework 22.2.3 and CLI/Material 22.2.4 were the newest eligible stable
versions when this upgrade was performed. Newer releases become eligible after
their two-week waiting period; the lockfile keeps installations reproducible.

The `@angular/build` Vite override pins version 8.3.5 to fix the Vite security
advisories while preserving the 14-day release-age policy. Remove the override
when an eligible Angular build release includes a patched Vite version.

## Build

Run `npm run build` for a production build. Artifacts remain in
`dist/frontend-interview/`. Run `npm run watch` for a development build in watch mode.

## Tests

Run `npm test` for Karma tests, or `npm test -- --watch=false --browsers=ChromeHeadless`
for a single headless run. Chrome or Chromium must be installed; set `CHROME_BIN`
if the browser is not in its standard location.

## Code scaffolding

Use `npm run ng -- generate component component-name` to generate a component.
See the [Angular CLI documentation](https://angular.dev/tools/cli) for other commands.
