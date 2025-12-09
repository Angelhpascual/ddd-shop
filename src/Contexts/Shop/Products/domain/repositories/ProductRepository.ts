import type { Product } from "../Product"

export interface ProductRepository {
  findAll(): Promise<Product[]>
}
