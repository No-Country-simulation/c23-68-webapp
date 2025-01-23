import React from "react";
import { useState } from "react";

const SideBar = () => {
  

  return (
   
        <div className="p-5 border-black">
        
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">Inicio</li>
            <li className="py-2 px-4 hover:bg-gray-700">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-700">Edicion</li>
            <li className="py-2 px-4 hover:bg-gray-700">Findblog</li>
            <li className="py-2 px-4 hover:bg-gray-700">Configuracion</li>
            <li className="py-2 px-4 hover:bg-gray-700">Ayuda</li>
          </ul>
          
        </div>
      
  );
};

export default SideBar;
