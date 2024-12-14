import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["./src/node/cli.ts", "./src/node/index.ts"],
  clean: true,
  bundle: true,
  splitting: true,
  outDir: "dist",
  shims: true,
  format: ["cjs", "esm"],
  dts: true,
});
