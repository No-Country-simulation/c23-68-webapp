import useAuthStore  from "../store/useAuth.store";
import { backendUrl } from "../config/constants";

export const fetchLogout = async (token) => {
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
        

        useAuthStore.getState().logout();
    } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
        return false;
    }
};

