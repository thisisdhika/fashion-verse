import { request, gql } from 'graphql-request'
import ProductCatalog from '@/components/ProductCatalog'
import StoreInitializer from '@/store/providers/StoreInitializer'
import React from 'react'

const query = gql`
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`

const CatalogPage: React.FC = async () => {
  const {
    products,
  }: {
    products: { edges: never[] }
  } = await request('https://mock.shop/api', query)

  return (
    <>
      <StoreInitializer initialData={{ products: products.edges }} />
      <div className="container">
        <ProductCatalog />
      </div>
    </>
  )
}

export default CatalogPage
