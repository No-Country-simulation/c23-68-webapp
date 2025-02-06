import { backendUrl, SecretKey } from '../config/constants'

export const fetchRegister = async (email, password, name) => {
  try {
    const body = JSON.stringify({ email, password, name })
    const response = await fetch(`${backendUrl}/api/auth/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': SecretKey,
      },
      body,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `Error ${response.status}: ${response.statusText} - ${errorText}`
      )
    }

    const data = await response.json()
    return data // Retorna los datos por si los necesitas en otro lugar
  } catch (error) {
    console.error('Error en el registro:', error.message)
    return null // Retorna null en caso de error
  }
}
