import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  outDir: "./dist-tsdown",
  format: "esm",
  clean: true,
  dts: true,
});
