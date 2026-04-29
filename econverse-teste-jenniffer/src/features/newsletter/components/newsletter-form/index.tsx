import { useState } from 'react'

import { Button } from '@/shared/ui/button'
import { TextField } from '@/shared/ui/text-field'

import type {
  NewsletterFormErrors,
  NewsletterFormValues,
} from '../../model/newsletter.types'
import { validateNewsletterForm } from '../../model/newsletter.validation'
import styles from './index.module.scss'

const initialValues: NewsletterFormValues = {
  name: '',
  email: '',
  acceptedTerms: false,
}

export const NewsletterForm = () => {
  const [values, setValues] = useState<NewsletterFormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<NewsletterFormErrors>({})

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target
    const fieldName = name as 'name' | 'email'

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))
  }

  const handleTermsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { checked } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      acceptedTerms: checked,
    }))
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const validationErrors = validateNewsletterForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="newsletter-name">
            Nome
          </label>
          <TextField
            id="newsletter-name"
            invalid={Boolean(errors.name)}
            name="name"
            onChange={handleInputChange}
            placeholder="Digite seu nome"
            value={values.name}
          />
          {errors.name ? <span className={styles.error}>{errors.name}</span> : null}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="newsletter-email">
            E-mail
          </label>
          <TextField
            id="newsletter-email"
            invalid={Boolean(errors.email)}
            name="email"
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
            type="email"
            value={values.email}
          />
          {errors.email ? (
            <span className={styles.error}>{errors.email}</span>
          ) : null}
        </div>
        <Button className={styles.submit} type="submit" variant="primary">
          Inscrever
        </Button>
      </div>
      <div className={styles.feedbackRow}>
        <label className={styles.checkboxLabel} htmlFor="newsletter-terms">
          <input
            checked={values.acceptedTerms}
            id="newsletter-terms"
            name="acceptedTerms"
            onChange={handleTermsChange}
            type="checkbox"
          />
          <span className={styles.checkboxVisual} />
          <span>Aceito os termos e condições</span>
        </label>
        {errors.acceptedTerms ? (
          <span className={styles.error}>{errors.acceptedTerms}</span>
        ) : null}
        {submitted ? (
          <span className={styles.success}>
            Cadastro realizado com sucesso.
          </span>
        ) : null}
      </div>
    </form>
  )
}
