import { ProductSearcher } from "../../Contexts/Shop/Products/application/ProductSearcher"
import { FakeApiProductRepository } from "../../Contexts/Shop/Products/infrastructure/FakeApiProductRepository"
import { AddProductToCart } from "../../Contexts/Shop/Cart/application/AddProductToCart"
import { ZustandCartRepository } from "../../Contexts/Shop/Cart/infrastructure/ZustandCartRepository"

const productRepository = new FakeApiProductRepository()
export const productSearcher = new ProductSearcher(productRepository)

const cartRepository = new ZustandCartRepository()
export const addProductToCart = new AddProductToCart(cartRepository)
