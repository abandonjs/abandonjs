import { test, toBe } from 'unit-testing-js'
import { MapEntity } from '../..'

const me = new MapEntity<any>()

console.log([{ a: 1 }].includes({ a: 1 }))

me.set('1', '2')
me.set({ b: 1 }, 123)

test('MapEntity:start', toBe,
	{ param: me.get('1'), tobe: '2' },
	{ param: me.get({ b: 1 }), tobe: 123 },
	{ param: me.size, tobe: 2 },
)

me.set('1', '3')
me.set({ b: 1 }, 12)

test('MapEntity:update', toBe,
	{ param: me.get('1'), tobe: '3' },
	{ param: me.get({ b: 1 }), tobe: 12 },
	{ param: me.size, tobe: 2 },
)


me.delete('1')
me.delete({ b: 1 })

test('MapEntity:delete', toBe,
	{ param: me.get('1'), tobe: undefined },
	{ param: me.get({ b: 1 }), tobe: undefined },
	{ param: me.size, tobe: 0 },
)

me.set('1', '3')
me.set({ b: 1 }, 12)

const tValue: unknown[] = []

me.forEach((value) => {
	tValue.push(value)
})

test('MapEntity:forEach', toBe,
	{ param: tValue, tobe: ['3', 12] },
	{ param: me.size, tobe: 2 },
)

me.clear()

test('MapEntity:stepLast', toBe,
	{ param: me.get('1'), tobe: undefined },
	{ param: me.get({ b: 1 }), tobe: undefined },
	{ param: me.size, tobe: 0 },
)