import { deepCompareTwoAssignable } from "./deepCompareTwoAssignable"

export function deepCompare(assignable1: any, assignable2: any, ...restAssignable: any[]): boolean {
  const assignableList = [assignable1, assignable2, ...restAssignable]

  return assignableList.every((assignable) => {
    if (assignable === assignable1) return true
    return deepCompareTwoAssignable(assignable1, assignable)
  })
}
