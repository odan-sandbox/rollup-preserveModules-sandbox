import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist-vite",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      },
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        preserveModules: true,
      },
    },
  },
});
