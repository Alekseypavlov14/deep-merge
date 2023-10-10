import { deepMergeTwoAssignable } from "./deepMergeTwoAssignable"
import { Assignable } from "../types"

// merges two assignable with type changing without mutating
export function deepMerge<T extends Assignable = Assignable>(...sources: Assignable[]) {
  const initialValue = structuredClone(sources[0])
  // return target which is merged with all sources
	return sources.reduce(deepMergeTwoAssignable, initialValue) as T
}