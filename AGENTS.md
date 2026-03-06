## Cursor Cloud specific instructions

This is a frontend-only React SPA (no backend, database, or external services). All data is hardcoded in TypeScript files under `src/app/data/`.

### Running the app

See `README.md` for standard commands (`npm i`, `npm run dev`). The Vite dev server starts on `http://localhost:5173/`.

### Notes

- There are no `lint` or `test` scripts configured in `package.json`. The only available npm scripts are `dev`, `build`, and `generate:sitemap`.
- The build produces warnings about duplicate `style` JSX attributes in `MultiStepForm.tsx`, `PromotionBanner.tsx`, and `BeforeAfterShowcase.tsx`. These are pre-existing and non-blocking.
- The contact/estimate forms do not make real API calls — they set local React state and show a "Thank You" confirmation.
- `react` and `react-dom` are listed as `peerDependencies` (not `dependencies`); `npm install` resolves them automatically.
