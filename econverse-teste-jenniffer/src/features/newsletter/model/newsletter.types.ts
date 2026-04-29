export interface NewsletterFormValues {
  name: string
  email: string
  acceptedTerms: boolean
}

export interface NewsletterFormErrors {
  name?: string
  email?: string
  acceptedTerms?: string
}
