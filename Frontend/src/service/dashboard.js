import { backendUrl } from "../config/constants";

// 📌 Obtener ingreso total
export const getTotalIncome = async () => {
    try {
        const response = await fetch(`${backendUrl}/api/dashboard/getTotalIncome`, {
            method: "GET",
        });

        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener el ingreso total:", error.message);
        return null;
    }
};

// 📌 Obtener gasto total
export const getTotalExpense = async () => {
    try {
        const response = await fetch(`${backendUrl}/api/dashboard/getTotalExpense`, {
            method: "GET",
        });

        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener el gasto total:", error.message);
        return null;
    }
};

// 📌 Obtener porcentaje de gastos por categoría
export const getExpensePercentage = async () => {
    try {
        const response = await fetch(`${backendUrl}/api/dashboard/getExpensePercentage`, {
            method: "GET",
        });

        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener porcentaje de gastos:", error.message);
        return null;
    }
};

// 📌 Obtener ingresos por categoría
export const getIncomeByCategory = async () => {
    try {
        const response = await fetch(`${backendUrl}/api/dashboard/getIncomeByCategory`, {
            method: "GET",
        });

        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener ingresos por categoría:", error.message);
        return null;
    }
};

// 📌 Comparar ingresos y gastos
export const compareIncomeExpense = async () => {
    try {
        const response = await fetch(`${backendUrl}/api/dashboard/compareIncomeExpense`, {
            method: "GET",
        });

        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error al comparar ingresos y gastos:", error.message);
        return null;
    }
};
