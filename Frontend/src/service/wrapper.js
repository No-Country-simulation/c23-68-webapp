import { authStore } from '../store/auth.store'

export async function fetchWithWrapper(url, options = {}) {
  try {
    const response = await fetch(url, options)
    if (response.status === 401) {
      authStore.getState().logout()
      authStore.getState().setShowPopUp(true)
    }

    return response
  } catch (error) {
    console.error('Error en la solicitud', error)
  }
}
