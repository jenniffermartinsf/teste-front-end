import { MinusIcon, PlusIcon } from '@/shared/ui/icons'

import styles from './index.module.scss'

interface QuantitySelectorProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export const QuantitySelector = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) => (
  <div aria-label="Quantidade" className={styles.selector}>
    <button
      aria-label="Diminuir quantidade"
      className={styles.button}
      onClick={onDecrease}
      type="button"
    >
      <MinusIcon />
    </button>
    <span className={styles.quantity}>
      {quantity.toString().padStart(2, '0')}
    </span>
    <button
      aria-label="Aumentar quantidade"
      className={styles.button}
      onClick={onIncrease}
      type="button"
    >
      <PlusIcon />
    </button>
  </div>
)
