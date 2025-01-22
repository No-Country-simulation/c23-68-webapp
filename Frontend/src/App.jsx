import Navbar from "./components/layout/Navbar";
import { nameModal } from "./config/nameModals";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";
import usePopups from "./hooks/usePopups";
import About from "./pages/About";
import Finblog from "./pages/Finblog";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
<<<<<<< HEAD
  const { LoadingModalID, LoginModalID } = nameModal;
  const { show } = usePopups();
=======
  const { LoadingModalID, LoginModalID, RegisterModalID, LoginContraModalID } = nameModal
  const { show } = usePopups()
>>>>>>> 7a90ad0990fb56ae67cf1c913737b309e6642f56

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
