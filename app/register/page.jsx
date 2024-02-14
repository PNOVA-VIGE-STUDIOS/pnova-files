'use client'
import { Form } from '@/components/Form/page'
import useAuthFetch from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'

export default function RegisterPage() {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()
  const register = async (formData) => {
    startLoading()
    await authFetch({
      endPoint: 'register',
      formData,
      redirectRouter: '/home'
    })
    finishLoading()
  }
  return (
    <>
      <Form
        title="Crear Cuenta"
        onSubmit={register}
      >
        <Form.Input
          label="Nombre"
          name="name"
          type="text"
          placeholder="Ingrese su Nombre..."
        />
        <Form.Input
          label="Apellido"
          name="lastName"
          type="text"
          placeholder="Ingrese su Apellido..."
        />
        <Form.Input
          label="Email"
          name="email"
          type="text"
          placeholder="Ingrese su email..."
        />
        <Form.Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password..."
        />
        <Form.SubmitButton
          buttonText="Crear Cuenta"
          isLoading={isLoading}
        />
        <Form.Footer
          description="Ya tienes cuanta?"
          link="/"
          textLink="Inicia Sesion"
        />
      </Form>
    </>
  )
}
