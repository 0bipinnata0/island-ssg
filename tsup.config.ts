import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: {
    cli: "./src/node/cli.ts",
    index: "./src/node/index.ts",
    dev: "./src/node/dev.ts",
  },
  clean: true,
  bundle: true,
  splitting: true,
  outDir: "dist",
  minify: process.env.NODE_ENV === 'production',
  shims: true,
  format: ["cjs", "esm"],
  dts: true,
});
