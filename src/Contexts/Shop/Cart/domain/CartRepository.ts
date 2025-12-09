import { Cart } from "./Cart"
import { CartId } from "./value-objects/CartId"

export interface CartRepository {
  save(cart: Cart): Promise<void>
  find(id: CartId): Promise<Cart | null>
}
