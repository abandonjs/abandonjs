/* eslint-disable*/
const fs = require('fs')
const path = require('path')

function toArray(...list) {
	return [].concat(...list)
}

const ignoreMap = {
	0: ['constants.ts', 'index.ts', 'type.ts'],
	global: ['__test__', '__tests__'],
	get: function (key) {
		return toArray(this[key], this.global)
	}
}

function readdirSync(lv, ...rest) {
	try {
		const dirs = toArray(fs.readdirSync(...rest)).filter(i => !ignoreMap.get(lv).includes(i))
		return dirs
	} catch (error) {
		console.error(lv, ...rest, error)
		return []
	}
}
function readFileSync(lv, ...rest) {
	try {
		const dirs = toArray(fs.readFileSync(...rest)).filter(i => !ignoreMap.get(lv).includes(i))
		return dirs
	} catch (error) {
		console.error(lv, ...rest, error)
		return []
	}
}

function isFile(url) {
	return String(url).indexOf('.ts') > -1
}

const dataMap = new Map()

function AdaptData(data, module) {
	const itemName = []
	data.split(/\/\*\*|\*\//)
		.filter(item => item.indexOf('* @') > -1)
		.forEach(item => {
			let name = undefined
			let eg = undefined
			const record = item
				.split('* ')
				.map(iitem => {

					const matchs = /^@(title) (.+)/.exec(iitem)
					if (matchs && matchs.length === 3) {
						name = matchs[2]
						return;
					}

					const flag = iitem.indexOf('@eg')
					if (flag > -1) {
						eg = iitem.replace(/^@eg/, '')
						return;
					}
					iitem = iitem
						.replace('\r\n ', '')
						.replace(/@([a-zA-Z0-9\$]{2,}) ([a-zA-Z0-9\$]{1,}) \{(.+)\}/gi,  '`$1` `$2` `$3`')
						.replace(/@([a-zA-Z0-9\$]{2,}) ([a-zA-Z0-9\$]{1,})/gi,  '`$1` `$2`')
						.replace(/@([a-zA-Z0-9]+)/, '`$1`')
						// .replace(/@returns/, '`returns`')
						// .replace(/@return/, '`return`')
						// .replace(/([a-zA-Z0-9\$\[\]\=\{\}\(\)\.\,\|:\?><]{2,})/gi, '`' + '$1' + '`')

					return iitem

				})
				.filter(i => i && !['\r\n', '\r\n '].includes(i))
				.map(item => {
					return '> - ' + item
				})

			if (!name) return;

			itemName.push(name)
			dataMap.set(name, {
				desc: record.join('\r\n'),
				module,
				eg,
			})

		})
	return itemName
}


function action(inputPath, outputPath, lv = 0) {
	const dirs = readdirSync(lv, inputPath)

	if (lv === 2) return;
	dirs.forEach(dir => {
		const newInputPath = inputPath + '/' + dir
		const newOutputPath = outputPath + '/' + dir.replace('.ts', '.md')
		const _lv = lv + 1

		if (isFile(dir)) {
			const file = readFileSync(_lv, newInputPath)
			const names = AdaptData(file.toString(), dir)
			if (names.length === 0) return;
			// console.log(names)
			names.forEach(name => {
				const _path = outputPath + '/' + name.split(/[ /<]/)[0] + '.md'
				const { desc, eg } = dataMap.get(name)
				let _data =
					`# ${name}

${desc}
`

				if (eg) {
					_data += eg
				}

				fs.writeFileSync(_path, _data)
			})
			return
		}

		try {
			if (newOutputPath.indexOf('/util/util') === -1) {
				fs.mkdirSync(newOutputPath)
			}
		} catch (error) { }
		action(newInputPath, newOutputPath, _lv)
	})
}

// action('./src', '../guanruihua.github.io/OpenSource/abandonjs')
action('./src', '../abandonjs.github.io')
// action('./src', './docs')
console.log('Build docs success...')