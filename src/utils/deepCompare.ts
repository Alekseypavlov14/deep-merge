import { deepCompareTwoAssignable } from "./deepCompareTwoAssignable"
import { Assignable } from "../types"

export function deepCompare(assignable1: Assignable, assignable2: Assignable, ...restAssignable: Assignable[]): boolean {
  const assignableList: Assignable[] = [assignable1, assignable2, ...restAssignable]

  return assignableList.every((assignable) => {
    if (assignable === assignable1) return true
    return deepCompareTwoAssignable(assignable1, assignable)
  })
}
