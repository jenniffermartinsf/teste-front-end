import type { ProductShelfTab } from './product.types'

export const productShelfTabs: readonly ProductShelfTab[] = [
  { id: 'cellphones', label: 'CELULAR' },
  { id: 'accessories', label: 'ACESSÓRIOS' },
  { id: 'tablets', label: 'TABLETS' },
  { id: 'notebooks', label: 'NOTEBOOKS' },
  { id: 'tvs', label: 'TVS' },
  { id: 'all', label: 'VER TODOS' },
] as const
