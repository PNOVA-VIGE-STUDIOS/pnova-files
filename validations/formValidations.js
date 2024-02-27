const validateName = (name) => {
  const errors = {}
  if (!name.trim() || name.length === 0) {
    errors.name = 'El nombre es requerido'
  }
  if (name.length < 3 || name.length > 20) {
    errors.name = 'El nombre debe tener entre 3 y 20 caracteres'
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

const validateLastName = (lastName) => {
  const errors = {}
  if (!lastName.trim()) {
    errors.lastName = 'El apellido es requerido'
  }
  if (lastName.length < 3 || lastName.length > 20) {
    errors.lastName = 'El apellido debe tener entre 3 y 20 caracteres'
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
const validateUsername = (username) => {
  const errors = {}
  if (!username.trim()) {
    errors.username = 'El usuario es requerido'
  }
  if (username.length < 5 || username.length > 20) {
    errors.username = 'El usuario debe tener entre 5 y 20 caracteres'
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

const validateEmail = (email) => {
  const errors = {}

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.trim() || !emailRegex.test(email)) {
    errors.email = 'Ingresa un correo electrónico válido'
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
const validatePassword = (password) => {
  const errors = {}

  if (password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres'
  }
  if (!/[A-Z]/.test(password)) {
    errors.password = 'La contraseña debe contener al menos una letra mayúscula'
  }
  if (!/\d/.test(password)) {
    errors.password = 'La contraseña debe contener al menos un número'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export { validateName, validateLastName, validateUsername, validateEmail, validatePassword }
