import { describe, expect, it } from 'vitest'

import { validateNewsletterForm } from '../newsletter.validation'

describe('newsletter.validation', () => {
  it('retorna erros quando o formulário está inválido', () => {
    expect(
      validateNewsletterForm({
        name: 'Al',
        email: 'email-invalido',
        acceptedTerms: false,
      }),
    ).toEqual({
      name: 'Digite um nome válido.',
      email: 'Digite um e-mail válido.',
      acceptedTerms: 'É preciso aceitar os termos.',
    })
  })

  it('retorna objeto vazio quando o formulário é válido', () => {
    expect(
      validateNewsletterForm({
        name: 'Alice da Silva',
        email: 'alice@econverse.com',
        acceptedTerms: true,
      }),
    ).toEqual({})
  })
})
