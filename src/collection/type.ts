import type { MapType, ObjectType, SetType } from "type"

/**
 * @description 数据集合
 */
export type Collection = MapType | SetType | ObjectType | string | any[]

/**
 * @description 数据集合键(Key)
 */
export type CollectionKey = number | string | ObjectType | any[]

/**
 * @description 数据集合值(Value)
 */
export type CollectionValue = number | string | ObjectType | any[]