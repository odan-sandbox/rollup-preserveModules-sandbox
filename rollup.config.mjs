import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist-rollup",
    format: "esm",
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [
    typescript({
      compilerOptions: {
        outDir: "dist-rollup",
      },
      declaration: true,
    }),
  ],
});
