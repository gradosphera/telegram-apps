import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import { createRequire } from 'node:module';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const input = 'src/index.ts';
const external = [
  '@tma.js/utils',
  '@tma.js/init-data',
  '@tma.js/bridge',
  '@tma.js/parsing',
  '@tma.js/colors',
  '@tma.js/event-emitter',
];

export default [
  defineConfig({
    input,
    output: [
      { file: pkg.main, format: 'commonjs', sourcemap: true },
      { file: pkg.module, format: 'esm', sourcemap: true },
    ],
    external,
    plugins: [typescript({ tsconfig: './tsconfig.build.json' }), terser()],
  }),

  defineConfig({
    input,
    output: {
      file: pkg.browser,
      format: 'iife',
      name: '@tma.js/sdk',
      sourcemap: true,
    },
    plugins: [typescript({ tsconfig: './tsconfig.build.json' }), nodeResolve(), terser()],
  }),

  defineConfig({
    input,
    output: { file: pkg.types },
    external,
    plugins: [typescript({
      tsconfig: './tsconfig.build.json',
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        sourceMap: false,
        inlineSources: false,
      },
    }), terser()],
  }),
];
