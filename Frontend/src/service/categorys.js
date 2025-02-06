import { backendUrl, SecretKey } from '../config/constants'

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/category/getAll`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': SecretKey,
      },
    })

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al obtener las categorias:', error.message)
    return null
  }
}
