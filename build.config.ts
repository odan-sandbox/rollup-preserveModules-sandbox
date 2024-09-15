import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index.ts"],
  outDir: "dist-unbuild",
  declaration: true,
  rollup: {
    output: {
      preserveModules: true,
    },
  },
  sourcemap: true,
});
