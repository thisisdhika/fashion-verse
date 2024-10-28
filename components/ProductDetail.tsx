'use client'

import clsx from 'clsx'
import * as React from 'react'
import ProductImageSlider from './ProductImageSlider'
import type { Product } from '@/types'

interface ProductDetailProps {
  id: string
  title: string
  images: string[]
  price: number
  description: string
  variants: Product['node']['variants']['edges']
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id, title, images, price, description, variants }) => {
  const [selectedVariant, setSelectedVariant] = React.useState(variants[0])

  return (
    <article
      className="product-detail"
      itemScope
      itemType="https://schema.org/Product"
      aria-labelledby={`product-title-${id}`}
    >
      <div className="product-detail__wrapper">
        <div className="product-detail__images">
          {/* Product Image */}
          <ProductImageSlider images={images} />
        </div>
        <form className="product-detail__content">
          <div>
            {/* Product Title */}
            <h1 id={`product-title-${id}`} itemProp="name" className="product-detail__title">
              {title}
            </h1>

            {/* Product Description */}
            <section className="product-detail__description" itemProp="description">
              <p>{description}</p>
            </section>

            {/* Product Variants */}
            <section className="product-detail__variants">
              <h2>Variants</h2>
              <ul>
                {variants.map((variant, key) => (
                  <li key={key}>
                    <button
                      type="button"
                      className={clsx('btn__variant', selectedVariant === variant ? 'active' : 'inactive')}
                      onClick={() => setSelectedVariant(variant)}
                      aria-pressed={selectedVariant === variant}
                    >
                      {variant.node.title}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* Product Price */}
            <p className="product-detail__price">
              <span className="product-detail__price__label">Start from</span> <br />
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                <span itemProp="price">${price.toFixed(2)}</span>
              </span>
            </p>
          </div>

          <button className="product-detail__btn btn__primary">Add to Card</button>
        </form>
      </div>
    </article>
  )
}

export default ProductDetail
