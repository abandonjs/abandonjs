import * as _ from '../src/index'
import fs from 'fs'

// npm run dev --modules=要运行的模块名(new)

const url = 'src'
const indexes: string[] = fs.readdirSync(url) || []

function runTest() {

  let modules: string[] = (process.env[`npm_config_modules`] || '').split(/,|_| /)

  if (modules.length === 1 && modules[0] === '') {
    indexes.forEach((name: string): void => {
      if (!['index.ts', 'type.ts', 'constants.ts'].includes(name))
        import(`../src/${name}/__test__`)
    })
    return;
  }

  if (modules.length > 0) {
    modules.forEach((name: string): void => {
      if (indexes.includes(name)) {
        import(`../src/${name}/__test__`)
      }
    })

  }
}


runTest()