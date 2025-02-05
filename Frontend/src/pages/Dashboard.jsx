import React from "react";
import { BarChart, Card, Title, LineChart, DonutChart } from "@tremor/react";
import '../styles/Home.css';

const Dashboard = () => {
  // Datos corregidos
  const lineChartData = [
    { month: "Ene", ingresos: 2000, gastos: 1500 },
    { month: "Feb", ingresos: 2500, gastos: 1700 },
    { month: "Mar", ingresos: 3000, gastos: 1800 },
    { month: "Abr", ingresos: 2200, gastos: 1600 },
    { month: "May", ingresos: 2700, gastos: 1900 },
    { month: "Jun", ingresos: 3200, gastos: 2100 },
  ];

  const pieChartData = [
    { name: "Comida", value: 500 },
    { name: "Servicio", value: 300 },
    { name: "Hogar", value: 700 },
    { name: "Entretenimiento", value: 400 },
    { name: "Otros", value: 200 },
  ];

  const barChartData = [
    { category: "Hogar", ingresos: 900, gastos: 600 },
    { category: "Comida", ingresos: 700, gastos: 400 },
    { category: "Servicios", ingresos: 500, gastos: 300 },
    { category: "Entretenimiento", ingresos: 400, gastos: 200 },
    { category: "Otros", ingresos: 200, gastos: 100 },
  ];

  return (
    <div className="font-onest bg-gray-100 flex flex-col min-h-screen pt-3 px-6">
      {/* Encabezado */}
      <div className="flex items-center w-[95%] max-w-[1400px] mt-6">
        <h2 className="ml-[6%] text-3xl text-negro font-normal">
          ¡Buenos Días, Samir!
        </h2>
        <img
          src="/images/dashboard.png"
          alt="Logo"
          className="inline-block ml-3"
        />
      </div>

      {/* Tarjetas de resumen */}
      <div className="flex flex-col gap-4 mt-10 w-[30%] ml-auto">
        <Card className="bg-verde text-white text-center rounded-3xl p-5 shadow-lg">
          <Title className="text-2xl">Ingreso Total</Title>
          <p className="text-2xl">$2,200.00</p>
        </Card>
        <Card className="bg-rosa2 text-white text-center rounded-3xl p-5 shadow-lg">
          <Title className="text-2xl">Gasto Total</Title>
          <p className="text-2xl">$400.00</p>
        </Card>
        <Card className="bg-amarillooscuro text-white text-center rounded-3xl p-5 shadow-lg">
          <Title className="text-2xl">Dinero Restante</Title>
          <p className="text-2xl">$1,800.00</p>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="mt-10">
        <Card className="p-5 shadow-lg">
          <Title>Ingresos y Gastos Mensuales</Title>
          <LineChart
            data={lineChartData}
            index="month"
            categories={["ingresos", "gastos"]}
            colors={["green", "red"]}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;