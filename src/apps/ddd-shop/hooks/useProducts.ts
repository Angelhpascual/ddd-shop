import { useEffect, useState } from "react"
import type { Product } from "../../../Contexts/Shop/Products/domain/Product"
import { productSearcher } from "../di"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    productSearcher.execute().then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [])

  return { products, loading }
}
