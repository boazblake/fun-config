export * from "./all"
export * from "./any"
export * from "./tuple.js"
export { Coyoneda } from "./coyoneda"
export * from "./pointfree.mjs"
export * from "./sum.js"
export * from "./list.mjs"
export * from "./intersection.js"

import { ArrayFP } from "./array"
import { Task } from "./task"
import { Maybe } from "./maybe.mjs"
import { Validation } from "./validation"

const configure = () => {
  ArrayFP.configure()
  Task.configure()
  Maybe.configure()
  Validation.configure()
}

export const FP = { configure }
