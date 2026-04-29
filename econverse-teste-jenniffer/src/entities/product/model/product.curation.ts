import type { Product, ProductShelfTabId } from './product.types'

const curatedIndexes: Record<ProductShelfTabId, readonly number[]> = {
  cellphones: [0, 1, 2, 3],
  accessories: [2, 4, 6, 8],
  tablets: [1, 3, 5, 7],
  notebooks: [0, 4, 5, 9],
  tvs: [6, 7, 8, 9],
  all: [],
}

export const getProductsByTab = (
  products: readonly Product[],
  tabId: ProductShelfTabId,
): Product[] => {
  if (tabId === 'all') {
    return [...products]
  }

  return curatedIndexes[tabId]
    .map((index) => products[index])
    .filter((product): product is Product => Boolean(product))
}
