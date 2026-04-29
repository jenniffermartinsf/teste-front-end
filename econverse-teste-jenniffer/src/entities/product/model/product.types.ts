export type ProductShelfTabId =
  | 'cellphones'
  | 'accessories'
  | 'tablets'
  | 'notebooks'
  | 'tvs'
  | 'all'

export interface ProductShelfTab {
  id: ProductShelfTabId
  label: string
}

export interface ProductPricing {
  current: number
  original: number
  installmentCount: number
  installmentValue: number
  shippingLabel: string
}

export interface RawProductDTO {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ProductApiResponse {
  success: boolean
  products: RawProductDTO[]
}

export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  pricing: ProductPricing
}
