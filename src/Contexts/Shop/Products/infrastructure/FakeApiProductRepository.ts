import { Product } from "../domain/Product"
import type { ProductRepository } from "../domain/repositories/ProductRepository"
import { ProductId } from "../domain/value-objects/ProductId"
import { ProductImage } from "../domain/value-objects/ProductImage"
import { ProductName } from "../domain/value-objects/ProductName"
import { ProductPrice } from "../domain/value-objects/ProductPrice"

interface FakeStoreProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export class FakeApiProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products")
    const products = (await response.json()) as FakeStoreProduct[]
    return products.map((product) => {
      return new Product(
        new ProductId(product.id.toString()),
        new ProductName(product.title),
        new ProductPrice(product.price),
        new ProductImage(product.image)
      )
    })
  }
}
