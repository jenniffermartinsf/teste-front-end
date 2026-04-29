import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'

import type { AsyncState } from '@/shared/types/async-state'
import { productCollectionFixture } from '@/test/product-fixtures'

import { ProductShelf } from '../product-shelf'

const setViewportWidth = (width: number): void => {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    value: width,
  })
  window.dispatchEvent(new Event('resize'))
}

describe('ProductShelf', () => {
  it('renderiza estado de erro e permite retry', async () => {
    const retry = vi.fn()
    const user = userEvent.setup()

    render(
      <ProductShelf
        anchorId="test-shelf"
        catalogState={
          {
            status: 'error',
            message: 'Falha ao carregar vitrine',
          } satisfies AsyncState<typeof productCollectionFixture>
        }
        onRetry={retry}
        onSelectProduct={vi.fn()}
        title="Produtos relacionados"
      />,
    )

    await user.click(screen.getByRole('button', { name: /tentar novamente/i }))

    expect(screen.getByText('Falha ao carregar vitrine')).toBeInTheDocument()
    expect(retry).toHaveBeenCalledTimes(1)
  })

  it('troca a curadoria quando uma aba é selecionada', async () => {
    setViewportWidth(1280)
    const user = userEvent.setup()

    render(
      <ProductShelf
        anchorId="test-shelf"
        catalogState={{
          status: 'success',
          data: productCollectionFixture,
        }}
        onRetry={vi.fn()}
        onSelectProduct={vi.fn()}
        showTabs
        title="Produtos relacionados"
      />,
    )

    expect(screen.getByText('Descrição do produto 1')).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'ACESSÓRIOS' }))

    expect(screen.queryByText('Descrição do produto 1')).not.toBeInTheDocument()
    expect(screen.getByText('Descrição do produto 3')).toBeInTheDocument()
  })

  it('dispara a abertura do modal ao clicar em comprar', async () => {
    setViewportWidth(1280)
    const onSelectProduct = vi.fn()
    const user = userEvent.setup()

    render(
      <ProductShelf
        anchorId="test-shelf"
        catalogState={{
          status: 'success',
          data: productCollectionFixture,
        }}
        onRetry={vi.fn()}
        onSelectProduct={onSelectProduct}
        title="Produtos relacionados"
      />,
    )

    await user.click(
      screen.getByRole('button', { name: /abrir detalhes de produto 1/i }),
    )

    expect(onSelectProduct).toHaveBeenCalledTimes(1)
  })

  it('não gera violações básicas de acessibilidade', async () => {
    setViewportWidth(1280)

    const { container } = render(
      <ProductShelf
        anchorId="test-shelf"
        catalogState={{
          status: 'success',
          data: productCollectionFixture,
        }}
        onRetry={vi.fn()}
        onSelectProduct={vi.fn()}
        showTabs
        title="Produtos relacionados"
      />,
    )

    const accessibility = await axe(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(accessibility.violations).toHaveLength(0)
  })
})
