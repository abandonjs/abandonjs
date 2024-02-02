import * as _ from '..'
import { test } from 'unit-testing-js'

test(
  _.like,
  {
    params: [{ a: 123 }, { a: '1 23  ' }],
    tobe: true
  },
  {
    params: [{ a: 123 }, {}],
    tobe: true
  },
  {
    params: [{ b: 123, a: 12 }, { b: 123 }],
    tobe: true
  },
  {
    params: [{ a: 123 }, { b: 123 }],
    tobe: false
  },
  {
    params: ['a111c', 'accc'],
    tobe: false
  },
  {
    params: ['a111c', 'ac1'],
    tobe: true
  },
  {
    params: ['11111', '1'],
    tobe: true
  },
  {
    params: ['1', '1'],
    tobe: true
  },
  {
    params: ['1', 1],
    tobe: true
  },
  {
    params: [1, 1],
    tobe: true
  }
)
