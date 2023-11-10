import { type ObjectType } from "../../type"

type SortBy = ObjectType<'desc' | 'asc' | unknown>

export type Pagination = {
	pageSize: number
	pageNo: number
	sortBy?: SortBy
	total?: number
}

export type DataSourceConfig = ObjectType & Pick<Pagination, 'sortBy'>


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
	/**
	 * @description 类型比对
	 */
	handle?(value: any, beValue: any): boolean
}

export interface PageQueryProps {
	/**
	 * @description 唯一索引
	 * @default 'id'
	 */
	uniqueIndex?: string
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
	/**
	 * @description 不需要范围处理的查询参数
	 */
	noRangeFields?: string[]
	fields?: ObjectType<Field>
}