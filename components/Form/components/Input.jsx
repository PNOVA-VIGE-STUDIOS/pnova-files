'use client'
import styles from './styles.module.css'
import { useContext } from 'react'
import { FormContext } from '../page'

export function Input({ label, name, placeholder, type }) {
  const { formValues, setFormValues, formErrors } = useContext(FormContext)
  const handleChange = (e) => {
    const { value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }
  return (
    <div className={styles.inputContainer}>
      <label
        className={styles.inputLabel}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`${formErrors[name] ? styles.inputError : styles.input}`}
        id={name}
        type={type}
        placeholder={placeholder}
        value={formValues[name] || ''}
        onChange={handleChange}
        required
      />
      {formErrors[name] && <p className={styles.error}>{formErrors[name]}</p>}
    </div>
  )
}
