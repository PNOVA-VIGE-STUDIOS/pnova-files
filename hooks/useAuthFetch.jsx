import NotificationContext from '@/context/NotificationContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const useAuthFetch = () => {
  const { showNotifications } = useContext(NotificationContext)
  const router = useRouter()
  const authRouter = async ({ endPoint, formData, redirectRouter, options }) => {
    try {
      const { data } = await axios.post(
        // ingresar bien la direccion del .env del back
        `${process.env.NEXT_PUBLIC_API_URL}/auth/${endPoint}`,
        formData,
        options
      )
      showNotifications({
        open: true,
        status: 'success',
        // cambiar el mensaje con la respuesta del back
        msj: data.message
      })
      if (redirectRouter) {
        router.push(redirectRouter)
      }
    } catch (error) {
      showNotifications({
        open: true,
        status: 'error',
        // cambiar el mensaje con la respuesta del back
        msj: error.response.status
      })
    }
  }
  return authRouter
}

export default useAuthFetch
