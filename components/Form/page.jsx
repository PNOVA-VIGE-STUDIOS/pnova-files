'use client'
import { createContext, useState } from 'react'
import styles from './styles.module.css'
import { Input } from './components/Input'
import { Footer } from './components/Footer'
import { SubmitButton } from './components/SubmitButton'
import {
  validateEmail,
  validateLastName,
  validateName,
  validatePassword,
  validateUsername
} from '@/validations/formValidations'

export const FormContext = createContext()
export function Form({ title, children, description, onSubmit, isLogin }) {
  const [formValues, setFormValues] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const validators = {
    name: isLogin ? null : validateName,
    lastName: isLogin ? null : validateLastName,
    username: isLogin ? null : validateUsername,
    email: validateEmail,
    password: validatePassword
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar el formulario antes de enviarlo
    const errors = {}

    // Iterar sobre los campos y validar cada uno
    Object.entries(validators).forEach(([fieldName, validator]) => {
      if (validator) {
        const { isValid, errors: fieldErrors } = validator(formValues[fieldName])
        if (!isValid) {
          errors[fieldName] = fieldErrors[fieldName]
        }
      }
    })

    // Actualizar los errores del formulario
    setFormErrors(errors)

    // Si no hay errores, enviar el formulario
    if (Object.keys(errors).length === 0) {
      onSubmit(formValues)
    }
  }
  return (
    <FormContext.Provider value={{ formValues, setFormValues, formErrors }}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>{title}</h2>
          {description && <p className={styles.formDescription}>{description}</p>}
          <div className={styles.FormChildrenContainer}>{children}</div>
        </div>
      </form>
    </FormContext.Provider>
  )
}
Form.Input = Input
Form.Footer = Footer
Form.SubmitButton = SubmitButton
