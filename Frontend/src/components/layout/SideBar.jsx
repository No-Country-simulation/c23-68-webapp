import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" bg-gray-100 min-h-screen p-4 flex flex-col w-64">
      <nav>
        <ul className="space-y-3">
        <li>
            <NavLink to="/" className="block p-2 hover:bg-gray-200 rounded">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="block p-2 hover:bg-gray-200 rounded">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/datos" className="block p-2 hover:bg-gray-200 rounded">
              Datos
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="block p-2 hover:bg-gray-200 rounded">
              Ahorros
            </NavLink>
          </li>
          <li>
            <NavLink to="/finblog" className="block p-2 hover:bg-gray-200 rounded">
              Finblog
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="block p-2 hover:bg-gray-200 rounded">
              Configuración
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="block p-2 hover:bg-gray-200 rounded">
              Ayuda
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;