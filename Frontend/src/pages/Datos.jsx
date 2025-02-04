import React from "react";
import { NavLink } from "react-router-dom";

const Datos = () => {
  return (
    <div className="font-sans bg-gris3 min-h-screen pt-6">
      {/* Contenedor principal */}
      <div className="bg-white shadow-lg rounded-3xl border-b-2 p-6 w-[60%] max-w-[1000px] my-6 mx-auto">
        <div className="flex items-center justify-between"> {/* Flexbox para alinear párrafo e imagen */}
          <p className="text-2xl font-semibold font-anybody">
            En este espacio podrás
            <span className="text-verde"> agregar</span>,
            <span className="text-amarillo">editar</span>,
            <span className="text-rosa">eliminar </span>
            los datos de tus ingresos y gastos
          </p>
          <img
            src="/images/datos.png"
            className="w-[100px] h-auto" // Tamaño de la imagen
            alt="datos"
          />
        </div>
      </div>

      {/* Botón "Agregar datos" */}
      <div className="flex justify-end pr-9 pt-6 pb-6">
        <button className="flex items-center justify-center mx-64 px-6 py-3 gap-2  bg-green-500 font-onest text-white text-xl rounded-full shadow-lg hover:bg-green-600">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0C8.92435 0 9.33131 0.168571 9.63137 0.468629C9.93143 0.768688 10.1 1.17565 10.1 1.6V6.4H14.9C15.3243 6.4 15.7313 6.56857 16.0314 6.86863C16.3314 7.16869 16.5 7.57565 16.5 8C16.5 8.42435 16.3314 8.83131 16.0314 9.13137C15.7313 9.43143 15.3243 9.6 14.9 9.6H10.1V14.4C10.1 14.8243 9.93143 15.2313 9.63137 15.5314C9.33131 15.8314 8.92435 16 8.5 16C8.07565 16 7.66869 15.8314 7.36863 15.5314C7.06857 15.2313 6.9 14.8243 6.9 14.4V9.6H2.1C1.67565 9.6 1.26869 9.43143 0.968629 9.13137C0.668571 8.83131 0.5 8.42435 0.5 8C0.5 7.57565 0.668571 7.16869 0.968629 6.86863C1.26869 6.56857 1.67565 6.4 2.1 6.4H6.9V1.6C6.9 1.17565 7.06857 0.768688 7.36863 0.468629C7.66869 0.168571 8.07565 0 8.5 0Z" fill="white"/>
        </svg>

          Agregar datos
        </button>
      </div>

      {/* Sección "Ver mis ingresos" */}
      <div className="bg-white shadow-lg rounded-3xl border-b-2 p-8 w-[60%] max-w-[1000px] my-10 mx-auto ">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium font-anybody">
            <NavLink to="/ingresos">Ver mis ingresos</NavLink>
          </p>
          <svg  className="w-[12px] h-auto" width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.75 2.91675L13.8333 14.0001L2.75 25.0834" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


        </div>
      </div>

      {/* Sección "Ver mis gastos" */}
      <div className="bg-white shadow-lg rounded-3xl border-b-2 p-8 w-[60%] max-w-[1000px] my-10 mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium font-anybody">
          <NavLink to="/gastos">Ver mis gastos</NavLink>
          </p>
          <svg  className="w-[12px] h-auto" width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.75 2.91675L13.8333 14.0001L2.75 25.0834" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Datos;