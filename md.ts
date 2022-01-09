import * as fs from 'fs'
import * as path from 'path'

function isFile(url: string): boolean {
  return url.split('.').length > 1
}

async function run(): Promise<void> {
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
      if (/([\w].*?)((.md)|(.spec.ts))/.test(iipath)) {
        console.log('过滤文件:', iipath)
        return
      }
      if (isFile(iipath)) {
        let __data: string = fs.readFileSync(iiUrl).toString()
        let __dataArray: string[] = []
        let __reg: RegExp = /\/\*\*|\*\//
        __dataArray = __data.split(__reg).filter((__item: string): boolean => {
          return __item.indexOf('* @') > -1
        })

        itemObj.data = __dataArray.map((item: string): string => {
          if (item.indexOf('@title') > -1) {
            item = item.replace(' * @title', '###')
          }
          return item
        })
        if (itemObj !== {}) iData.data.push(itemObj)
        return
      }
    })

    allData[dirName] = iData
  })

  // 组合数据
  const __file_flag: string = '\r\n------\r\n------\r\n'
  let __writeFileData: string =
    fs.readFileSync('./README.md').toString().split(__file_flag)[0] +
    __file_flag

  Object.keys(allData).forEach((item: any, index: number): void => {
    if (item === 'test') return;
    __writeFileData +=
      `\r\n<hr/>\r\n## ${item}\r\n` +
      allData[item].data[0].data.join('').replace(/ \* @/g, '> - ')
  })

  try {
    fs.writeFileSync('./README.md', __writeFileData)
    console.log(`---生成成功, ctrl + c 暂停 ---`)
  } catch (error) {
    console.log(`---生成失败, ctrl + c 暂停 ---`)
  }
}

run()
