import { Modal } from "../modals/Modal";
import usePopups from "../../hooks/usePopups";
import { nameModal } from "../../config/nameModals";

function DatosEditadosModal() {
  const { DatosEditadosModalID } = nameModal;
  const { hide } = usePopups();

  const handleClose = () => {
    hide({
      popUpId: DatosEditadosModalID,
      metadataId: DatosEditadosModalID,
    });
  };

  return (
    <Modal
      id={DatosEditadosModalID}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-3xl shadow-lg text-center space-y-4 w-full max-w-sm font-onest">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-lg"
            onClick={handleClose}>
            ✕
          </button>
        </div>
        <h2 className="text-2xl font-medium">¡Datos editados!</h2>
        <p className="text-gray-600">
          La información se ha editado en la tabla.
        </p>
        <button
          onClick={handleClose}
          className="m-auto flex justify-center items-center min-w-[171px] min-h-[44px] px-4 py-2 text-lg text-white font-bold bg-green-500 rounded-full hover:bg-green-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.0619 13.9267L9.70837 13.5731L5.70963 9.57436C5.575 9.4457 5.39547 9.37457 5.20915 9.37619C5.02159 9.37782 4.84216 9.45305 4.70953 9.58569L4.35597 9.23213L4.70953 9.58569C4.57689 9.71832 4.50166 9.89775 4.50003 10.0853C4.49841 10.2716 4.56954 10.4512 4.69821 10.5858L9.55615 15.4437C9.55617 15.4438 9.55619 15.4438 9.55621 15.4438C9.69035 15.5779 9.87226 15.6532 10.0619 15.6532C10.2516 15.6532 10.4335 15.5779 10.5676 15.4438L10.0619 13.9267ZM10.0619 13.9267L10.4155 13.5731L19.2791 4.70945C19.2791 4.70943 19.2792 4.70942 19.2792 4.7094C19.4133 4.57532 19.5952 4.5 19.7849 4.5C19.9745 4.5 20.1564 4.5753 20.2906 4.70934C20.4247 4.8435 20.5 5.02542 20.5 5.21511C20.5 5.40478 20.4247 5.58668 20.2906 5.72083C20.2906 5.72084 20.2906 5.72086 20.2906 5.72088L10.5677 15.4437L10.0619 13.9267Z"
              fill="white"
              stroke="white"
            />
          </svg>

          <span>Aceptar</span>
        </button>
      </div>
    </Modal>
  );
}

export default DatosEditadosModal;
