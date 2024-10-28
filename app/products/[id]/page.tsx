import * as React from 'react'
import { Product } from '@/types'
import { request, gql } from 'graphql-request'
import ProductDetail from '@/components/ProductDetail'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

const query = (id: string) => gql`
  {
    product(id: "gid://shopify/Product/${id}") {
      id
      title
      description
      featuredImage {
        id
        url
      }
      images(first: 10) {
        edges {
          node {
            url
          }
        }
      }
      variants (first: 10) {
        edges {
          cursor
          node {
            id
            title
            image {
              url
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

const ProductPage: React.FC<ProductPageProps> = async (props) => {
  const params = await props.params
  const { product }: { product: Product['node'] } = await request('https://mock.shop/api', query(params.id))

  console.log(product)
  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <div className="container">
      <ProductDetail
        id={product.id}
        title={product.title}
        description={product.description}
        variants={product.variants.edges}
        images={product.images.edges.map((image) => image.node.url)}
        price={+product.variants.edges[0].node.price.amount}
      />
    </div>
  )
}

export default ProductPage
