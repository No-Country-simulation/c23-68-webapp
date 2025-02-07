import { Modal } from "../modals/Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";





const AyudaModal = () => {

  const { AyudaModalID } = nameModal
  const { hide } = usePopups();

  const handleClose = () => {
    hide({
      popUpId: AyudaModalID,
      metadataId: AyudaModalID,
    })
  }

  return (
    <Modal
      id="ayuda-modal"
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

      </div>
    </Modal>
  )
}

export default AyudaModal;
