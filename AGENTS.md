# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only React SPA** (no backend, no database, no external services). Built with React 18, Vite 6, Tailwind CSS v4, and React Router 7.

### Running the app

- `npm run dev` starts the Vite dev server on `localhost:5173` (see `README.md`).
- `npm run build` generates the sitemap then builds to `dist/`.

### Important notes

- **No lint or test scripts** are configured. There is no ESLint config, no TypeScript config (`tsconfig.json`), and no test framework.
- **No environment variables required.** The only optional env var is `VITE_SITE_URL` (defaults to the production URL; only affects SEO meta tags).
- `react` and `react-dom` are listed as `peerDependencies` (not `dependencies`). They are installed transitively via other packages. If dependency resolution ever fails for React, install them explicitly.
- The `@` path alias resolves to `./src` (configured in `vite.config.ts`).
