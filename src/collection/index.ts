import { type } from '../util'

export type Collection =
  | {
      [key: string]: Collection | number | string
    }
  | (Collection | any)[]

export function getValueByLocation(
  collection: Collection,
  location?: string | number
): Collection | undefined {
  if (location === undefined) return collection
  const locationType: string = type(location)
  const islegal: boolean = isCollection(collection)
  if (!islegal) return undefined

  if (locationType === type.number) {
    return collection[location]
  }

  if (locationType === type.string) {
    const items: string[] = (location as string).split('.')
    items.reduce((cur: any, item: string): Collection | undefined => {
      return cur[item]
    }, undefined)
    return collection[location]
  }

  return collection
}

export function isCollection(collection: any): boolean {
  return collection === type.object || collection === type.array
}
