import NotificationContext from '@/context/NotificationContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const useAuthFetch = (includeAuthRoute = true, isRegister = false) => {
  const { showNotifications } = useContext(NotificationContext)
  const router = useRouter()
  const authRouter = async ({ endPoint, formData, redirectRouter, options }) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL
      const apiUrl = includeAuthRoute ? `${baseUrl}/auth/${endPoint}` : `${baseUrl}/${endPoint}`

      const { data } = await axios.post(apiUrl, formData, options)

      if (isRegister) {
        // Mostrar mensaje personalizado solo para el registro
        const customMessage = '¡Por favor revisa tu correo electrónico para validar el registro!' // Tu mensaje personalizado
        const successMessage = `${data.message} ${customMessage}` // Combinar el mensaje del servidor con el mensaje personalizado
        console.log(data)
        showNotifications({
          open: true,
          status: 'success',
          msj: successMessage
        })
      } else {
        // Mostrar solo el mensaje del servidor
        showNotifications({
          open: true,
          status: 'success',
          msj: data.message
        })
      }

      if (redirectRouter) {
        router.push(redirectRouter)
      }
    } catch (error) {
      showNotifications({
        open: true,
        status: 'error',
        msj: error.response?.data?.message
      })
    }
  }
  return authRouter
}

export default useAuthFetch
