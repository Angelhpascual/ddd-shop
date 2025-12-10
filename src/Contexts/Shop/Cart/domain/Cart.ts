import type { ProductId } from "../../Products/domain/value-objects/ProductId"
import type { CartId } from "./value-objects/CartId"
import { CartItem } from "./value-objects/CartItem"

export class Cart {
  readonly id: CartId
  private _items: CartItem[]

  constructor(id: CartId, items: CartItem[] = []) {
    this.id = id
    this._items = items
  }

  addItem(productId: ProductId, quantity: number = 1): void {
    const existingItem = this._items.find((i) => i.productId.equals(productId))

    if (existingItem) {
      this._items = this._items.map((item) =>
        item.productId.equals(productId)
          ? new CartItem(productId, item.quantity + quantity)
          : item
      )
    } else {
      this._items.push(new CartItem(productId, quantity))
    }
  }

  get items(): CartItem[] {
    return this._items
  }
}
