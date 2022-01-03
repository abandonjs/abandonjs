import * as fs from 'fs'
import * as path from 'path'

function getDesc(data: any): string {
  return String(data).match(/@[\w]*[.\w\s\u4E00-\u9FA5].*/gi) || []
  // return String(data).match(/\/\*\*[\s\S^(\*\/)]*\//gi) || []
}

function isFile(url: string): boolean {
  return url.split('.').length > 1
}

async function run(): void {
  let __path: string = path.join(__dirname, 'src')
  let dirs: string[] = fs.readdirSync(__path) || []

  const allData: { [key: string]: any } = {}

  dirs
    .filter((dirName: string): boolean => !isFile(dirName))
    .forEach((dirName: string): void => {
      let __ipath: string = path.join(__dirname, 'src', dirName)
      let idirs: string[] = fs.readdirSync(__ipath) || []
      if (idirs.length < 1) return
      const iData: { [key: string]: any } = {}
      iData.urls = idirs
      iData.data = ''
      iData.testData = ''
      idirs.forEach((iipath: string): void => {
        const iiUrl: stirng = path.join(__dirname, 'src', dirName, iipath) || ''
        if (isFile(iipath)) {
          iData.data += getDesc(fs.readFileSync(iiUrl))
          return
        }

        // if (iipath === '__test__') {
        // 	iData.testData = fs.readFileSync(path.join(__dirname, 'src', dirName, iipath))
        // }
      })

			iData.data = iData.data.split("@")
      allData[dirName] = iData
      // console.log({ idirs })
    })
  console.log(allData)
}

run()
