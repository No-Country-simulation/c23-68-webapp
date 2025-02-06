
import { Modal } from "../modals/Modal";
import usePopups from "../../hooks/usePopups";
import { nameModal } from "../../config/nameModals";



function DataSavedModal() {
  const { DataSavedModalID } = nameModal
  const { hide } = usePopups();

  const handleClose = () => {
    hide({
      popUpId: DataSavedModalID,
      metadataId: DataSavedModalID,
    })
  }

  return (
    <Modal
      id="data-saved-modal"
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">

      <div className="bg-white p-6 rounded-3xl shadow-lg text-center space-y-4 w-full max-w-sm">
      <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-lg"
            onClick={handleClose}>
            ✕
          </button>
        </div>
        <h2 className="text-3xl font-medium">¡Datos agregados con éxito!</h2>
        <p className="text-gray-600">
          La información se ha agregado correctamente en la tabla.
        </p>
        <button
          onClick={handleClose}
          className="min-w-[171px] min-h-[44px] px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none">
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

export default DataSavedModal

;
