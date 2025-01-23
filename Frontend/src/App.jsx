import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";
import About from "./pages/About";
import Finblog from "./pages/Finblog";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { nameModal } from "./config/nameModals";
import usePopups from "./hooks/usePopups";
import { useState } from "react";

function App() {
 
  const { LoadingModalID,
    LoginModalID,
    LoginContraModalID,
    RegisterModalID } =  nameModal;

 const { show, hide } = usePopups();
 const [showPassword, setShowPassword] = useState(false);

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: "prepend",
    });
  };

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/finblog", element: <Finblog /> },
      { path: "/team", element: <Team /> }
    ]);
    return routes;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-xl text-red-600'> Testing de modales</h1>

        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          //onClick={() => handleShowModal(LoadingModalID)}
          onClick={() => handleShowModal(LoginContraModalID)}
        >
          Show Login Contra Modal
        </button>
        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          onClick={() => handleShowModal(LoginModalID)}
        >
          Show Login Modal

        </button>
        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          onClick={() => handleShowModal(RegisterModalID)}
        >
          Show Register Modal
        </button> 

      </div>
       
    </>
  );
}

export default App;
