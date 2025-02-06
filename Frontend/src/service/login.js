import {backendUrl} from "../config/constants";
import  useAuthStore  from "../store/useAuth.store";

export const fetchLogin = async (email, password) => {
  try {
    const response = await fetch(`${backendUrl}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "secret_key1234",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    console.log(response);
    console.log("Login exitoso:", data);

    // Guardar datos en Zustand y localStorage
    // localStorage.setItem("authToken", data.token);
     useAuthStore.getState().login(data.user);
    // console.log("Usuario autenticado:", data.user);

    return data; // Devuelve la respuesta del backend (probablemente un token)
  } catch (error) {
    console.error("Error en el login:", error.message);
    return null; // Retorna null en caso de error
  }
};
