import { isEffectObject, isEmpty, isNumber } from "asura-eye"
import { ObjectType } from "../type"
import { stringify } from "../string"

type Paging = {
	pageSize: number
	pageNo: number
}

type Field = {
		/**
	 * @description 模糊查询(包含不区分大小写, 去除前后空格, 优先级比单独指定低)
	 * @default true
	 */
	fuzzyQuery?: boolean
	/**
	 * @description 数字类型模糊查询(包含不区分大小写, 去除前后空格, 优先级比单独指定低)
	 * @default false
	 */
	numberFuzzyQuery?: boolean
}

export interface PageQueryProps {
	/**
	 * @description 待处理数组
	 */
	list?: ObjectType[]
	/**
	 * @description 过滤条件
	 */
	params?: ObjectType
	/**
	 * @description 分页
	 */
	paging?: Paging
	/**
	 * @description 模糊查询(包含不区分大小写, 去除前后空格, 优先级比单独指定低)
	 * @default true
	 */
	fuzzyQuery?: boolean
	/**
	 * @description 数字类型模糊查询(包含不区分大小写, 去除前后空格, 优先级比单独指定低)
	 * @default false
	 */
	numberFuzzyQuery?: boolean
	fields?: ObjectType<Field>
}

export function pageQuery(props: PageQueryProps = {}) {
	const {
		fields,
		fuzzyQuery = true,
		numberFuzzyQuery = false,
		list = [], paging, params = {}
	} = props
	const {
		pageNo = 1,
		pageSize = 10,
	} = paging || {}

	const result = {
		// 过滤条件过滤的数组
		list,
		// 分页要显示的数组
		pageList: [] as ObjectType[],
		paging: {
			pageNo,
			pageSize,
			total: 0,
		}
	}

	const getValue = (record: ObjectType, key: string) => {
		let value = record[key]
		if (isEmpty(value)) return ''
		return value
	}

	const isEqual = (value: unknown, beValue: unknown, name: string): boolean => {
		let useNumberFuzzyQuery =  numberFuzzyQuery
		let useFuzzyQuery =  fuzzyQuery
		if(fields){
			const {numberFuzzyQuery, fuzzyQuery} =fields[name]
			if(!isEmpty(numberFuzzyQuery)) useNumberFuzzyQuery = numberFuzzyQuery
			if(!isEmpty(fuzzyQuery)) useFuzzyQuery = fuzzyQuery
		}

		let valueStr = stringify(value).trim()
		let beValueStr = stringify(beValue).trim()

		if (isNumber(value)) {
			if (useNumberFuzzyQuery) {
				return valueStr.indexOf(beValueStr) > -1
			}
			return stringify(value) === stringify(beValue)
		}

		if (useFuzzyQuery) {
			return valueStr.toUpperCase().indexOf(beValueStr.toUpperCase()) > -1
		}

		return valueStr.indexOf(beValueStr) > -1
	}


	if (isEffectObject(params)) {
		result.list = [...list].filter(item => {
			for (let key in params) {
				const value = getValue(item, key)
				const beValue = getValue(params, key)
				if (!isEqual(value, beValue, key)) return false
			}
			return true
		})
	}

	const start = (pageNo - 1) * pageSize
	const end = pageNo * pageSize

	let newList: ObjectType[] = (pageNo < 1 || pageSize < 1) ? [] : [...result.list]

	result.pageList = newList.slice(start, end)
	result.paging.total = result.list.length

	return result
}