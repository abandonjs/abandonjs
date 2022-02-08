import { logGroup as log } from '../../util'
import { once } from '../../function'
import * as _ from '../index'
const logGroup = once(log)

logGroup(
  'getValueByLocation(',
  _.getValueByLocation({ 1: 123 }, 1),
  _.getValueByLocation([1, 123], 1),
  _.getValueByLocation({ a: 123 }, 'a'),
  _.getValueByLocation({ a: { b: { c: 123 } } }, 'a.b.c'),
  _.getValueByLocation({ a: 123 }, 'a'),
  _.getValueByLocation({ a: 123 }, 'a'),
  _.getValueByLocation({}, 123)
)
