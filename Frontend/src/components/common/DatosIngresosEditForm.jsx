import { useForm } from "react-hook-form";
import { Modal } from "../modals/Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";
import usePopup from "../../hooks/usePopup";
import { useEffect } from "react";

const DatosIngresosEditFormModalID = () => {
  const { show, hide } = usePopups();
  const { DataSavedModalID, DatosIngresosEditFormModalIDModalID } = nameModal;
  const { activePopup } = usePopup(DatosIngresosEditFormModalIDModalID);
  console.log(activePopup?.metadata);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      targetAmount: "",
      createdAt: "",
      deadline: "",
    },
  });

  useEffect(() => {
    if (activePopup && activePopup.metadata) {
      reset({
        name: activePopup.metadata.data.name || "",
        targetAmount: activePopup.metadata.data.targetAmount || "",
        createdAt: activePopup.metadata.data.createdAt || "",
        deadline: activePopup.metadata.data.deadline || "",
      });
    }
  }, [activePopup, reset]);

  const onSubmit = () => {
    console.log("Form submitted");
    show({
      popUpId: DataSavedModalID,
      metadata: { id: DataSavedModalID },
      pushMethod: "prepend",
    });
    hide({
      popUpId: DatosIngresosEditFormModalIDModalID,
      metadataId: DatosIngresosEditFormModalIDModalID,
    });
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    reset();
    hide({
      popUpId: DatosIngresosEditFormModalIDModalID,
      metadataId: DatosIngresosEditFormModalIDModalID,
    });
  };

  return (
    <Modal
      id={DatosIngresosEditFormModalIDModalID}
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

        {/* Campo Categoría */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Categoría <span className="text-red-500">*</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="text-grisclaro w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm">
            <option value="">Elegir</option>
            <option value="Sueldo">Sueldo</option>
            <option value="Emprendimiento">Emprendimiento</option>
            <option value="Bono">Bono</option>
            <option value="Negocio">Negocio</option>
          </select>
        </div>

        {/* Campo Descripción */}
        <div className="flex items-center gap-4 pl-2">
          <label className="w-1/3 font-medium text-gray-700 text-start">
            Descripción
          </label>
          <input
            type="text"
            {...register("description", {})}
            placeholder="Detallar(Opcional)"
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
            className="w-full sm:w-auto px-4 py-2 text-grisclaro bg-transparent border-2 border-grisclaro rounded-[30px] hover:bg-grisclaro hover:text-white hover:border-grisclaro">
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DatosIngresosEditFormModalID;
