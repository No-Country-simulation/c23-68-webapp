import { backendUrl, SecretKey } from '../config/constants'
import { fetchWithWrapper } from './wrapper'

// 📌 Crear meta de ahorro
export const createSavingsGoal = async (
  name,
  targetAmount,
  deadline,
  priority,
  createdAt,
  currentAmount = 0
) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/savingsGoal/create`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({
          name,
          targetAmount,
          deadline,
          priority,
          currentAmount,
          createdAt,
        }),
      }
    )

    if (!response.ok) {
      const text = await response.text()
      console.error(text)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error al crear la meta de ahorro:', error.message)
    return null
  }
}

// 📌 Obtener todas las metas de ahorro
export const getSavingsGoals = async () => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/savingsGoal/get`,
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
    console.error('Error al obtener metas de ahorro:', error.message)
    return []
  }
}

// 📌 Editar meta de ahorro
export const updateSavingsGoal = async (
  id,
  { name, targetAmount, deadline, priority, currentAmount }
) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/savingsGoal/update`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': SecretKey,
        },
        body: JSON.stringify({
          id,
          name,
          targetAmount,
          deadline,
          priority,
          currentAmount,
        }),
      }
    )

    if (!response.ok) {
      const text = await response.text()
      console.error(text)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error al actualizar la meta de ahorro:', error.message)
    return null
  }
}

// 📌 Eliminar meta de ahorro
export const deleteSavingsGoal = async (id) => {
  try {
    const response = await fetchWithWrapper(
      `${backendUrl}/api/savingsGoal/delete`,
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
    console.error('Error al eliminar la meta de ahorro:', error.message)
    return null
  }
}
