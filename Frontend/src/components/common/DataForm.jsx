import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Modal } from "../modals/Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";

const Form = () => {
  const { show, hide } = usePopups();
  const { DataSavedModalID, DataFormModalID } = nameModal;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch to monitor the value of "type"
  const typeValue = watch("type");

  const DataFields = [
    {
      name: "type",
      label: "Tipo",
      type: "select",
      validation: {
        required: "type is required",
      },
      options: [
        { value: "", label: "Elegir" },
        { value: "Ingreso", label: "Ingreso" },
        { value: "Gasto", label: "Gasto" },
      ],
    },
    {
      name: "amount",
      label: "Monto",
      type: "number",
      placeholder: "$1000.00",
      validation: {
        required: "Amount is required",
        min: {
          value: 0.01,
          message: "Amount must be greater than 0",
        },
      },
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      validation: {
        required: "Category is required",
      },
      options:
        typeValue === "Ingreso"
          ? [
              { value: "", label: "Elegir" },
              { value: "Sueldo", label: "Sueldo" },
              { value: "Emprendimiento", label: "Emprendimiento" },
              { value: "Bono", label: "Bono" },
              { value: "Negocio", label: "Negocio" },
            ]
          : typeValue === "Gasto"
          ? [
              { value: "", label: "Elegir" },
              { value: "Hogar", label: "Hogar" },
              { value: "Comida", label: "Comida" },
              { value: "Servicios", label: "Servicios" },
              { value: "Entretenimiento", label: "Entretenimiento" },
              { value: "Otros", label: "Otros" },
            ]
          : [],
    },
    {
      name: "description",
      label: "Descripción",
      type: "text",
      placeholder: "Detallar (Opcional)",
      validation: {
        maxLength: {
          value: 100,
          message: "Description cannot exceed 255 characters",
        },
      },
    },
    {
      name: "date",
      label: "Fecha",
      type: "date",
      validation: {
        required: "Date is required",
      },
    },
  ];

  const onSubmit = () => {
    console.log("Form submitted");
    show({
      popUpId: DataSavedModalID,
      metadata: { id: DataSavedModalID },
      pushMethod: "prepend",
    });
    hide({
      popUpId: DataFormModalID,
      metadataId: DataFormModalID,
    });
  };
  const handleCancel = () => {
    console.log("Form cancelled");
    hide({
      popUpId: DataFormModalID,
      metadataId: DataFormModalID,
    });
  };

  return (
    <Modal
      id={DataFormModalID}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg w-full max-w-xl sm:max-w-2xl space-y-6">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-lg"
            onClick={handleCancel}>
            ✕
          </button>
        </div>

        {/* Form Fields */}
        {DataFields.map((field) => (
          <div key={field.name} className="flex items-center gap-4">
            <label
              htmlFor={field.name}
              className="w-1/3 font-medium text-gray-700 text-start">
              {field.label}
              {field.name !== "description" && (
                <span className="text-red-500">*</span>
              )}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                {...register(field.name, field.validation)}
                placeholder={field.placeholder}
                className="w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                {...register(field.name, field.validation)}
                className="w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm">
                {field.options &&
                  field.options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="w-[180px] sm:w-2/3 lg:w-3/4">
                      {option.label}
                    </option>
                  ))}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type || "text"}
                {...register(field.name, field.validation)}
                placeholder={field.placeholder}
                className="w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
              />
            )}

            {/* Error Messages */}
            {errors[field.name] && (
              <span className="text-red-500 text-sm block">
                {errors[field.name].message || "This field is required"}
              </span>
            )}
          </div>
        ))}

        {/* Submit and Cancel Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 text-white bg-btn-green rounded-[30px] shadow-md hover:bg-gradient-to-r from-btn-green to-btn-green-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Guardar Datos
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-transparent border-2 border-secondary rounded-[30px] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "number",
        "textarea",
        "select",
        "date",
      ]),
      placeholder: PropTypes.string,
      validation: PropTypes.object,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
