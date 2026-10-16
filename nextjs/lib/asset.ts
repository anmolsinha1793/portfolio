/**
 * Prefixes a `public/` asset path with the deployment's base path.
 *
 * GitHub Pages serves this project at `/portfolio/`, so absolute paths like
 * `/assets/img/x.png` would 404 there. Next's `basePath` only rewrites URLs it
 * generates itself — it does not touch absolute paths we write by hand — so
 * every `public/` reference goes through here.
 *
 * The value is inlined at build time; it is empty for the Vercel build and
 * `/portfolio` for the GitHub Pages build.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const asset = (path: string) => `${BASE_PATH}${path}`;
