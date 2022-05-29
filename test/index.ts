import * as _ from '../src/index'

// 情况一：通过 npm run test --arg=testArg
// 可以在 process.env.npm_config_arg 拿到输入的参数 'testArg'
// 情况二： npm run test --arg
// 则 process.env.npm_config_arg 为 true
// 情况三：npm run test --arg=false
// 则 process.env.npm_config_arg 为 ''
// const { eventBus } = RH

// console.log(process.env.npm_config_test)

// npm run dev --modules=要运行的模块名(new)

let indexes: string[] = [
  'array',
  'collection',
  'function',
  'lang',
  'math',
  'number',
  'method',
  'object',
  'string',
  'time',
  'util'
]

console.log(process.env)

let modules: string[] = (process.env[`npm_config_modules`] || '').split(/,|_/)

console.log({ modules })

modules.forEach((name: string): void => {
  if (indexes.includes(name)) {
    import(`../src/${name}/__test__`)
  }
})
