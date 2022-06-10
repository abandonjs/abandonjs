
// 文件类型判断
export function checkFileName(fileName: string, list) {
	if (typeof fileName !== 'string') return;
	const name = fileName.toLowerCase();
	return list.some(i => name.endsWith(`.${i}`) === true)
}

export function isImage(fileName: string) {
	return checkFileName(fileName, ['png', 'jpeg', 'jpg', 'png', 'bmp'])
}

export function isH5Video(fileName: string) {
	return checkFileName(fileName, ['mp4', 'webm', 'ogg'])
}
export function isPdf(fileName: string) {
	return checkFileName(fileName, ['pdf'])
}

export function isWord(fileName: string) {
	return checkFileName(fileName, ['doc', 'docx'])
}

export function isExcel(fileName: string) {
	return checkFileName(fileName, ['xlsx', 'xls'])
}


