'use client'

import ProductCard from './ProductCard'
import { useStore } from '@/store/createStore'

export default function ProductCatalog() {
  const products = useStore((state) => state.products)

  return (
    <div className="product-catalog">
      {products.map((product) => (
        <ProductCard
          key={product.node.id}
          id={product.node.id}
          title={product.node.title}
          imageUrl={product.node.featuredImage.url}
          price={100}
          rating={4}
        />
      ))}
    </div>
  )
}
