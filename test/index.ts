import fs from 'fs'
import { loadModule } from 'unit-testing-js'
// npm run dev --modules=要运行的模块名(new)

const url = 'src'
const indexes: string[] = fs.readdirSync(url) || []

function runTest() {

  let modules: string[] = (process.env[`npm_config_modules`] || '').split(/,|_| /)

  if (modules.length === 1 && modules[0] === '') {
    loadModule(async () => {
      for (let i = 0; i < indexes.length; i++) {
        const name = indexes[i]
        if (!['index.ts', 'type.ts', 'constants.ts'].includes(name))
          await import(`../src/${name}/__test__`)
      }
      return []
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