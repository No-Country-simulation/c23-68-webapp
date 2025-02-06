import { backendUrl } from "../config/constants";

export const fetchRegister = async (email, password, name) => {
    try {
        console.log('url backend');
        console.log(import.meta.env.VITE_BACKEND_URL);
        const response = await fetch(`${backendUrl}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "secret_key1234"
            },
            body: JSON.stringify({ email, password, name })
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Registro exitoso:", data);
        return data; // Retorna los datos por si los necesitas en otro lugar
    } catch (error) {
        console.error("Error en el registro:", error.message);
        return null; // Retorna null en caso de error
    }
};

