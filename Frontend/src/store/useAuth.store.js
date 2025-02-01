import { create } from "zustand";

const useAuthStore = create((set) => ({
  
  user: null, // Almacena los datos del usuario
  isAuthenticated: false, // Estado de autenticación

  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;

// store/useAuth.store.js

// import { create } from "zustand";

// const useAuthStore = create((set) => ({

//   user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
//   isAuthenticated: !!localStorage.getItem("authToken"),

//   login: (userData) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     set({ user: userData, isAuthenticated: true });
//   },
  
//   logout: () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     set({ user: null, isAuthenticated: false });
//   }
// }));

// export default useAuthStore;