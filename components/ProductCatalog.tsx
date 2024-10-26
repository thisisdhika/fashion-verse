'use client'

import ProductCard from './ProductCard'
import { useStore } from '@/store/createStore'

export default function ProductCatalog() {
  const products = useStore((state) => state.products)

  return (
    <div className="product-catalog">
      {products.map((product) => (
        <ProductCard key={product.node.id} product={product.node} />
      ))}
    </div>
  )
}
