import Image from "next/legacy/image"
import Link from 'next/link'

interface ProductCardProps {
  id: string
  title: string
  imageUrl: string
  price: number
  rating?: number
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl, price, rating }) => {
  return (
    <article
      className="product-card"
      itemScope
      itemType="https://schema.org/Product"
      aria-labelledby={`product-title-${id}`}
    >
      {/* Product Image */}
      <Link href={`/product/${id}`} passHref legacyBehavior>
        <a>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            loading="lazy"
            itemProp="image"
          />
        </a>
      </Link>

      {/* Product Title */}
      <h2 id={`product-title-${id}`} itemProp="name">
        <Link href={`/product/${id}`} passHref legacyBehavior>
          <a className="product-link" itemProp="url">
            {title}
          </a>
        </Link>
      </h2>

      {/* Product Price */}
      <p className="product-price">
        <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="USD" />
          <span itemProp="price">${price.toFixed(2)}</span>
        </span>
      </p>

      {/* Product Rating (Optional) */}
      {rating && (
        <div
          className="product-rating"
          aria-label={`Rated ${rating} out of 5`}
          itemProp="aggregateRating"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <meta itemProp="ratingValue" content={rating.toString()} />
          <meta itemProp="reviewCount" content="89" />
          <span aria-hidden="true">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </span>
          <span className="sr-only">{rating} out of 5 stars</span>
        </div>
      )}
    </article>
  )
}

export default ProductCard
