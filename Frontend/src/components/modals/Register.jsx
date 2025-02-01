import { useState } from "react";
import { Modal } from "./Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";
import { fetchRegister } from "../../service/register";
import useAuthStore from "../../store/useAuth.store";

function SimpleInputIcon({ label, icon, placeholder, ...props }) {
  const setPlaceholder = placeholder || "Input con icono";
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder={setPlaceholder}
          {...props}
        />
      </div>
    </div>
  );
}

export function Register() {
  const { RegisterModalID, LoadingModalID, LoginModalID } = nameModal;

  const { show, hide } = usePopups();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: "prepend",
    });
  };

  const login = useAuthStore((state) => state.login); // Función de Zustand

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log({ name, email, password });

    if (!name || !email || !password) {
      console.error("Nombre, Email y password son obligatorios");
      return;
    }

    show({
      popUpId: LoadingModalID,
      metadata: { id: LoadingModalID },
      pushMethod: "prepend",
    });

    const data = await fetchRegister(email, password, name);

   
  };

  const handleClose = () => {
    [LoginModalID, LoginContraModalID, RegisterModalID, LoadingModalID].forEach(
      (modalId) => {
        hide({
          popUpId: modalId,
          metadataId: modalId,
        });
      }
    );
  };

  return (
    <Modal id={RegisterModalID}>
      <form className="space-y-6">
        <div className="flex flex-col container mx-1  px-24 py-24 bg-white shadow-lg rounded-3xl">
          <button
            className="absolute top-12 right-12 font-black text-2xl text-gray-800"
            onClick={handleClose}
          >
            ✕
          </button>
          <h1 className="relative -bottom-4 text-4xl font-semibold text-center font-anybody">
            Créate una cuenta
          </h1>

          <SimpleInputIcon
            id="name"
            type="text"
            label={
              <span className=" relative -bottom-16 left-0  font-onest font-normal text-justify text-lg text-black">
                Nombre
              </span>
            }
            placeholder="Samir Pérez"
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,}$"
            title="Por favor, ingresa un nombre válido."
            className=" bg-white border relative -bottom-16  font-onest font-light text-lg text-black block w-full p-2.5 pr-10 truncate rounded-lg"
          />

          <SimpleInputIcon
            id="email"
            type="email"
            label={
              <span className=" relative -bottom-16 left-0  font-onest font-normal text-justify text-lg text-black">
                Correo electrónico
              </span>
            }
            placeholder="ejemplo@hotmail.com"
            pattern="^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"
            title="Por favor, ingresa un correo electrónico válido."
            className=" bg-white border relative -bottom-16  font-onest font-light text-lg text-black block w-full p-2.5 pr-10 truncate rounded-lg"
          />
          <div className="mb-6">
            <label className=" relative -bottom-16 left-0 text-lg font-normal font-onest text-justify text-black ">
              Contraseña
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="relative -bottom-20 bg-white border text-gray-900 text-lg rounded-lg block w-full p-2.5 pr-10 truncate"
                placeholder="••••••••••••••"
              />
              <button
                type="button"
                className=" h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" relative -bottom-9 left-80 icon icon-tabler icons-tabler-outline icon-tabler-eye"
                  >
                    <path
                      d="M11 3C6.522 3 2.732 5.943 1.457 10C2.732 14.057 6.522 17 11 17C15.478 17 19.268 14.057 20.543 10C19.268 5.943 15.478 3 11 3ZM11 7C9.343 7 8 8.343 8 10C8 11.657 9.343 13 11 13C12.657 13 14 11.657 14 10C14 8.343 12.657 7 11 7Z"
                      stroke="#1E1E1E"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative -bottom-9 left-80 icon icon-tabler icons-tabler-outline icon-tabler-eye-closed"
                  >
                    <path
                      d="M12.875 16.825C12.2569 16.9419 11.6291 17.0005 11 17C6.52203 17 2.73203 14.057 1.45703 10C1.8003 8.9081 2.32902 7.88346 3.02003 6.971M8.87803 7.879C9.44069 7.31634 10.2038 7.00025 10.9995 7.00025C11.7952 7.00025 12.5584 7.31634 13.121 7.879C13.6837 8.44166 13.9998 9.20478 13.9998 10.0005C13.9998 10.7962 13.6837 11.5593 13.121 12.122M8.87803 7.879L13.121 12.122M8.87803 7.879L13.12 12.12M13.121 12.122L16.412 15.412M8.88003 7.88L5.59003 4.59M5.59003 4.59L2.00003 1M5.59003 4.59C7.20239 3.54957 9.08113 2.9974 11 3C15.478 3 19.268 5.943 20.543 10C19.8391 12.2305 18.3774 14.1446 16.411 15.411M5.59003 4.59L16.411 15.411M16.411 15.411L20 19"
                      stroke="#1E1E1E"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            onClick={(event) => handleSubmit(event)}
            className=" relative -bottom-12 px-32 py-3 font-onest font-bold text-white text-lg transition duration-300 ease-in-out bg-verde rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-verde focus:ring-verde "
          >
            Registrarse
          </button>

          <div className="flex items-center">
            <hr className="flex-grow border-gris2 relative -mb-40 ml-10" />
            <label className="relative -bottom-20 -my-2 text-lg  mx-2 font-normal font-onest text-black">
              o
            </label>
            <hr className=" flex-grow border-gris2 relative -mb-40 mr-10" />
          </div>
          <div className="flex items-center">
            <button
              onClick={(event) => handleSubmit(event)}
              className="  flex-grow relative -bottom-28 px-32 py-6 font-onest font-normal text-gris text-lg transition duration-300 ease-in-out bg-plomo rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-plomo focus:ring-plomo "
            >
              <img
                src="https://img.icons8.com/?size=512&id=17949&format=png"
                alt=""
                className="absolute bottom-3 left-20  w-5 h-5"
              />
              <span className="font-onest font-normal text-gris text-lg flex-grow absolute bottom-2 right-16 ">
                Inicia sesión con Google
              </span>
            </button>
          </div>
          <div className="text-center mb-6">
            <label className="relative -bottom-32 -left-16 text-sm text-center font-normal font-onest text-black">
              ¿Ya tienes una cuenta?
            </label>
          </div>

          <div className="text-center mb-6">
            <label
              className="cursor-pointer relative -bottom-20 left-20 underline underline-offset-1 text-sm text-center font-medium font-onest text-black"
              onClick={() => handleShowModal(LoginModalID)}
            >
              Iniciar Sesión
            </label>
          </div>
        </div>
      </form>
    </Modal>
  );
}
