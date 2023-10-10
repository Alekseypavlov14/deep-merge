import { isAssignable } from "./isAssignable"
import { Assignable } from "../types"

// merges to assignable objects
export function deepMergeTwoAssignable(target: Assignable, source: Assignable): Assignable {
  Object.keys(source).forEach(key => { // get all first layer keys
		if (isAssignable(target[key]) && isAssignable(source[key])) { // if both values are objects
			return deepMergeTwoAssignable(target[key], source[key]) // merge them recursively
		}
		// otherwise add or rewrite property
		target[key] = source[key]
	})
	// return changed target
	return target
}