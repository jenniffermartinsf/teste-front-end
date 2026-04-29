import { mapRawProductToProduct, isProductApiResponse } from '../model/product.mappers'
import type { Product } from '../model/product.types'

const catalogEndpoint =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const fetchProducts = async (signal?: AbortSignal): Promise<Product[]> => {
  const response = await fetch(
    catalogEndpoint,
    signal ? { signal } : undefined,
  )

  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.')
  }

  const payload: unknown = await response.json()

  if (!isProductApiResponse(payload) || !payload.success) {
    throw new Error('A resposta do catálogo está inválida.')
  }

  return payload.products.map(mapRawProductToProduct)
}
