import type { CartId } from "./value-objects/CartId"
import type { CartItem } from "./value-objects/CartItem"

export class Cart {
  readonly id: CartId
  readonly items: CartItem[]

  constructor(id: CartId, items: CartItem[]) {
    this.id = id
    this.items = items
  }
}
