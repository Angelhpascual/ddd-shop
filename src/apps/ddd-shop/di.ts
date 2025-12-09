import { InMemoryProductRepository } from "../../Contexts/Shop/Products/infrastructure/InMemoryProductRepository"
import { ProductSearcher } from "../../Contexts/Shop/Products/application/ProductSearcher"

const productRepository = new InMemoryProductRepository()

export const productSearcher = new ProductSearcher(productRepository)
