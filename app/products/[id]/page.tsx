import type { Product } from '@/types'
import StoreInitializer from '@/store/providers/StoreInitializer'

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10)

  const productDetails = await fetch(
    `https://my-json-server.typicode.com/your-profile/products/${productId}`
  ).then((res) => res.json())

  return (
    <>
      <StoreInitializer initialData={{ productDetails: { [productId]: productDetails } }} />
      <ProductDetailContent product={productDetails} />
    </>
  )
}

function ProductDetailContent({ product }: { product: Product }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  )
}
