import * as _ from '../index'
import { logGroup } from '../../util'

logGroup( 'id',
  _.uniqueId(),
  _.uniqueId('contact_'),
  _.uniqueId(23, 'contact_'),
  _.id(),
  _.id(-111),
  _.id(),
  _.id(),
  _.id(),
  _.uuid()
)

let a: any = { a: 1 }
logGroup('identity', _.identity(a) === a)
