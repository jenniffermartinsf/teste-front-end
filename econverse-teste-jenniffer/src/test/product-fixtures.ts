import type {
  Product,
  RawProductDTO,
} from '@/entities/product/model/product.types'

export const rawProductFixture: RawProductDTO = {
  productName: 'iPhone 15 Pro',
  descriptionShort: 'Smartphone premium com acabamento em titanio.',
  photo:
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
  price: 14999,
}

export const productFixture: Product = {
  id: 'iphone-15-pro-1',
  name: 'iPhone 15 Pro',
  description: 'Smartphone premium com acabamento em titanio.',
  imageUrl:
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
  pricing: {
    current: 14999,
    original: 16799,
    installmentCount: 2,
    installmentValue: 7499.5,
    shippingLabel: 'Frete grátis',
  },
}

export const productCollectionFixture: Product[] = Array.from(
  { length: 10 },
  (_, index) => ({
    ...productFixture,
    id: `product-${String(index + 1)}`,
    name: `Produto ${String(index + 1)}`,
    description: `Descrição do produto ${String(index + 1)}`,
    pricing: {
      ...productFixture.pricing,
      current: 1000 + index * 250,
      original: 1200 + index * 300,
      installmentCount: index % 2 === 0 ? 2 : 4,
      installmentValue:
        index % 2 === 0 ? 500 + index * 125 : 250 + index * 62.5,
    },
  }),
)
