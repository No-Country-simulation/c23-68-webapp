import { NavLink } from "react-router-dom";
import { useState } from "react";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";
import  useAuthStore  from "../../store/useAuth.store";

const Navbar = () => {

  const { user, isAuthenticated, logout } = useAuthStore();

  const { LoadingModalID, LoginModalID, LoginContraModalID, RegisterModalID } =
    nameModal;

  const { show, hide } = usePopups();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: "prepend",
    });
  };

  return (
    <div className="flex items-center justify-between mt-4 mb-4 w-100 px-8">
      <h1>
        <NavLink
          to="/"
          className="text-4xl font-anybody font-medium text-black hover:text-green-500 hover:underline"
        >
          FIPE!
        </NavLink>
      </h1>

      {isAuthenticated ? (
          <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img 
              src='../../assets/images/foto-perfil.png'
              alt="Foto de perfil" 
              className="w-10 h-10 rounded-full"
            />
            <span className="font-onest">{user?.name}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="flex items-center justify-center px-6 py-3 bg-green-500 font-onest text-white text-lg rounded-full shadow-lg hover:bg-green-600"
          onClick={() => handleShowModal(LoginModalID)}
        >
          Iniciar Sesion
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Navbar;
