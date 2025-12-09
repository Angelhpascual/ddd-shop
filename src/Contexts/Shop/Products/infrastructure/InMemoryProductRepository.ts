import { Product } from "../domain/Product"
import type { ProductRepository } from "../domain/repositories/ProductRepository"
import { ProductId } from "../domain/value-objects/ProductId"
import { ProductImage } from "../domain/value-objects/ProductImage"
import { ProductName } from "../domain/value-objects/ProductName"
import { ProductPrice } from "../domain/value-objects/ProductPrice"

export class InMemoryProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return [
      new Product(
        new ProductId("1"),
        new ProductName("Product 1"),
        new ProductPrice(10),
        new ProductImage("https://via.placeholder.com/150")
      ),
      new Product(
        new ProductId("2"),
        new ProductName("Product 2"),
        new ProductPrice(20),
        new ProductImage("https://via.placeholder.com/150")
      ),
      new Product(
        new ProductId("3"),
        new ProductName("Product 3"),
        new ProductPrice(30),
        new ProductImage("https://via.placeholder.com/150")
      ),
    ]
  }
}
