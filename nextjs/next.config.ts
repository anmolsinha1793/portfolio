import type { NextConfig } from "next";

/**
 * Two deployment targets:
 *
 *  - Vercel (default): normal Next.js build at the domain root.
 *  - GitHub Pages (`GITHUB_PAGES=true`): static export served from the
 *    `/portfolio` subpath, because Pages serves project sites under the repo
 *    name. `cacheComponents` and `partialPrefetching` are server features and
 *    are dropped here since an export has no server.
 *
 * `NEXT_PUBLIC_BASE_PATH` is injected from the single `GITHUB_PAGES` switch so
 * the value the client code sees can never drift from the value Next uses.
 */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
