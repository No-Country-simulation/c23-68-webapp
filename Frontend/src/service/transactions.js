import { backendUrl, SecretKey } from '../config/constants'
import { fetchWithWrapper } from './wrapper'

// 📌 Crear transacción
export const createTransaction = async (
  amount,
  type,
  category,
  description = '',
  time
) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/transaction/create`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({
          amount,
          type,
          category,
          description,
          date: time,
        }),
      }
    )

    if (!response.ok) {
      const text = await response.text()
      console.log(text)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error al crear transacción:', error.message)
    return null
  }
}

// 📌 Obtener transacciones por tipo
export const getTransactions = async (type) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/transaction/get?type=${type}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
      }
    )
    if (!response.ok) {
      const text = await response.text()
      console.log(text)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error al obtener transacciones:', error.message)
    return []
  }
}

// 📌 Editar transacción
export const updateTransaction = async (
  id,
  { amount, type, category, description, date }
) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/transaction/update`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({
          id,
          amount,
          type,
          category,
          description,
          date,
        }),
      }
    )

    if (!response.ok) {
      const text = await response.text()
      console.log(text)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error al actualizar transacción:', error.message)
    return null
  }
}

// 📌 Eliminar transacción
export const deleteTransaction = async (id) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/transaction/delete`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({ id }),
      }
    )

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al eliminar transacción:', error.message)
    return null
  }
}

// 📌 Crear categoría
export const createCategory = async (type, subcategories) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/category/create`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({ type, subcategories }),
      }
    )

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al crear categoría:', error.message)
    return null
  }
}

// 📌 Obtener categorías por tipo
export const getCategories = async (type) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/category/get?type=${type}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
      }
    )

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al obtener categorías:', error.message)
    return []
  }
}

// 📌 Obtener todas las categorías
export const getAllCategories = async () => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/category/getAll`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
      }
    )

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al obtener todas las categorías:', error.message)
    return []
  }
}

// 📌 Editar categoría
export const updateCategory = async (type, subcategories) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/category/update`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({ type, subcategories }),
      }
    )

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al actualizar categoría:', error.message)
    return null
  }
}

// 📌 Eliminar categoría
export const deleteCategory = async (type) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/category/delete`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({ type }),
      }
    )

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('Error al eliminar categoría:', error.message)
    return null
  }
}
