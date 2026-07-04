# AGENTS.md

## Project

Astro website for "amrich" — product pages for aquaculture/agriculture products. Deployed on Netlify.

## Structure

- `src/pages/products/` — product category pages (currently empty directories)
- `reports/` — Lighthouse and design critique reports (JSON/HTML)
- `astro/`, `context/`, `fullstack/`, `github/`, `prompt/` — skill definitions (template SKILL.md files)
- `.opencode/` — OpenCode agent state (not for editing)

## Commands

```sh
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Conventions

- Commit messages use conventional commits (`feat:`, `fix:`, etc.)
- `.gitignore` excludes: `node_modules`, `.astro/`, `.netlify/`, `dist/`, `playwright-report/`, `test-results/`
- `.opencode/.gitignore` excludes package manager files — do not commit `package.json` or lockfiles to `.opencode/`
