import { create } from 'zustand'
import { ProductSlice, createProductSlice } from './slices/productSlice'

type StoreState = ProductSlice

export const useStore = create<StoreState>((...args) => ({
  ...createProductSlice(...args),
}))
