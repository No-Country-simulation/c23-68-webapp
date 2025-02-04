// import { useState } from "react";

const SideBar = () => {


  return (

        <aside className=" w-64 min-h-screen p-5">

          <ul className="space-y-4">
            <li className="py-2 px-4 hover:bg-gray-700">Inicio</li>
            <li className="py-2 px-4 hover:bg-gray-700">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-700">Edicion</li>
            <li className="py-2 px-4 hover:bg-gray-700">Findblog</li>
            <li className="py-2 px-4 hover:bg-gray-700">Configuracion</li>
            <li className="py-2 px-4 hover:bg-gray-700">Ayuda</li>
          </ul>

        </aside>

  );
};

export default SideBar;
