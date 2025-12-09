import { Cart } from "../../domain/Cart"
import { CartRepository } from "../../domain/CartRepository"
import { CartId } from "../../domain/value-objects/CartId"
import { CartItem } from "../../domain/value-objects/CartItem"
import { ProductId } from "../../../Products/domain/value-objects/ProductId"
import { useCartStore } from "./store/cartStore"

export class ZustandCartRepository implements CartRepository {
  async save(cart: Cart): Promise<void> {
    const itemsPrimitive = cart.items.map((item) => ({
      productId: item.productId.value,
      quantity: item.quantity,
    }))
    useCartStore.getState().setItems(itemsPrimitive)
  }

  async find(id: CartId): Promise<Cart | null> {
    const state = useCartStore.getState()
    const items = state.items.map(
      (item) => new CartItem(new ProductId(item.productId), item.quantity)
    )
    return new Cart(id, items)
  }
}
