import { StateCreator } from 'zustand'
import type { Product } from '@/types'

export interface ProductSlice {
  products: Product[]
  productDetails: Record<number, Product | undefined>
  setProducts: (products: Product[]) => void
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  products: [],
  productDetails: {},
  setProducts: (products: Product[]) => set({ products }),
})
