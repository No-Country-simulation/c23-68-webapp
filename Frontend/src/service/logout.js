import { useAuthStore } from "../store/authStore";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const fetchLogout = async (token) => {
    try {
        const response = await fetch(`${backendUrl}/api/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "secret_key1234",
            }
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        console.log("Sesión cerrada correctamente.");
        
        // Eliminar el token del almacenamiento local
        localStorage.removeItem("token");
        return true;

        useAuthStore.getState().logout();
    } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
        return false;
    }
};

// Ejemplo de uso con token guardado en localStorage
const userToken = localStorage.getItem("token"); 
if (userToken) {
    fetchLogout(userToken);
}
