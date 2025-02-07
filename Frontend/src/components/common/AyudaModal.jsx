
import { Modal } from "../modals/Modal";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";

const AyudaModal = () => {
  const { hide } = usePopups();
  const { AyudaModalID } = nameModal;



  const handleCancel = () => {

    hide({
      popUpId: AyudaModalID,
      metadata: { id: AyudaModalID },
      pushMethod: "prepend",
    });
    };





  return (
    <Modal
      id={AyudaModalID}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div
       className="bg-white sm:px-12 py-6 rounded-3xl shadow-lg w-[650px] h-[600px] sm:max-w-2xl space-y-6 font-onest">
        {/* Botón de Cerrar */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-lg"
            onClick={handleCancel}>
          </button>
        </div>

        <h2 className="text-2xl font-medium text-center">En que podemos ayudarte?</h2>
        <h3 className="text-gray-600">
          Cómo registro mis ingresos y gastos?.
        </h3>
        <p>Para agregar un ingreso o un gasto, haz click en el botón verde <span className="font-semibold">&quot;+ Agregar datos&quot;</span> ubicado e la sección <span className="font-semibold">&quot;Datos&quot;</span>. Allí podrás seleccionar si deseas registrar un ingreso o un gasto, ingresar la información correspondiente y <span className="font-semibold">guardar</span> los cambios.</p>

        <h3 className="text-gray-600">
        ¿Es seguro registrar mis datos financieros aquí?
        </h3>
        <p>Sí, nos tomamos la seguridad de tus datos muy en serio. Utilizamos protocolos de encriptación para proteger la información almacenada, y tus datos personales nunca se compartirán con terceros sin tu consentimiento.</p>

        <h3 className="text-gray-600">
        ¿Qué es el &quot;Finblog&quot; y cómo me puede ayudar?
        </h3>
        <p>El Finblog es un espacio donde compartimos consejos relacionados con la gestión de finanzas personales. Aquí encontrarás contenido útil para optimizar tus ahorros, reducir gastos innecesarios y alcanzar tus metas financieras.</p>
      </div>
    </Modal>
  );
};

export default AyudaModal;
