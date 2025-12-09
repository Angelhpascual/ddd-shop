import type { Product } from "../../../Contexts/Shop/Products/domain/Product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={product.image.value} alt={product.name.value} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name.value}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">
            {product.price.value}
          </span>
          <button
            onClick={() => alert("Product added to cart, (FAKE)")}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  )
}
