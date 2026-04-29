import type { ProductShelfTab, ProductShelfTabId } from '@/entities/product/model/product.types'
import { classNames } from '@/shared/lib/class-names'

import styles from './index.module.scss'

interface ProductTabsProps {
  activeTabId: ProductShelfTabId
  tabs: readonly ProductShelfTab[]
  onTabChange: (tabId: ProductShelfTabId) => void
}

export const ProductTabs = ({
  activeTabId,
  tabs,
  onTabChange,
}: ProductTabsProps) => (
  <div className={styles.tabs} role="tablist" aria-label="Categorias da vitrine">
    {tabs.map((tab) => (
      <button
        aria-selected={tab.id === activeTabId}
        className={classNames(
          styles.tab,
          tab.id === activeTabId && styles.tabActive,
        )}
        key={tab.id}
        onClick={() => {
          onTabChange(tab.id)
        }}
        role="tab"
        type="button"
      >
        {tab.label}
      </button>
    ))}
  </div>
)
