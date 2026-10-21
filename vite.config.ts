import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    attw: true,
    banner: "// ◈ Build, iterate, ship — Ari He",
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
    },
    devtools: true,
    dts: {
      generator: "tsgo",
    },
    exports: true,
    footer: "// ◈",
    platform: "browser",
    publint: true,
    sourcemap: true,
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    sortPackages: true,
    sortImports: true,
  },
});
