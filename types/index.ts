export interface Product {
  node: {
    id: string
    title: string
    description: string
    featuredImage: {
      url: string
    }
  }
}

export interface CartItem {
  id: number
  productId: number
  quantity: number
}
