import * as _ from '../index'
import { once } from '../../function'
import { logGroup as log } from '../../Util'

const logGroup: any = once(log)

logGroup(
  'countingMethod',
  _.countingMethod(1024),
  _.countingMethod(1024 * 12),
  _.countingMethod(1024 ** 3 + 1024 * 12 + 12),
  _.countingMethod(1024 * 12),
  _.countingMethod(1024 * 12)
)

logGroup(
  'clamp',
  _.clamp(-10, -5, 5),
  // => -5
  _.clamp(10, -5, 5)
  // => 5
)

logGroup(
  'isRange',
  _.inRange(3, 2, 4),
  // => true

  _.inRange(4, 8),
  // => true

  _.inRange(4, 2),
  // => false

  _.inRange(2, 2),
  // => false

  _.inRange(1.2, 2),
  // => true

  _.inRange(5.2, 4),
  // => false

  _.inRange(-3, -2, -6)
  // => true
)

logGroup(
  'random',
  _.random(0, 5), // => an integer between 0 and 5

  _.random(5), // => also an integer between 0 and 5

  _.random(5, true), // => a floating-point number between 0 and 5

  _.random(1.2, 5.2),
  _.random(1.2, 5.2, true) // => a floating-point number between 1.2 and 5.2
)
