import { assetCatalog } from '@/shared/config/media'

import type {
  Product,
  ProductApiResponse,
  RawProductDTO,
} from './product.types'

const createProductId = (name: string, index: number): string =>
  `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${String(index + 1)}`

const createOriginalPrice = (currentPrice: number): number =>
  Math.round(currentPrice * 1.12)

const createInstallmentCount = (currentPrice: number): number =>
  currentPrice > 20000 ? 4 : 2

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const isRawProductDTO = (value: unknown): value is RawProductDTO =>
  isRecord(value) &&
  typeof value.productName === 'string' &&
  typeof value.descriptionShort === 'string' &&
  typeof value.photo === 'string' &&
  typeof value.price === 'number'

export const isProductApiResponse = (
  value: unknown,
): value is ProductApiResponse =>
  isRecord(value) &&
  typeof value.success === 'boolean' &&
  Array.isArray(value.products) &&
  value.products.every(isRawProductDTO)

export const mapRawProductToProduct = (
  rawProduct: RawProductDTO,
  index: number,
): Product => {
  const currentPrice = rawProduct.price
  const originalPrice = createOriginalPrice(currentPrice)
  const installmentCount = createInstallmentCount(currentPrice)

  return {
    id: createProductId(rawProduct.productName, index),
    name: rawProduct.productName,
    description: rawProduct.descriptionShort,
    imageUrl: rawProduct.photo || assetCatalog.productPhoto,
    pricing: {
      current: currentPrice,
      original: originalPrice,
      installmentCount,
      installmentValue: currentPrice / installmentCount,
      shippingLabel: 'Frete grátis',
    },
  }
}
