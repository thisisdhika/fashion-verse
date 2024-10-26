'use client'

import { useEffect } from 'react'
import { useStore } from '@/store/createStore'
import type { Product } from '@/types'

interface InitialData {
  products: Product[]
}

export default function StoreInitializer({ initialData }: { initialData: InitialData }) {
  const { setProducts } = useStore()

  useEffect(() => {
    setProducts(initialData.products)
  }, [initialData.products, setProducts])

  return null
}
