'use client'

import ProductCard from './ProductCard'
import { useStore } from '@/store/createStore'

export default function ProductCatalog() {
  const products = useStore((state) => state.products)

  console.log(products[0])
  return (
    <div className="product-catalog">
      {products.map((product) => (
        <ProductCard
          key={product.node.id}
          id={product.node.id}
          title={product.node.title}
          imageUrl={product.node.featuredImage.url}
          price={+product.node.variants.edges[0].node.price.amount}
        />
      ))}
    </div>
  )
}
