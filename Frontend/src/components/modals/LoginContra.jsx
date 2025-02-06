import { useState } from "react";
import { Modal } from "./Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";

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

export function LoginContra() {
  const { LoadingModalID, LoginModalID, RegisterModalID, LoginContraModalID } =
    nameModal;

  const { show, hide } = usePopups();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (!email == null) {
      console.error("Email es obligatorio");
    }

    show({
      popUpId: LoadingModalID,
      metadata: { id: LoadingModalID },
      pushMethod: "prepend",
    });
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
    <Modal id={LoginContraModalID}>
      <form className="space-y-6">
        <div className="flex flex-col container mx-1  px-24 py-24 bg-white shadow-lg rounded-3xl">
          <button
            className="absolute top-12 right-12 font-black text-2xl text-gray-800"
            onClick={handleClose}
          >
            ✕
          </button>
          <h1 className="relative bottom-4 py-4 text-4xl font-semibold text-center font-anybody">
            ¿Olvidaste tu contraseña?
          </h1>

          <span className="relative  bottom-1 text-center text-grisclaro text-xl font-normal font-onest">
            No te preocupes, te ayudamos a recuperarla.
          </span>

          <SimpleInputIcon
            id="email"
            type="email"
            label={
              <span className=" relative -bottom-5 left-0  font-onest font-normal text-justify text-lg text-black">
                Ingresa tu correo electrónico
              </span>
            }
            placeholder="ejemplo@hotmail.com"
            pattern="^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"
            title="Por favor, ingresa un correo electrónico válido."
            className=" bg-white border relative -bottom-6  font-onest font-light text-lg text-black block w-full p-2.5 pr-10 truncate rounded-lg"
          />

          <button
            onClick={(event) => handleSubmit(event)}
            className=" relative -bottom-7 px-32 py-3 font-onest font-bold text-white text-lg transition duration-300 ease-in-out bg-verde rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-verde focus:ring-verde "
          >
            Enviar enlace de recuperación
          </button>
        </div>
      </form>
    </Modal>
  );
}
