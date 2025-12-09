import type { ProductId } from "../../../Products/domain/value-objects/ProductId"

export class CartItem {
  readonly productId: ProductId
  readonly quantity: number

  constructor(productId: ProductId, quantity: number) {
    this.productId = productId
    this.quantity = quantity
  }
}
