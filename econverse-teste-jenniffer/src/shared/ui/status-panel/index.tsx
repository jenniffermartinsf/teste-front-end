import { Button } from '@/shared/ui/button'

import styles from './index.module.scss'

interface StatusPanelProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export const StatusPanel = ({
  title,
  description,
  actionLabel,
  onAction,
}: StatusPanelProps) => (
  <div className={styles.panel} role="status">
    <strong className={styles.title}>{title}</strong>
    <p className={styles.description}>{description}</p>
    {actionLabel && onAction ? (
      <Button className={styles.action} onClick={onAction} variant="ghost">
        {actionLabel}
      </Button>
    ) : null}
  </div>
)
