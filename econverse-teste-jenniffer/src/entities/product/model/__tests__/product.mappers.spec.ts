import { describe, expect, it } from 'vitest'

import {
  isProductApiResponse,
  mapRawProductToProduct,
} from '../product.mappers'
import { rawProductFixture } from '@/test/product-fixtures'

describe('product.mappers', () => {
  it('normaliza o produto recebido do feed', () => {
    const product = mapRawProductToProduct(rawProductFixture, 0)

    expect(product.id).toBe('iphone-15-pro-1')
    expect(product.name).toBe(rawProductFixture.productName)
    expect(product.description).toBe(rawProductFixture.descriptionShort)
    expect(product.pricing.current).toBe(rawProductFixture.price)
    expect(product.pricing.original).toBeGreaterThan(rawProductFixture.price)
    expect(product.pricing.shippingLabel).toBe('Frete grátis')
  })

  it('valida o shape da resposta do catálogo', () => {
    expect(
      isProductApiResponse({
        success: true,
        products: [rawProductFixture],
      }),
    ).toBe(true)

    expect(
      isProductApiResponse({
        success: true,
        products: [{ productName: 'x' }],
      }),
    ).toBe(false)
  })
})
