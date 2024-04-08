import ts from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { eslint } from 'rollup-plugin-eslint'
import terser from '@rollup/plugin-terser'

const name = 'abandonjs'

export default {
  input: 'src/index.ts',
  output: [
    // 输出 commonjs 规范的代码
    {
      file: 'lib/index.js',
      format: 'cjs',
      name,
      sourcemap: true
    },
    {
      file: 'lib/index.min.js',
      format: 'cjs',
      name,
      sourcemap: true,
      plugins: [terser()]
    },
    // 输出 es 规范的代码
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      name,
      sourcemap: true
    },
    {
      file: 'lib/index.esm.min.js',
      format: 'esm',
      name,
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'lib/**', '*.js', 'dist/**']
    }),
    json(),
    ts(),
    commonjs(),
    resolve()
  ]
}
