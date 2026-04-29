import { useEffect, useId, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

import type { Product } from '@/entities/product/model/product.types'
import { formatCurrency } from '@/shared/lib/formatters'
import { useBodyScrollLock } from '@/shared/lib/hooks/use-body-scroll-lock'
import { useEscapeKey } from '@/shared/lib/hooks/use-escape-key'
import { Button } from '@/shared/ui/button'
import { CloseIcon } from '@/shared/ui/icons'

import { QuantitySelector } from '../quantity-selector'
import styles from './index.module.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1)
  const closeButtonReference = useRef<HTMLButtonElement | null>(null)
  const containerReference = useRef<HTMLDivElement | null>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const isOpen = Boolean(product)
  const titleId = useId()

  useBodyScrollLock(isOpen)
  useEscapeKey(isOpen, onClose)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    previousActiveElement.current = document.activeElement as HTMLElement | null
    closeButtonReference.current?.focus()

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== 'Tab' || !containerReference.current) {
        return
      }

      const focusableElements = Array.from(
        containerReference.current.querySelectorAll<HTMLElement>(
          focusableSelector,
        ),
      )

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousActiveElement.current?.focus()
    }
  }, [isOpen])

  if (!product) {
    return null
  }

  const handleDecrease = (): void => {
    setQuantity((currentQuantity) => Math.max(currentQuantity - 1, 1))
  }

  const handleIncrease = (): void => {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
    >
      <div className={styles.panel} ref={containerReference}>
        <button
          aria-label="Fechar modal"
          className={styles.closeButton}
          onClick={onClose}
          ref={closeButtonReference}
          type="button"
        >
          <CloseIcon />
        </button>
        <div className={styles.media}>
          <img
            alt={product.name}
            className={styles.image}
            height="192"
            src={product.imageUrl}
            width="247"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title} id={titleId}>
              {product.name}
            </h2>
            <strong className={styles.price}>
              {formatCurrency(product.pricing.current)}
            </strong>
          </div>
          <div className={styles.descriptionBlock}>
            <p className={styles.description}>{product.description}</p>
            <button className={styles.detailsLink} type="button">
              Veja mais detalhes do produto &gt;
            </button>
          </div>
          <div className={styles.actions}>
            <QuantitySelector
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              quantity={quantity}
            />
            <Button className={styles.actionButton} variant="primary">
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
