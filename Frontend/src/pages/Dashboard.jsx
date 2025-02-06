import React from "react";
import {Card, Title } from "@tremor/react";
import "../styles/Home.css";
import LineChart from "../components/common/LineChart";
import DonutChart from "../components/common/DonutChart";
import BarChart from "../components/common/BarChart";

const Dashboard = () => {
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
      <div className=" pl-10 flex justify-between mt-10">
        <LineChart />
        <div className="flex flex-col gap-4 mt-auto w-[30%] ml-auto mr-10">
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
      </div>

      <div className=" pl-10 flex justify-between mt-10 pr-10 ">
      <DonutChart />
      <BarChart />
      </div>

    </div>
    
  );
};

export default Dashboard;
