import { useForm } from "react-hook-form";
import { Modal } from "../modals/Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";
import usePopup from "../../hooks/usePopup";

const AhorrosEditForm = () => {
  const { show, hide } = usePopups();
  const { DataSavedModalID, AhorrosEditFormModalID } = nameModal;
  const { activePopup } = usePopup(AhorrosEditFormModalID);
  console.log(activePopup?.metadata);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priority: activePopup?.metadata.priority,
      name: activePopup?.metadata.name,
      targetAmount: activePopup?.metadata.targetAmount,
      createdAt: activePopup?.metadata.createdAt,
      deadline: activePopup?.metadata.deadline,
  }});



  const onSubmit = () => {
    console.log("Form submitted");
    show({
      popUpId: DataSavedModalID,
      metadata: { id: DataSavedModalID },
      pushMethod: "prepend",
    });
    hide({
      popUpId: AhorrosEditFormModalID,
      metadataId: AhorrosEditFormModalID,
    });
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    reset();
    hide({
      popUpId: AhorrosEditFormModalID,
      metadataId: AhorrosEditFormModalID,
    });
  };



  return (
    <Modal
      id={AhorrosEditFormModalID}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white  sm:px-12 py-6 rounded-3xl shadow-lg w-[542px] h-[546px] sm:max-w-2xl space-y-6 font-onest">
        {/* Botón de Cerrar */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-lg"
            onClick={handleCancel}>
            ✕
          </button>
        </div>

        {/* Campo Prioridad */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Prioridad <span className="text-red-500">*</span>
          </label>
          <select
            id="priority"
            {...register("priority", { required: true })}
            className="text-grisclaro w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm">
            <option value="">Elegir</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>

        {/* Campo Objetivo/name */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Objetivo<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {required: true})}
            placeholder="Una laptop marca X"
            className="w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm"
          />
        </div>

        {/* Campo Monto */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Monto <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="targetAmount"
            {...register("targetAmount", { required: true, min: 0.01 })}
            placeholder="$1000.00"
            className="w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm"
          />
        </div>


        {/* Campo Fecha de Inicio */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Fecha Inicio<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="createdAt"
            {...register("createdAt", { required: true })}
            className="text-grisclaro -[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm"
          />
        </div>

        {/* Campo Fecha de Fin */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Fecha Final<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="deadline"
            {...register("deadline", { required: true })}
            className="text-grisclaro w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm"
          />
        </div>

        {/* Mensaje de error general */}
        <div className="h-6 text-center">
          {Object.keys(errors).length > 0 && (
            <div className="text-red-500 text-sm">
              Por favor completa el campo faltante.
            </div>
          )}
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 font-bold">
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 text-white bg-amarillo rounded-[30px] shadow-md hover:bg-gradient-to-r from-amarillo to-amarillooscuro">
            Guardar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className= "w-full sm:w-auto px-4 py-2 text-grisclaro bg-transparent border-2 border-grisclaro rounded-[30px] hover:bg-grisclaro hover:text-white hover:border-grisclaro">
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AhorrosEditForm;
