import { describe, expect, it } from 'vitest'

import { productCollectionFixture } from '@/test/product-fixtures'

import { getProductsByTab } from '../product.curation'

describe('product.curation', () => {
  it('retorna todos os produtos na aba de ver todos', () => {
    expect(getProductsByTab(productCollectionFixture, 'all')).toHaveLength(10)
  })

  it('retorna subconjuntos curatoriais por aba', () => {
    const accessories = getProductsByTab(
      productCollectionFixture,
      'accessories',
    )
    const notebooks = getProductsByTab(productCollectionFixture, 'notebooks')

    expect(accessories).toHaveLength(4)
    expect(notebooks).toHaveLength(4)
    expect(accessories[0]?.id).not.toBe(notebooks[0]?.id)
  })
})
