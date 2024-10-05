import { defineConfig } from "@farmfe/core";

export default defineConfig({
  compilation: {
    input: {
      main: "src/main.ts",
    },
    output: {
      format: "esm",
      targetEnv: "library-browser",
    },
    presetEnv: false,
    minify: false,
  },
});
