// import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product['node']
}

export default function ProductCard({ product }: ProductCardProps) {
  console.log(product)
  return (
    // <Link href={`/products/${product.id.replace('gid://shopify/Product/', '')}`}>
    <div className="product-card">
      <Image width={100} height={100} src={product.featuredImage.url} alt={product.title} />
      <h2>{product.title}</h2>
      {/* <p>${product.price}</p> */}
    </div>
    // </Link>
  )
}
