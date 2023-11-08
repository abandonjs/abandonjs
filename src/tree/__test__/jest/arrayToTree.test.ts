import { arrayToTree } from '../..'

test('arrayToTree', () => {

  const result = arrayToTree([
    { id: '1', },
    { id: '3', },
    { id: '4', pid: '2', },
    { id: '2', pid: '1', },
  ])
  const value = [{
    "id": "1", "children": [{
      "id": "2",
      "pid": "1",
      "children": [
        { "id": "4", "pid": "2" }
      ]
    }
    ]
  },
  { "id": "3" }
  ]
  expect(result).toEqual(value)

})
