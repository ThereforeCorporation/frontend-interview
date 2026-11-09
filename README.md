# FrontendInterview

Angular 22 application using Angular Material and the Angular CLI application builder.

## Requirements and installation

Use Node.js `^22.22.3`, `^24.15.0`, or `>=26.0.0`, and npm `>=12.2.1 <13`
(the project's selected version is npm 12.2.1). To upgrade an older npm, run
`npm install --global npm@12.2.1` from outside this project directory first.

```sh
npm ci
npm start
```

Open `http://localhost:4200/`. The development server reloads when source files change.

## Dependency release age

The project `.npmrc` sets `min-release-age=14`, so npm selects dependency versions
published at least 14 days ago, including transitive dependencies. Keep this setting
when updating dependencies and commit the updated `package-lock.json`.
The Node.js and npm requirements are enforced by `engines`, `devEngines`, and
`engine-strict` so older npm clients cannot silently ignore the release-age policy.

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
