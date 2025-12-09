import { ProductSearcher } from "../../Contexts/Shop/Products/application/ProductSearcher"
import { FakeApiProductRepository } from "../../Contexts/Shop/Products/infrastructure/FakeApiProductRepository"

const productRepository = new FakeApiProductRepository()

export const productSearcher = new ProductSearcher(productRepository)
