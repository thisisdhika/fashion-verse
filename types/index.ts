export interface Product {
  node: {
    id: string
    title: string
    description: string
    featuredImage: {
      url: string
    }
    variants: {
      edges: {
        node: {
          id: string
          title: string
          image: {
            url: string
          }
          price: {
            amount: number
          }
        }
      }[]
    }
  }
}

export interface CartItem {
  id: number
  productId: number
  quantity: number
}
