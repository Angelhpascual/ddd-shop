import { Cart } from "../domain/Cart"
import { CartRepository } from "../domain/CartRepository"
import { CartId } from "../domain/value-objects/CartId"
import { ProductId } from "../../Products/domain/value-objects/ProductId"

export class AddProductToCart {
  constructor(private repository: CartRepository) {}

  async execute(cartId: string, productId: string): Promise<void> {
    const id = new CartId(cartId)
    const prodId = new ProductId(productId)

    const cart = (await this.repository.find(id)) || new Cart(id)
    cart.addItem(prodId, 1)

    await this.repository.save(cart)
  }
}
