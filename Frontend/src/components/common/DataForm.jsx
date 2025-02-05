import { useForm } from "react-hook-form";
import { useState } from "react";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";
import { createTransaction } from "../../service/transactions";
import {Modal} from "../modals/Modal";

const DataForm = () => {
  const { show, hide } = usePopups();
  const { DataSavedModalID, DataFormModalID } = nameModal;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const typeValue = watch("type");

  const getCategoryOptions = () => {
    const baseOptions = [{ value: "", label: "Elegir" }];
    
    if (typeValue === "Ingreso") {
      return [
        ...baseOptions,
        { value: "Sueldo", label: "Sueldo" },
        { value: "Emprendimiento", label: "Emprendimiento" },
        { value: "Bono", label: "Bono" },
        { value: "Negocio", label: "Negocio" },
      ];
    }
    
    if (typeValue === "Gasto") {
      return [
        ...baseOptions,
        { value: "Hogar", label: "Hogar" },
        { value: "Comida", label: "Comida" },
        { value: "Servicios", label: "Servicios" },
        { value: "Entretenimiento", label: "Entretenimiento" },
        { value: "Otros", label: "Otros" },
      ];
    }
    
    return baseOptions;
  };

  const formFields = [
    {
      name: "type",
      label: "Tipo",
      type: "select",
      validation: { required: "Este campo es requerido" },
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
        required: "Este campo es requerido",
        min: { value: 0.01, message: "El monto debe ser mayor a 0" },
      },
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      validation: { required: "Este campo es requerido" },
      options: getCategoryOptions(),
    },
    {
      name: "description",
      label: "Descripción",
      type: "text",
      placeholder: "Detallar (Opcional)",
      validation: {
        maxLength: { value: 100, message: "Máximo 100 caracteres" },
      },
    },
    {
      name: "date",
      label: "Fecha",
      type: "date",
      validation: { required: "Este campo es requerido" },
    },
  ];

  const handleSubmitForm = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await createTransaction(
        data.amount,
        data.type,
        data.category,
        data.description,
        data.date // Asegúrate de incluir la fecha
      );

      if (response) {
        reset();
        show({ popUpId: DataSavedModalID });
        hide({ popUpId: DataFormModalID });
      }
    } catch (error) {
      console.error("Error al guardar:", error);
      setSubmitError("Error al guardar los datos. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    reset();
    hide({ popUpId: DataFormModalID });
  };

  const renderInput = (field) => {
    const commonProps = {
      id: field.name,
      ...register(field.name, field.validation),
      className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none",
      placeholder: field.placeholder,
    };

    if (field.type === "select") {
      return (
        <select {...commonProps}>
          {field.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === "textarea") {
      return <textarea {...commonProps} rows="3" />;
    }

    return <input type={field.type} {...commonProps} />;
  };

  return (
    <Modal
      id={DataFormModalID}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-semibold">Agregar Transacción</h2>
          <button
            type="button"
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label}
                {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              {renderInput(field)}
              
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {submitError && (
          <p className="text-red-500 text-sm text-center">{submitError}</p>
        )}

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition-colors"
          >
            {isSubmitting ? "Guardando..." : "Guardar Datos"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DataForm;