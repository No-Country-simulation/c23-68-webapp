import { Modal } from "../modals/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const transactionSchema = yup.object().shape({
  priority: yup.string().required("Selecciona el tipo de transacción"),
  objective: yup.string().max(100, "Máximo 100 caracteres"),
  amount: yup
    .number()
    .typeError("El monto debe ser un número")
    .positive("El monto debe ser mayor a cero")
    .required("El monto es obligatorio"),
  start_date: yup.date().required("La fecha es obligatoria"),
  end_date: yup.date().required("La fecha es obligatoria"),
});

const SavingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(transactionSchema),
    defaultValues: {
      priority: "",
      objective: "",
      amount: "",
      start_date: "",
      end_date: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      id="savings-form-modal"
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 pt-20 rounded-[30px] shadow-lg w-[542px] h-[546px] space-y-4">
        <div className="flex justify-end items-center">
          <button type="button" className="text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>

        <div className="flex items-center">
          <label className="font-medium text-lg text-primary mb-1 flex items-center w-1/3">
            Prioridad <span className="text-[#FF4049]">*</span>
          </label>
          <select
            {...register("priority")}
            className="w-[148px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-gray-500 focus:outline-none">
            <option value="" >Elegir</option>
            <option value="high" className="text-red-500 border-red-500">Alta</option>
            <option value="medium">Media</option>
            <option value="low">Baja</option>
          </select>

          {errors.type && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority.message}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <label className="flex font-medium text-lg mb-1  items-center w-1/3">
            Objetivo <span className="text-[#FF4049]">*</span>
          </label>
          <input
            type="text"
            {...register("objective")}
            className="w-[325px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Una laptop marca X"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.objective.message}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <label className="font-medium text-lg mb-1 flex items-center w-1/3">
            Monto <span className="text-[#FF4049]">*</span>
          </label>
          <input
            type="number"
            {...register("amount")}
            className="w-[143px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="$1,000.00"
          />

          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div className="flex items-center">
          <label className="font-medium text-lg mb-1 flex items-center w-1/3">
            Fecha Inicio <span className="text-[#FF4049]">*</span>
          </label>
          <input
            type="date"
            {...register("start_date")}
            className="w-[168px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {errors.start_date && (
            <p className="text-red-500 text-sm mt-1">
              {errors.start_date.message}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <label className="font-medium text-lg mb-1 flex items-center w-1/3">
            Fecha Final <span className="text-[#FF4049]">*</span>
          </label>
          <input
            type="date"
            {...register("end_date")}
            className="w-[168px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {errors.date && (
            <p className="text-red-500 text-sm mt-1">
              {errors.end_date.message}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-7">
          <button
            type="submit"
            className="w-[192px] bg-btn-green text-white font-bold py-2 px-4 rounded-[20px] hover:bg-gradient-to-r from-btn-green to-btn-green-hover">
            Guardar datos
          </button>
          <button
            type="button"
            className="bg-gray-300 text-white p-[10px] rounded-[20px] w-[166px]  hover:bg-gray-400">
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SavingsForm;
