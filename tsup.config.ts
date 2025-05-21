import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'], // Only build ESM (no CJS)
  dts: true,      // Generate TypeScript declarations
  clean: true,    // Clear dist/ before build
  splitting: false,
  sourcemap: true,
  external: ['react', 'react-dom'], // Avoid bundling React
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";', // Optional: Only needed if used in Next.js
    };
  },
  loader: {
    '.svg': 'dataurl', // Handle SVGs as data URLs
  },
});