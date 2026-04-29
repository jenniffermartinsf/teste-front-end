import {
  mapRawProductToProduct,
  isProductApiResponse,
} from '../model/product.mappers'
import type { Product } from '../model/product.types'

const remoteCatalogEndpoint =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
const localCatalogEndpoint = '/data/products.json'

const parseProductsResponse = async (
  response: Response,
): Promise<Product[]> => {
  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.')
  }

  const payload: unknown = await response.json()

  if (!isProductApiResponse(payload) || !payload.success) {
    throw new Error('A resposta do catálogo está inválida.')
  }

  return payload.products.map(mapRawProductToProduct)
}

export const fetchProducts = async (
  signal?: AbortSignal,
): Promise<Product[]> => {
  const requestInit = signal ? { signal } : undefined

  try {
    const response = await fetch(remoteCatalogEndpoint, requestInit)

    return await parseProductsResponse(response)
  } catch (error) {
    if (signal?.aborted) {
      throw error
    }
  }

  const fallbackResponse = await fetch(localCatalogEndpoint, requestInit)

  return parseProductsResponse(fallbackResponse)
}
