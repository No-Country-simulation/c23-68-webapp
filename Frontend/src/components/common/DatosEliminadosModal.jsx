import { Modal } from "../modals/Modal";
import usePopups from "../../hooks/usePopups";
import { nameModal } from "../../config/nameModals";
import usePopup from "../../hooks/usePopup";

function DatosEliminadosModal() {
  const { DatosEliminadosModalID } = nameModal;
  const { hide } = usePopups();

  const { activePopup } = usePopup(DatosEliminadosModalID);
  console.log(activePopup?.metadata?.idModal);
  const handleClose = () => {
    hide({
      popUpId: DatosEliminadosModalID,
      metadataId: DatosEliminadosModalID,
    });
  };

  return (
    <Modal
      id={DatosEliminadosModalID}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-3xl shadow-lg text-center space-y-4 w-[500px] font-onest">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-lg"
            onClick={handleClose}>
            ✕
          </button>
        </div>
        <h2 className="text-2xl font-medium">¿Estás seguro de eliminar esta fila?</h2>
        <p className="text-gray-600">
          Esta acción no se puede deshacer. Si eliminas esta fila, perderás toda la información asociada a ella.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 font-bold">
          <button
            type="submit"
            className="w-full sm:w-[143px] px-4 py-2 text-white bg-rojo rounded-[30px] shadow-md hover:bg-rojooscuro">
            Eliminar
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:w-[143px] px-4 py-2 text-grisclaro bg-transparent border-2 border-grisclaro rounded-[30px] hover:bg-grisclaro hover:text-white hover:border-grisclaro">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DatosEliminadosModal;
