import { create } from 'zustand'

export const authStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('user'),
  showPopUp: false,
  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    set({ user: userData, isAuthenticated: true })
    set({ isTokenValid: true })
  },
  logout: () => {
    localStorage.removeItem('user')
    set({ user: null, isAuthenticated: false })
  },
  setShowPopUp: (show) => set({ showPopUp: show }),
}))
