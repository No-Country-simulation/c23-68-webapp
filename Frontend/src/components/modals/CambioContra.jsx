import { useState } from "react";
import { Modal } from "./Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";

export function CambioContra() {
  const { CambioContraModalID,ContraCambiadaModalID } = nameModal;

  const { hide,show } = usePopups();
  const [showPassword] = useState(false);

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: 'prepend',
    })
  }

  const handleClose = () => {

    [CambioContraModalID, ContraCambiadaModalID].forEach((modalId) => {
      hide({
        popUpId: modalId,
        metadataId: modalId,
      });
    });
  };
  return (
    <Modal id={CambioContraModalID}>
      <form className="space-y-6">
        <div className="flex flex-col px-16 pt-24 pb-2 mx-1 bg-white shadow-lg rounded-3xl">
          <button
            className="absolute text-2xl font-black text-gray-800 top-12 right-12"
            onClick={handleClose}
          >
            ✕
          </button>
          <h1 className="text-3xl font-semibold text-center font-anybody mb-6">
            Actualiza tu contraseña
          </h1>

          <h1 className="text-xl font-normal text-center text-grisclaro font-anybody w-[80%] m-auto mb-6">
            Introduce tu contraseña actual y una nueva contraseña.
          </h1>

          <div className="flex flex-col mb-1 w-[80%] m-auto">
            <label className="text-lg font-normal font-onest text-justify text-black mb-4">
              Contraseña actual
            </label>

            <div className="">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className=" bg-white border-gray-200 text-gray-900 text-lg rounded-lg block w-full mb-4"
                placeholder="••••••••••••••"
                required
              />
            </div>

            <label className="text-lg font-normal font-onest text-justify text-black mb-4">
              Contraseña nueva
            </label>

            <div className="">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className=" bg-white border-gray-200 text-gray-900 text-lg rounded-lg block w-full mb-4"
                placeholder="••••••••••••••"
                required
              />
            </div>

            <label className="text-lg font-normal font-onest text-justify text-black mb-4">
              Confirmar nueva contraseña
            </label>

            <div className="">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className=" bg-white border-gray-200 text-gray-900 text-lg rounded-lg block w-full mb-0"
                placeholder="••••••••••••••"
                required
              />
            </div>
          </div>
          <div className="flex flex-row gap-8 m-auto">
            <button
              onClick={() => handleShowModal(ContraCambiadaModalID)}
              className="bg-verde text-white px-14 my-10 py-2 rounded-3xl font-onest text-xl font-bold"
            >
              Listo
            </button>
            <button
              onClick={handleClose}
              className="bg-white border-grisclaro border-2 text-grisclaro px-8 my-10 py-2 rounded-3xl font-onest text-xl font-bold"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
