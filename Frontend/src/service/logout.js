import { backendUrl, SecretKey } from '../config/constants'

export const fetchLogout = async (logout) => {
  try {
    const response = await fetch(`${backendUrl}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': SecretKey,
      },
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    logout()
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message)
    return false
  }
}
