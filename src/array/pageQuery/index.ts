/* eslint-disable*/
import { isEffectArray, isEffectObject, isEmpty, isNumber, isString } from "asura-eye"
import { type ObjectType } from "../../type"
import { stringify, vid } from "../../string"
import { Pagination, type PageQueryProps } from './type'

export function pageQuery(props: PageQueryProps = {}) {
  const {
    uniqueIndex = 'id',
    fields,
    fuzzyQuery = true,
    numberFuzzyQuery = false,
    dataSource: originDataSource = [],
  } = props

  // 原始数据
  let dataSource = [...originDataSource]

  const getConfig = (key: string) => {
    let useNumberFuzzyQuery = numberFuzzyQuery
    let useFuzzyQuery = fuzzyQuery

    if (fields) {
      const { numberFuzzyQuery, fuzzyQuery } = fields[key] || {}
      if (!isEmpty(numberFuzzyQuery)) useNumberFuzzyQuery = numberFuzzyQuery
      if (!isEmpty(fuzzyQuery)) useFuzzyQuery = fuzzyQuery
    }
    return {
      useFuzzyQuery,
      useNumberFuzzyQuery,
    }
  }

  const getValue = (record: ObjectType, key: string) => {
    let value = record[key]
    if (isEmpty(value)) return ''
    const { useFuzzyQuery, useNumberFuzzyQuery } = getConfig(key)

    if (isString(value) && useFuzzyQuery) {
      value = value.trim().toUpperCase()
    }

    if (isNumber(value) && useNumberFuzzyQuery) {
      value = stringify(value)
    }

    return value
  }

  const isEqual = (item: ObjectType, params: ObjectType, key: string): boolean => {
    const value = getValue(item, key)
    const beValue = getValue(params, key)

    const { useFuzzyQuery } = getConfig(key)


    if (isNumber(value)) {
      return value === beValue
    }

    if (useFuzzyQuery && isString(value) && isString(beValue)) {
      return value.indexOf(beValue) > -1
    }

    return value === beValue
  }

  const getDataSource = (params?: ObjectType) => {
    if (isEffectObject(params)) {
      return [...dataSource].filter(item => {
        for (let key in params) {
          if (!isEqual(item, params, key)) return false
        }
        return true
      })
    }
    return [...dataSource]
  }

  const getPage = (
    params?: ObjectType,
    pagination: Pagination = { pageNo: 1, pageSize: 10 }
  ) => {
    const { pageNo, pageSize } = pagination

    const newDataSource = getDataSource(params)

    return {
      dataSource: newDataSource.slice((pageNo - 1) * pageSize, pageNo * pageSize),
      pagination: {
        pageNo,
        pageSize,
        total: newDataSource.length
      }
    }
  }

  const removeOne = (index: string) => {
    if (!isEmpty(index)) {
      dataSource = getDataSource()
        .filter(item => item[uniqueIndex] !== index)
    }
  }

  const removes = (indexes: string[]) => {
    if (isEffectArray(indexes)) {
      dataSource = getDataSource()
        .filter(item => !indexes.includes(item[uniqueIndex] as any))
    }
  }

  const addOne = (record: ObjectType) => {
    if (isEmpty(record[uniqueIndex])) {
      record[uniqueIndex] = '__vid__' + vid()
    }
    dataSource.unshift(record)
  }

  const adds = (records: ObjectType[]) => {
    if (isEffectArray(records)) {
      records.forEach(addOne)
    }
  }

  return {
    dataSource,
    getPage,
    getDataSource,
    removeOne,
    removes,
    addOne,
    adds,
  }
}