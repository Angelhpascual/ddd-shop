import type { ProductId } from "./value-objects/ProductId"
import type { ProductName } from "./value-objects/ProductName"
import type { ProductPrice } from "./value-objects/ProductPrice"
import type { ProductImage } from "./value-objects/ProductImage"

export class Product {
  readonly id: ProductId
  readonly name: ProductName
  readonly price: ProductPrice
  readonly image: ProductImage

  constructor(
    id: ProductId,
    name: ProductName,
    price: ProductPrice,
    image: ProductImage
  ) {
    this.id = id
    this.name = name
    this.price = price
    this.image = image
  }
}
