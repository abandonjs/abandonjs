const { read, pathResolve } = require('0file-system')
const fs = require('fs')
const path = require('path')

const _ = pathResolve(__dirname)

function toArray(...list) {
  return [].concat(...list)
}

const ignoreMap = {
  0: ['constants.ts', 'index.ts', 'type.ts'],
  global: ['__test__', '__tests__'],
  get: function (key) {
    return toArray(this[key], this.global)
  },
}

const run = () => {
  const data = []

  read(_('../src'), { ignoreMap, dataMerge: true })
    .split(/\/\*\*|\*\//)
    .filter((item) => item.indexOf('* @title') > -1)
    .forEach((unit) => {
      const obj = { params: [] }
      // const obj = { unit, params: [] }
      unit.split('* @').map((_) => {
        const item = _
        if (!(item && item.trim() !== '\\r\\n')) return
        const [, key] = /([\w_]*)/.exec(item) || []

        const value = item.replace(/^[\w_]* |\r\n\s?$/gi, '')

        // if (value === 'EventEmitter<T, U>') {
        //   console.log(unit, unit.split('* @'))
        // }
        if (key === 'param') {
          const mats = value.split(' ')
          const param = {
            // mats,
            type: 'any',
            name: '',
            description: '',
            origin: value,
          }

          const [a = '', b = '', ...c] = mats
          a && (param.type = a)
          b && (param.name = b)
          c && c.length && (param.description = c.join(' '))

          obj.params.push(param)
          return
        }
        if (obj[key]) {
          obj[key] = Array.isArray(obj[key])
            ? [...obj[key], value]
            : [obj[key], value]
          return
        }
        if (key) {
          obj[key] = value
          return
        }
      })
      data.push(obj)
    })
  fs.writeFile(_('./temp.json'), JSON.stringify(data, null, 2), () => {})
  fs.writeFile(_('./temp.min.json'), JSON.stringify(data), () => {})
}
// setInterval(() => {
run()
// }, 3000)
