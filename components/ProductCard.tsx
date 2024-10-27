import Image from 'next/legacy/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  title: string
  imageUrl: string
  price: number
  rating?: number
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl, price }) => {
  return (
    <article itemScope itemType="https://schema.org/Product" aria-labelledby={`product-title-${id}`}>
      <Link href={`/products/${id.replace('gid://shopify/Product/', '')}`} passHref legacyBehavior>
        <a className="product-card">
          {/* Product Image */}
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            loading="lazy"
            itemProp="image"
            className="product-card__image"
          />

          <div className="product-card__content">
            {/* Product Title */}
            <h3 id={`product-title-${id}`} className="product-card__title" itemProp="name">
              {title}
            </h3>

            {/* Product Price */}
            <p className="product-card__price">
              <span className="product-card__price__label">Start from</span> <br />
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                <span itemProp="price">${price.toFixed(2)}</span>
              </span>
            </p>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ProductCard
