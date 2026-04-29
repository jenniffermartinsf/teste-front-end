import { startTransition, useEffect, useEffectEvent, useState } from 'react'

import type { AsyncState } from '@/shared/types/async-state'

import { fetchProducts } from '../api/fetch-products'
import type { Product } from '../model/product.types'

const initialState: AsyncState<Product[]> = {
  status: 'idle',
}

export const useProductCatalog = () => {
  const [catalogState, setCatalogState] =
    useState<AsyncState<Product[]>>(initialState)
  const [requestVersion, setRequestVersion] = useState(0)

  const loadCatalog = useEffectEvent(async (signal: AbortSignal) => {
    setCatalogState({ status: 'loading' })

    try {
      const products = await fetchProducts(signal)

      setCatalogState({
        status: 'success',
        data: products,
      })
    } catch (error) {
      if (signal.aborted) {
        return
      }

      const message =
        error instanceof Error
          ? error.message
          : 'Não foi possível carregar os produtos.'

      setCatalogState({
        status: 'error',
        message,
      })
    }
  })

  useEffect(() => {
    const abortController = new AbortController()

    void loadCatalog(abortController.signal)

    return () => {
      abortController.abort()
    }
  }, [loadCatalog, requestVersion])

  const retry = (): void => {
    startTransition(() => {
      setRequestVersion((currentVersion) => currentVersion + 1)
    })
  }

  return {
    catalogState,
    retry,
  }
}
