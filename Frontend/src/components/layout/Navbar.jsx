import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const routes = [
    { path: "/", name: "" },
    { path: "/about", name: "Acerca de" },
    { path: "/team", name: "Equipo" },
    { path: "/finblog", name: "FinBlog" },
    { path: "/datos", name: "Datos" },
    { path: "/datos/ingresos", name: "Ingresos", parent: "/datos" },
    { path: "/datos/gastos", name: "Gastos", parent: "/datos" },
    { path: "/dashboard", name: "Dashboard" },
  ];

  const currentRoute = routes.find((route) => route.path === location.pathname);
  const parentRoute = routes.find((route) => route.path === currentRoute?.parent);

  return (
    <div className="flex items-center justify-between mt-4 mb-4 w-100 px-8">
      <h1>
        <NavLink to="/">
          <img src="/images/logo.png" alt="Logo" className="h-auto w-auto ml-[50%] my-4" />
        </NavLink>
      </h1>
      <div className="flex text-left gap-4 -ml-[33%]">
      <h2>
        {parentRoute ? (
          <>

          <NavLink
          to={parentRoute.path}
          className="font-onest font-semibold text-xl text-gris4 hover:text-negro"
          >
          {parentRoute.name} &gt;{" "}
          </NavLink>

            <span className=" font-onest font-semibold text-xl text-negro">{currentRoute?.name}</span>
          </>
        ) : (
          <span className=" font-onest font-semibold text-xl text-negro">{currentRoute?.name}</span>
        )}
      </h2>
      </div>

      <button
        type="button"
        className="flex items-center justify-center px-6 py-3 bg-green-500 font-onest text-white text-lg rounded-full shadow-lg hover:bg-green-600"
      >
        Iniciar Sesión
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
