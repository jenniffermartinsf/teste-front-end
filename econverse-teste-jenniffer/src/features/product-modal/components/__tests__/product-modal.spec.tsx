import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import { productFixture } from '@/test/product-fixtures'

import { ProductModal } from '../product-modal'

describe('ProductModal', () => {
  it('fecha ao pressionar escape', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()

    render(<ProductModal onClose={onClose} product={productFixture} />)

    await user.keyboard('{Escape}')

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('permite ajustar a quantidade localmente', async () => {
    const user = userEvent.setup()

    render(<ProductModal onClose={vi.fn()} product={productFixture} />)

    const dialog = screen.getByRole('dialog')

    expect(within(dialog).getByText('01')).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: /aumentar quantidade/i }),
    )

    expect(within(dialog).getByText('02')).toBeInTheDocument()
  })

  it('não gera violações básicas de acessibilidade', async () => {
    const { container } = render(
      <ProductModal onClose={vi.fn()} product={productFixture} />,
    )

    const accessibility = await axe(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(accessibility.violations).toHaveLength(0)
  })
})
