import { UnitTest, toBe } from 'unit-testing-js'
import { ObjectEntity } from '.'

const obj = { a: 1, b: 2, c: 3, }
const OE = ObjectEntity(obj)

UnitTest(toBe, 'ObjectEntity')
	.addCases(
		{ params: [OE.target], tobe: obj },
		{ params: [OE.keys], tobe: Object.keys(obj) },
		{ params: [OE.values], tobe: Object.values(obj) },
		{
			params: [OE.list()],
			tobe:
				[{ "key": "a", "value": 1 }, { "key": "b", "value": 2 }, { "key": "c", "value": 3 }]
		}, {
		params: [OE.list('value', 'label')],
		tobe:
			[{ "value": "a", "label": 1 }, { "value": "b", "label": 2 }, { "value": "c", "label": 3 }]
	},
	)
	.buildCases()
	.run()