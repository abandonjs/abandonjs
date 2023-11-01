import fs from 'fs'
import { loadModule, TestSetting } from 'unit-testing-js'

// npm run dev --modules=要运行的模块名(new)

TestSetting.set('isSummary', true)

const url = 'src'
const indexes: string[] = fs.readdirSync(url) || []

function runTest() {

  let modules: string[] = (process.env[`npm_config_modules`] || '').split(/,|_| /)

  loadModule(async () => {
    if (modules.length === 1 && modules[0] === '') {
      for (let i = 0; i < indexes.length; i++) {
        const name = indexes[i]
        if (!['index.ts', 'type.ts', 'constants.ts'].includes(name)) {
          try {
            await import(`../src/${name}/__test__`)
          } catch (error) {
            console.log(name, error)
          }
        }
      }
      return
    }
    if (modules.length > 0) {
      for (let i = 0; i < modules.length; i++) {
        const name = modules[i]
        if (indexes.includes(name) && !['index.ts', 'type.ts', 'constants.ts'].includes(name)) {
          await import(`../src/${name}/__test__`)
        }
      }
      return
    }

  })

}

runTest()

// const obj = {
//   a: 3
// }

// const v = new Proxy<any>(obj, {
//   get: function (target, prop, receiver) {
//     // console.log(target, prop, receiver)
//     return target[prop]
//   },
//   set: function (target, prop, receiver) {
//     // console.log(target, prop, receiver)
//     return Reflect.set(target, prop, receiver)
//   },
// })

// v.a = 123

// console.log(v.a)