'use client'
import { createContext, useState } from 'react'
import styles from './styles.module.css'
import { Input } from './components/Input'
import { Footer } from './components/Footer'
import { SubmitButton } from './components/SubmitButton'

export const FormContext = createContext()
export function Form({ title, children, description, onSubmit }) {
  const [formValues, setFormValues] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formValues)
  }
  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>{title}</h2>
          {description && <p className={styles.formDescription}>{description}</p>}
          <div className={styles.FormChildrenContainer}>
          {children}
          </div>
        </div>
      </form>
    </FormContext.Provider>
  )
}
Form.Input = Input
Form.Footer = Footer
Form.SubmitButton = SubmitButton
