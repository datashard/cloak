# AGENTS.md

## Commands
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Production build
- `pnpm preview` - Preview production build

## Architecture
Astro 5 SSR site with React components and TailwindCSS.
- `src/pages/` - Astro pages (index, about, projects, snapshot)
- `src/components/` - Reusable Astro/React components
- `src/layouts/` - Page layouts (Main.astro)
- `src/content/` - Content collections with type definitions
- `src/lib/` - Utilities (cn() for class merging, constants)

## Code Style
- Use `@/*` path alias for imports from src/
- TypeScript with strict mode; use proper interface Props for components
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Astro components: frontmatter in `---` blocks, Props interface pattern
- React components use JSX with react-jsx transform
- TailwindCSS for styling; no inline styles
