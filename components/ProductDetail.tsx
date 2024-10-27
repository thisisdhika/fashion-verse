'use client'

import Image from 'next/image'
import * as React from 'react'
import type { Product } from '@/types'

interface ProductDetailProps {
  id: string
  title: string
  imageUrl: string
  price: number
  description: string
  variants: Product['node']['variants']['edges']
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  id,
  title,
  imageUrl,
  price,
  description,
  variants,
}) => {
  const [selectedVariant, setSelectedVariant] = React.useState(variants[0])

  return (
    <article
      className="product-detail"
      itemScope
      itemType="https://schema.org/Product"
      aria-labelledby={`product-title-${id}`}
    >
      {/* Product Title */}
      <h1 id={`product-title-${id}`} itemProp="name" className="product-title">
        {title}
      </h1>

      {/* Product Image */}
      <div className="product-image">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          loading="lazy"
          itemProp="image"
        />
      </div>

      {/* Product Price */}
      <p className="product-price">
        <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="USD" />
          <span itemProp="price">${price.toFixed(2)}</span>
        </span>
      </p>

      {/* Product Description */}
      <section className="product-description" itemProp="description">
        <p>{description}</p>
      </section>

      {/* Product Variants */}
      <section className="product-variants">
        <h2>Variants</h2>
        <ul>
          {variants.map((variant, key) => (
            <li key={key}>
              <button
                type="button"
                className={`variant-button ${selectedVariant === variant ? 'selected' : ''}`}
                onClick={() => setSelectedVariant(variant)}
                aria-pressed={selectedVariant === variant}
              >
                {variant.node.title}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default ProductDetail
