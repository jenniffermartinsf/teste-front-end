import { renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { rawProductFixture } from '@/test/product-fixtures'

import { useProductCatalog } from '../use-product-catalog'

describe('useProductCatalog', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('carrega e normaliza produtos com sucesso', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(
        JSON.stringify({
          success: true,
          products: [rawProductFixture],
        }),
        { status: 200 },
      ),
    )

    const { result } = renderHook(() => useProductCatalog())

    await waitFor(() => {
      expect(result.current.catalogState.status).toBe('success')
    })

    expect(result.current.catalogState.status).toBe('success')
    if (result.current.catalogState.status === 'success') {
      expect(result.current.catalogState.data[0]?.name).toBe('iPhone 15 Pro')
    }
  })

  it('expõe estado de erro quando a requisição falha', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(null, { status: 500 }),
    )

    const { result } = renderHook(() => useProductCatalog())

    await waitFor(() => {
      expect(result.current.catalogState.status).toBe('error')
    })

    expect(result.current.catalogState).toEqual({
      status: 'error',
      message: 'Não foi possível carregar os produtos.',
    })
  })
})
