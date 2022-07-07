
/**
 * @title IsEndOfStrings
 * @description 是否为指定字符串结尾
 * @param fileName string
 * @param list string[]
 * @returns boolean
 */
export function IsEndOfStrings(fileName: string, list: string[] = []): boolean {
	if (typeof fileName !== 'string') return false;
	const name = fileName.toLowerCase();
	return list.some(i => name.endsWith(i) === true)
}
/**
 * @title isImage
 * @param fileName string
 * @returns boolean
 */
export function isImage(fileName: string): boolean {
	return IsEndOfStrings(fileName, ['.png', '.jpeg', '.jpg', '.png', '.bmp'])
}

/**
 * @title isH5Videos
 * @param fileName string
 * @returns boolean
 */
export function isH5Video(fileName: string): boolean {
	return IsEndOfStrings(fileName, ['.mp4', '.webm', '.ogg'])
}

/**
 * @title isPdf
 * @param fileName string
 * @returns boolean
 */
export function isPdf(fileName: string): boolean {
	return IsEndOfStrings(fileName, ['.pdf'])
}

/**
 * @title isWord
 * @param fileName string
 * @returns boolean
 */
export function isWord(fileName: string): boolean {
	return IsEndOfStrings(fileName, ['.doc', '.docx'])
}

/**
 * @title siExcel
 * @param fileName string
 * @returns boolean
 */
export function isExcel(fileName: string): boolean {
	return IsEndOfStrings(fileName, ['.xlsx', '.xls', '.csv'])
}


