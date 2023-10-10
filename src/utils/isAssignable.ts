import { Assignable } from "../types"

// check if assignable
export function isAssignable(value: any): value is Assignable {
	return value?.constructor === Object
}
