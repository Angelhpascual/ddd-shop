import type { ProductRepository } from "./domain/repositories/ProductRepository"

export class ProductSearcher {
  private repository: ProductRepository

  constructor(repository: ProductRepository) {
    this.repository = repository
  }

  async execute() {
    return await this.repository.findAll()
  }
}
