'use client'
import { Form } from '@/components/Form/page'
import useAuthFetch from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'

export default function ForgotPasswordPage() {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()
  const forgotPassword = async (formData) => {
    startLoading()
    await authFetch({
      endPoint: 'forgot-password',
      formData
    })
    finishLoading()
  }
  return (
    <>
      <Form
        title="Recuperar Contraseña"
        onSubmit={forgotPassword}
      >
        <Form.Input
          label="Email"
          name="email"
          type="email"
          placeholder="Ingrese su Email..."
        />
        <Form.SubmitButton
          buttonText="Recuperar contraseña"
          isLoading={isLoading}
        />
        <Form.Footer
          description="Volver al Inicio"
          link="/"
          textLink="Inicio"
        />
      </Form>
    </>
  )
}
