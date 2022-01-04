import * as fs from 'fs'
import * as path from 'path'

function readDirAllData(url: string, excludeDir: string[]): string {
  let allData: string = ''
  if (excludeDir && excludeDir.length > 0) {
    const urls: string = url.split(/[\/|\\|\\\\]/)
    if (
      excludeDir.length > 0 &&
      excludeDir.filter((item: string): boolean => urls.includes(item)).length >
        0
    ) {
      return allData
    }
  }
  let allfileAndDir: string[] = fs.readdirSync(url)
  allfileAndDir.forEach((item: stirng): void => {
    let itemUrl: string = url + '/' + item
    if (isFile(item)) {
      allData += fs.readFileSync(itemUrl)
    } else {
      allData += readDirAllData(itemUrl, excludeDir)
    }
  })
  return allData
}

// console.log(readDirAllData(path.join(__dirname, 'src','math'), ['math']))
// readDirAllData(path.join(__dirname, 'src', 'math'), ['math'])

function getDesc(data: any): string {
  return String(data).match(/@[\w]*[.\w\s\u4E00-\u9FA5].*/gi) || []
}

function getTestDesc(data: any): string {
  let reg: RegExp = /[\s|\t|\n].*((_.)|(logGroup))[\w]*?[(][\w\W)].*/gi
  return String(data).match(reg) || []
}
function isFile(url: string): boolean {
  return url.split('.').length > 1
}

function handleTestData(item: string): any {
  let itemList: any[] = []
  if (item.length < 1) return itemList

  if (/(logGroup\()/g.exec(item)) {
    let iitem: any = item
      .split(/(\n|\t)/)
      .filter((filterItem: string): boolean => {
        if (['\n', '//', 'logGroup(', '', '// ', '\t'].includes(filterItem)) {
          return false
        }
        return !!filterItem
      })
      .forEach((fItem: string): void => {
        /**
         * 缺少补充判断数据类型
         */
        // console.log('tt',fItem.indexOf('logGroup('));
        if (fItem.indexOf('logGroup(')>-1) {
          // console.log('tt',item.indexOf('logGroup(')===1);
          console.log('tt',fItem);
        // if (/(logGroup\()/g.exec(item)) {
          const fItemArr = fItem
            .split(/(logGroup\(')/)
            .filter((filterItem: string): boolean => {
              if (['\n', '//', '', '// ', '\t'].includes(filterItem)) {
                return false
              }
              return !!filterItem
            })
          // console.log({ fItemArr })
        }
      })

    // console.log({ iitem })
    // itemObj['title'] = item.replace(/title[\s]?/, '')
  }
  return itemList
}
function handleData(item: string): any {
  let itemObj: { [key: string]: any } = {}
  if (item.length < 1) return itemObj
  if (/title/g.exec(item)) {
    itemObj['title'] = item.replace(/title[\s]?/, '')
  }
  if (/description/g.exec(item)) {
    itemObj['description'] = item.replace(/description[\s]?/, '')
  }
  if (/returns/g.exec(item)) {
    itemObj['returns'] = item.replace(/returns[\s]?/, '')
  }
  if (/param/g.exec(item)) {
    itemObj['param'] = []
    const [key, value]: [string, string] = item
      .replace(/param[\s]?/, '')
      .split(/\s/)
    itemObj['param'].push({ [key]: value })
  }
  return itemObj
}

async function run(): void {
  let __path: string = path.join(__dirname, 'src')
  let dirs: string[] = fs.readdirSync(__path) || []

  const allData: { [key: string]: any } = {}

  dirs.forEach((dirName: string): void => {
    if (isFile(dirName)) return
    let __ipath: string = path.join(__dirname, 'src', dirName)
    let idirs: string[] = fs.readdirSync(__ipath) || []
    if (idirs.length < 1) return

    const iData: { [key: string]: any } = {}
    iData.urls = idirs
    iData.data = []
    iData.testData = []

    idirs.forEach((iipath: string): void => {
      const iiUrl: string = path.join(__dirname, 'src', dirName, iipath) || ''
      let itemObj: { [key: string]: any } = {}

      // 读取文件数据
      if (isFile(iipath)) {
        let tempData: string = String(getDesc(fs.readFileSync(iiUrl)))
        tempData.split('@').forEach((item: string): void => {
          itemObj = { ...itemObj, ...handleData(item) }
        })
        if (itemObj !== {}) iData.data.push(itemObj)
        return
      }
      // 读取数据, 不是index.ts文件下的数据
      if (!isFile(iipath) && iipath !== '__test__') {
        let tempData: string = String(
          getDesc(readDirAllData(iiUrl, ['__test__']))
        )
        tempData.split('@').forEach((item: string): void => {
          itemObj = { ...itemObj, ...handleData(item) }
        })
        if (itemObj !== {}) iData.data.push(itemObj)
        return
      }

      // 读取__test__数据
      if (iipath === '__test__') {
        let tempData: string = String(getTestDesc(readDirAllData(iiUrl)))
        tempData.split('@').forEach((item: string): void => {
          itemObj = { ...itemObj, ...handleTestData(item) }
        })
        if (itemObj !== {}) iData.testData.push(itemObj)
        return
      }
    })

    allData[dirName] = iData
  })
  // console.log(JSON.stringify(allData, null, 2))
}

run()
