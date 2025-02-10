import { Modal } from "./Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";

export function ContraCambiada() {
  const { CambioContraModalID,ContraCambiadaModalID } = nameModal;

  const { hide } = usePopups();

  const handleClose = () => {
    [CambioContraModalID, ContraCambiadaModalID].forEach((modalId) => {
      hide({
        popUpId: modalId,
        metadataId: modalId,
      });
    });
  };
  return (
    <Modal id={ContraCambiadaModalID}>
      <form className="space-y-6">
        <div className="flex flex-col px-16 pt-24 pb-2 mx-1 bg-white shadow-lg rounded-3xl">
          <button
            className="absolute text-2xl font-black text-gray-800 top-12 right-12"
            onClick={handleClose}
          >
            ✕
          </button>
          <h1 className="text-2xl font-medium text-center font-anybody w-[80%] m-auto mb-0">
            ¡Tu contraseña se ha actualizado exitosamente!
          </h1>

          <div className="m-auto">
            <button
              onClick={handleClose}
              className="bg-verde text-white px-14 my-8 py-4 rounded-3xl font-onest text-xl font-bold m-0"
            >
              <svg
                className="inline-block mr-2"
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.56192 10.4267L6.20837 10.0731L2.20963 6.07436C2.075 5.9457 1.89547 5.87457 1.70915 5.87619C1.52159 5.87782 1.34216 5.95305 1.20953 6.08569L0.855974 5.73213L1.20953 6.08569C1.07689 6.21832 1.00166 6.39775 1.00003 6.58531C0.998408 6.77163 1.06954 6.95117 1.19821 7.08579L6.05615 11.9437C6.05617 11.9438 6.05619 11.9438 6.05621 11.9438C6.19035 12.0779 6.37226 12.1532 6.56192 12.1532C6.75158 12.1532 6.93349 12.0779 7.06763 11.9438L6.56192 10.4267ZM6.56192 10.4267L6.91547 10.0731L15.7791 1.20945C15.7791 1.20943 15.7792 1.20942 15.7792 1.2094C15.9133 1.07532 16.0952 1 16.2849 1C16.4745 1 16.6564 1.0753 16.7906 1.20934C16.9247 1.3435 17 1.52542 17 1.71511C17 1.90478 16.9247 2.08668 16.7906 2.22083C16.7906 2.22084 16.7906 2.22086 16.7906 2.22088L7.06769 11.9437L6.56192 10.4267Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
