import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'

import { NewsletterForm } from '../newsletter-form'

describe('NewsletterForm', () => {
  it('valida os campos obrigatórios antes de enviar', async () => {
    const user = userEvent.setup()

    render(<NewsletterForm />)

    await user.click(screen.getByRole('button', { name: /inscrever/i }))

    expect(screen.getByText('Digite um nome válido.')).toBeInTheDocument()
    expect(screen.getByText('Digite um e-mail válido.')).toBeInTheDocument()
    expect(screen.getByText('É preciso aceitar os termos.')).toBeInTheDocument()
  })

  it('envia com sucesso quando o formulário está correto', async () => {
    const user = userEvent.setup()

    render(<NewsletterForm />)

    await user.type(screen.getByLabelText('Nome'), 'Alice da Silva')
    await user.type(screen.getByLabelText('E-mail'), 'alice@econverse.com')
    await user.click(screen.getByLabelText(/aceito os termos/i))
    await user.click(screen.getByRole('button', { name: /inscrever/i }))

    expect(
      screen.getByText('Cadastro realizado com sucesso.'),
    ).toBeInTheDocument()
  })

  it('não gera violações básicas de acessibilidade', async () => {
    const { container } = render(<NewsletterForm />)

    const accessibility = await axe(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(accessibility.violations).toHaveLength(0)
  })
})
