import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import path from "path"; // ✅ Required for path resolution
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);

export default defineConfig(({ mode }) => ({
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        split: new URL("./split/index.html", import.meta.url).pathname,
      },
    },
    define: {
      "process.env": {}, // Customize as needed
    },
    ...(mode === "production" && {
      minify: "terser",
      terserOptions: {
        compress: {
          toplevel: true,
        },
        keep_classnames: true,
      },
    }),
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
      treeShaking: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      process: "process/browser",
    },
  },
  plugins: [
    // babel({
    //   babelHelpers: "bundled",
    //   babelrc: false,
    //   configFile: false,
    //   exclude: "**/node_modules/**",
    //   extensions: ["jsx", "js", "ts", "tsx", "mjs"],
    //   plugins: ["@babel/plugin-transform-flow-strip-types"],
    //   presets: [["@babel/preset-react", { runtime: "automatic" }]],
    // }),
    react(),
    // commonjs({
    //   strictRequires: [/\/node_modules\/(react-dom|react)\/[^/]\.js$/],
    // }),
  ],
}));
