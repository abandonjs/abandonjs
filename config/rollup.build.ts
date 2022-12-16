import path from 'path'
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
import pkg from '../package.json'

const paths = {
  input: path.join(__dirname, '..', '/src/index.ts'),
  output: path.join(__dirname, '..', '/lib')
}

const rollupConfig = {
  input: paths.input,
  output: [
    // 输出 commonjs 规范的代码
    {
      file: path.join(paths.output, 'index.js'),
      format: 'cjs',
      name: pkg.name,
      sourcemap: true
    },
    // 输出 es 规范的代码
    {
      file: path.join(paths.output, 'index.esm.js'),
      format: 'esm',
      name: pkg.name,
      sourcemap: true
    }
  ],
  plugins: [
    // 验证导入的文件
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'lib/**', '*.js', 'dist/**']
    }),

    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),

    // 配合 commonjs 解析第三方模块
    resolve(),
    rollupTypescript(),
    babel({
      babelHelpers: 'runtime',
      // runtimeHelpers: true,
      // 只转换源代码，不运行外部依赖
      exclude: 'node_modules/**',
      // tsconfig: 'tsconfig.json',
      include: 'src',
      // babel 默认不支持 ts 需要手动添加
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts']
    }),
    // terser()

  ]
}

export default rollupConfig
