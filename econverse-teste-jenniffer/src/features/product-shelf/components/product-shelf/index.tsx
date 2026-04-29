import { useState } from 'react'

import { getProductsByTab } from '@/entities/product/model/product.curation'
import { productShelfTabs } from '@/entities/product/model/product.constants'
import type {
  Product,
  ProductShelfTabId,
} from '@/entities/product/model/product.types'
import { classNames } from '@/shared/lib/class-names'
import { useBreakpointValue } from '@/shared/lib/hooks/use-breakpoint-value'
import type { AsyncState } from '@/shared/types/async-state'
import { Button } from '@/shared/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui/icons'
import { StatusPanel } from '@/shared/ui/status-panel'

import {
  getPagedShelfSize,
  isCompactShelfViewport,
} from '../../model/product-shelf.helpers'
import { ProductCard } from '../product-card'
import { ProductTabs } from '../product-tabs'
import styles from './index.module.scss'

interface ProductShelfProps {
  anchorId: string
  catalogState: AsyncState<Product[]>
  onRetry: () => void
  onSelectProduct: (product: Product) => void
  showTabs?: boolean
  title: string
}

const ProductShelfSkeleton = () => (
  <div className={styles.grid} aria-hidden="true">
    {Array.from({ length: 4 }, (_, index) => (
      <div className={styles.skeletonCard} key={index}>
        <div className={styles.skeletonMedia} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLineShort} />
        <div className={styles.skeletonButton} />
      </div>
    ))}
  </div>
)

export const ProductShelf = ({
  anchorId,
  catalogState,
  onRetry,
  onSelectProduct,
  showTabs = false,
  title,
}: ProductShelfProps) => {
  const viewportWidth = useBreakpointValue()
  const compactViewport = isCompactShelfViewport(viewportWidth)
  const pagedShelfSize = getPagedShelfSize(viewportWidth)
  const defaultTabId: ProductShelfTabId = showTabs ? 'cellphones' : 'all'
  const [activeTabId, setActiveTabId] =
    useState<ProductShelfTabId>(defaultTabId)
  const [currentPage, setCurrentPage] = useState(0)

  const products =
    catalogState.status === 'success'
      ? getProductsByTab(catalogState.data, activeTabId)
      : []

  const pageCount =
    compactViewport || products.length === 0
      ? 1
      : Math.ceil(products.length / pagedShelfSize)
  const safeCurrentPage = Math.min(currentPage, pageCount - 1)

  const handleTabChange = (tabId: ProductShelfTabId): void => {
    setActiveTabId(tabId)
    setCurrentPage(0)
  }

  const handleViewAll = (): void => {
    if (showTabs) {
      setActiveTabId('all')
    }

    setCurrentPage(0)
  }

  const handlePreviousPage = (): void => {
    setCurrentPage((page) => Math.max(page - 1, 0))
  }

  const handleNextPage = (): void => {
    setCurrentPage((page) => Math.min(page + 1, pageCount - 1))
  }

  const visibleProducts = compactViewport
    ? products
    : products.slice(
        safeCurrentPage * pagedShelfSize,
        safeCurrentPage * pagedShelfSize + pagedShelfSize,
      )

  return (
    <section className={styles.section} id={anchorId}>
      <header className={styles.header}>
        <span className={styles.rule} />
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.viewAll}
            onClick={handleViewAll}
            type="button"
          >
            Ver todos
          </button>
        </div>
        <span className={styles.rule} />
      </header>
      {showTabs ? (
        <ProductTabs
          activeTabId={activeTabId}
          onTabChange={handleTabChange}
          tabs={productShelfTabs}
        />
      ) : null}
      <div className={styles.carousel}>
        {catalogState.status === 'loading' || catalogState.status === 'idle' ? (
          <ProductShelfSkeleton />
        ) : null}
        {catalogState.status === 'error' ? (
          <StatusPanel
            actionLabel="Tentar novamente"
            description={catalogState.message}
            onAction={onRetry}
            title="Não foi possível carregar a vitrine"
          />
        ) : null}
        {catalogState.status === 'success' ? (
          <>
            {!compactViewport && pageCount > 1 ? (
              <div className={styles.controls}>
                <Button
                  aria-label="Página anterior"
                  className={classNames(
                    styles.controlButton,
                    safeCurrentPage === 0 && styles.controlButtonDisabled,
                  )}
                  disabled={safeCurrentPage === 0}
                  onClick={handlePreviousPage}
                  variant="ghost"
                >
                  <ChevronLeftIcon />
                </Button>
                <Button
                  aria-label="Próxima página"
                  className={classNames(
                    styles.controlButton,
                    safeCurrentPage === pageCount - 1 &&
                      styles.controlButtonDisabled,
                  )}
                  disabled={safeCurrentPage === pageCount - 1}
                  onClick={handleNextPage}
                  variant="ghost"
                >
                  <ChevronRightIcon />
                </Button>
              </div>
            ) : null}
            <div
              className={classNames(
                compactViewport ? styles.scrollStrip : styles.grid,
              )}
            >
              {visibleProducts.map((product) => (
                <div className={styles.item} key={product.id}>
                  <ProductCard
                    onSelectProduct={onSelectProduct}
                    product={product}
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
