import type { Product } from '@/entities/product/model/product.types'
import { formatCurrency } from '@/shared/lib/formatters'
import { Button } from '@/shared/ui/button'

import styles from './index.module.scss'

interface ProductCardProps {
  product: Product
  onSelectProduct: (product: Product) => void
}

export const ProductCard = ({
  product,
  onSelectProduct,
}: ProductCardProps) => {
  const handleSelectProduct = (): void => {
    onSelectProduct(product)
  }

  return (
    <article className={styles.card}>
      <button
        aria-label={`Abrir detalhes de ${product.name}`}
        className={styles.mediaButton}
        onClick={handleSelectProduct}
        type="button"
      >
        <div className={styles.media}>
          <img
            alt={product.name}
            className={styles.image}
            height="228"
            loading="lazy"
            src={product.imageUrl}
            width="278"
          />
        </div>
      </button>
      <div className={styles.content}>
        <button className={styles.titleButton} onClick={handleSelectProduct} type="button">
          {product.description}
        </button>
        <div className={styles.pricing}>
          <span className={styles.originalPrice}>
            {formatCurrency(product.pricing.original)}
          </span>
          <strong className={styles.currentPrice}>
            {formatCurrency(product.pricing.current)}
          </strong>
          <span className={styles.installment}>
            ou {product.pricing.installmentCount}x de{' '}
            {formatCurrency(product.pricing.installmentValue)} sem juros
          </span>
          <span className={styles.shippingLabel}>{product.pricing.shippingLabel}</span>
        </div>
      </div>
      <Button
        className={styles.action}
        fullWidth
        onClick={handleSelectProduct}
        variant="secondary"
      >
        Comprar
      </Button>
    </article>
  )
}
