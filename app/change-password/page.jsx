'use client'
import { Form } from '@/components/Form/page'
import useAuthFetch from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'
import { useSearchParams } from 'next/navigation'

export default function ChangePasswordPage() {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()
  const searchParams = useSearchParams()
  const changePassword = async (formData) => {
    startLoading()
    const token = searchParams.get('token')
    const options = {
      headers: {
        // sin el auth recibe el token, hay que ver eso del lado del back
        Authorization: `Bearer ${token}`
      }
    }
    await authFetch({
      endPoint: 'change-password',
      redirectRouter: '/',
      formData,
      options
    })
    finishLoading()
  }
  return (
    <>
      <Form
        title="Cambiar Contraseña"
        onSubmit={changePassword}
      >
        <Form.Input
          label="Contraseña"
          name="password"
          type="password"
          placeholder="Ingrese contraseña nueva..."
        />
        <Form.Input
          label="Repita su contraseña"
          name="confirmPassword"
          type="password"
          placeholder="Repita su contraseña..."
        />
        <Form.SubmitButton
          buttonText="Cambiar contraseña"
          isLoading={isLoading}
        />
      </Form>
    </>
  )
}
