import { useEffect } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const fetchGetDataCurrentUser = async (token) => {
    try {
        const response = await fetch(`${backendUrl}/api/auth/getDataCurrentUser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "secret_key1234",
            }
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        useAuthStore.getState().login(data.user);

        console.log("Datos del usuario actual:", data);
        return data; 
    } catch (error) {
        console.error("Error al obtener datos del usuario:", error.message);
        return null;
    }
};

// Ejemplo de uso con token guardado en localStorage
const userToken = localStorage.getItem("token"); 
if (userToken) {
    fetchGetDataCurrentUser(userToken);
}

useEffect (() => {  
    fetchGetDataCurrentUser(userToken);
}, []);
