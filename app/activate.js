import { useEffect, useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import NotificationContext from '@/context/NotificationContext'

const ActivateAccountPage = () => {
  const searchParams = useSearchParams()

  const token = searchParams.get('token')
  const { showNotifications } = useContext(NotificationContext)

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/activate?token=${token}`
        )
        showNotifications({
          open: true,
          status: 'success',
          msj: response.data.message
        })
      } catch (error) {
        showNotifications({
          open: true,
          status: 'error',
          msj: error.response?.data?.message || 'Error al activar la cuenta'
        })
      }
    }

    if (token) {
      activateAccount()
    } else {
      showNotifications({
        open: true,
        status: 'error',
        msj: 'Token de activación no proporcionado'
      })
    }
  }, [token, showNotifications])

  return null // Esta página no renderiza nada visible al usuario
}

export default ActivateAccountPage
