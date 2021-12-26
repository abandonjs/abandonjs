import * as _methods from './method'
import * as _number from './number'
import * as _string from './string'
import * as _time from './time'
import * as _util from './util'
import * as _array from './array'
import * as _object from './object'
import * as _function from './function'
import * as _math from './math'
import * as _collection from './collection'

const RH: any = Object.assign(
  _methods,
  _math,
  _number,
  _string,
  _time,
  _util,
  _array,
  _object,
  _function,
  _collection
)

export {
  _collection,
  _math,
  _function,
  _object,
  _methods,
  _number,
  _string,
  _time,
  _array,
  _util,
  RH
}
