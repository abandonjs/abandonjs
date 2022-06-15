import * as _ from '../src/index'
import fs from 'fs'

// npm run dev --modules=要运行的模块名(new)

const url = 'src'
const indexes: string[] = fs.readdirSync(url) || []

let modules: string[] = (process.env[`npm_config_modules`] || '').split(/,|_| /)

if (modules.length > 0) {
  modules.forEach((name: string): void => {
    if (indexes.includes(name)) {
      import(`../src/${name}/__test__`)
    }
  })
}

else {
  modules.forEach((name: string): void => {
    import(`../src/${name}/__test__`)
  })
}
