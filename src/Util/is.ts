// RegExp

/**
 * @title FileType
 * @description 文件名后缀, 仅识别数字和字母组成的文件拓展名后缀
 * @version 2.2.0
 */
export type FileType = 'Image' | 'Video' | 'PDF' | 'Word' | 'Excel'

/**
 * @title FileTypeMap
 * @description 文件类型映射
 * @version 2.2.0
 */
export const FileTypeMap = new Map<FileType, string[]>([
	['Image', ['png', 'jpeg', 'jpg', 'png', 'bmp']],
	['Video', ['mp4', 'webm', 'ogg']],
	['PDF', ['pdf']],
	['Word', ['doc', 'docx']],
	['Excel', ['.xlsx', '.xls', '.csv']],
])

/**
 * @title isFileExtension
 * @description 是否为指定字符串结尾
 * @param fileName string 文件名
 * @param list string[] 文件拓展名数组
 * @returns boolean
 * @version 2.2.0
 */
export function isFileExtension(fileName: string, list: string[] = []): boolean {
	if (typeof fileName !== 'string') return false;
	if (/\.[a-zA-Z0-9]{1,}/.exec(fileName) === null) return false
	if (list.length === 0) return true
	const name = fileName.toLowerCase();
	return list.some(i => name.endsWith(i) === true)
}

/**
 * @title isFile
 * @param fileName string
 * @param type {FileType}
 * @returns boolean
 * @version 2.2.0
 */
export function isFile(fileName: string, type: FileType): boolean {
	return isFileExtension(fileName, FileTypeMap.get(type))
}

/**
 * @title isImageFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
export function isImageFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Image'))
}

/**
 * @title isVideoFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
export function isVideoFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Video'))
}

/**
 * @title isPdfFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
export function isPdfFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('PDF'))
}

/**
 * @title isWordFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
export function isWordFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Word'))
}

/**
 * @title isExcelFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
export function isExcelFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Excel'))
}


export const isClient = typeof window !== 'undefined';


export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';

export const isWindow = (val: unknown): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]';
export const isIOS = /* #__PURE__ */ isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K => Object.prototype.hasOwnProperty.call(val, key);
