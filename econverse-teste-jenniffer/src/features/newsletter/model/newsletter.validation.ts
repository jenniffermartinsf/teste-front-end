import type {
  NewsletterFormErrors,
  NewsletterFormValues,
} from './newsletter.types'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

export const validateNewsletterForm = (
  values: NewsletterFormValues,
): NewsletterFormErrors => {
  const errors: NewsletterFormErrors = {}

  if (values.name.trim().length < 3) {
    errors.name = 'Digite um nome válido.'
  }

  if (!emailPattern.test(values.email)) {
    errors.email = 'Digite um e-mail válido.'
  }

  if (!values.acceptedTerms) {
    errors.acceptedTerms = 'É preciso aceitar os termos.'
  }

  return errors
}
