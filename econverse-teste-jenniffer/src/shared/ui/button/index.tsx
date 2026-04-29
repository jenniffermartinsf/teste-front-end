import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from '@/shared/lib/class-names'

import styles from './index.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant
  fullWidth?: boolean
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    className={classNames(
      styles.button,
      styles[variant],
      fullWidth && styles.fullWidth,
      className,
    )}
    type={type}
    {...props}
  >
    {children}
  </button>
)
