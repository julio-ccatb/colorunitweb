/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com", protocol: "https" },
      { hostname: "www.svgrepo.com", protocol: "https" },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
