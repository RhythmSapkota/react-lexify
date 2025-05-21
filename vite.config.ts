import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src/images/icons/scissors.svg'),
          dest: path.resolve(__dirname, 'dist/images/icons')
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "RsRichEditor",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: "named",
        assetFileNames: 'assets/[name][extname]'
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});