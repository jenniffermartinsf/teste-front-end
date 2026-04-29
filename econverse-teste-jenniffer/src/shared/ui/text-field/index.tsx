import type { InputHTMLAttributes } from 'react'

import { classNames } from '@/shared/lib/class-names'

import styles from './index.module.scss'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export const TextField = ({
  className,
  invalid = false,
  type = 'text',
  ...props
}: TextFieldProps) => (
  <input
    className={classNames(styles.field, invalid && styles.invalid, className)}
    type={type}
    {...props}
  />
)
