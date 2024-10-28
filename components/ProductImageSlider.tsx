import * as React from 'react'
import clsx from 'clsx'
import Image from 'next/legacy/image'

type ProductImageSliderProps = {
  images: string[]
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="product-image-slider">
      <button className="product-image-slider__btn left" onClick={handlePrevious} aria-label="Previous image">
        &lt;
      </button>
      <div className="product-image-slider__container">
        <Image
          src={images[currentIndex]}
          alt={`Product Image ${currentIndex + 1}`}
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          loading="eager"
          itemProp="image"
        />
      </div>
      <button className="product-image-slider__btn right" onClick={handleNext} aria-label="Next image">
        &gt;
      </button>
      <div className="product-image-slider__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={clsx('product-image-slider__dot', index === currentIndex ? 'active' : '')}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default ProductImageSlider
