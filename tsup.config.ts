import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: {
    entry: 'src/index.ts',
    resolve: true,
  },
  clean: true,
  splitting: false,
  sourcemap: true,
  target: 'esnext',
  tsconfig: './tsconfig.build.json',
  external: ['react', 'react-dom'],
  loader: {
    '.svg': 'dataurl',
  },
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";',
    };
  },
});
