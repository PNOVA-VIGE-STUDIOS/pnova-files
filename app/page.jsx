'use client'
import { Form } from '@/components/Form/page'
import useAuthFetch from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'

export default function LoginPage() {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()
  const login = async (formData) => {
    startLoading()
    await authFetch({
      endPoint: 'login',
      formData,
      redirectRouter: '/home'
    })
    finishLoading()
  }
  return (
    <>
      <Form
        title="Inicia Sesion"
        onSubmit={login}
      >
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
          buttonText="Login"
          isLoading={isLoading}
        />
        <Form.Footer
          description="Olvidaste tu contraseña?"
          link="/forgot-password"
          textLink="Recupera tu contraseña"
        />
        <Form.Footer
          description="No tienes cuanta?"
          link="/register"
          textLink="Registrate"
        />
      </Form>
    </>
  )
}
