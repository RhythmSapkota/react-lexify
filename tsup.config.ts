import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],  // Your main entry file
  format: ['esm', 'cjs'],   // Generate both module types
  dts: true,               // Generate declaration files
  sourcemap: true,         // Helpful for debugging
  clean: true,             // Clean dist folder before build
  external: ['react', 'react-dom'], // Critical to prevent duplicate React
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";'  // If using Next.js with app router
    }
  },
  // If you need to bundle specific dependencies:
  noExternal: ['lexical', '@lexical/*'] // Bundle lexical but not React
})