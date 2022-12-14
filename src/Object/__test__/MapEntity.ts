import { UnitTest } from 'unit-testing-js'
import { MapEntity } from '../..'

const me = new MapEntity<any>()


me.set({ k: 1 }, 123).set('1', '2')

// console.log(me)
// console.log(me.get({ k: 1 }))
// 
