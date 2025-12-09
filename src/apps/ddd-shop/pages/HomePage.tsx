import { ProductCard } from "../components/ProductCard"
import { useProducts } from "../hooks/useProducts"

const HomePage = () => {
  const { products, loading } = useProducts()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-500">
          Cargando Productos...
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        DDD Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id.value} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
