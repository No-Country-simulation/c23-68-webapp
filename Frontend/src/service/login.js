import { backendUrl, SecretKey } from '../config/constants'

export const fetchLogin = async (email, password, login) => {
  try {
    const response = await fetch(`${backendUrl}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': SecretKey,
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    const data = await response.json()
    login(data.data)
    return data
  } catch (error) {
    console.error('Error en el login:', error.message)
    return null // Retorna null en caso de error
  }
}
