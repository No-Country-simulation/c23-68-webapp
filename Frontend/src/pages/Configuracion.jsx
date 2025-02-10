import { useState } from "react";
import { nameModal } from "../config/nameModals";
import usePopups from "../hooks/usePopups";

const Configuracion = () => {
  const [seguridadVisible, setSeguridadVisible] = useState(false);

  const { CambioContraModalID } = nameModal;
  const { show } = usePopups();

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: "prepend",
    });
  };

  return (
    <div className="h-full pt-6 font-sans bg-gris3 ">
      <div className="bg-white shadow-lg rounded-3xl border-b-2  w-[90%]  max-w-[1000px] mt-4 mb-10 mx-auto px-20 py-12">
        <img
          className="absolute  mx-[44%] my-[6%]"
          src="/fabricio_turrina.png"
          alt=""
        />
        <h2 className="font-onest font-semibold text-negro text-lg pb-4">
          Mostrar Nombre
        </h2>
        <input
          className="bg-gray-200 border-white rounded-xl w-[65%] mb-4 pb-3"
          type="text"
        />
        <h2 className="font-onest font-semibold text-negro text-lg pb-4">
          Nombre y Apellido
        </h2>
        <input
          className="bg-gray-200 border-white rounded-xl w-[65%] mb-4 pb-3"
          type="text"
        />
        <h2 className="font-onest font-semibold text-negro text-lg pb-4">
          Correo Electrónico
        </h2>
        <input
          className="bg-gray-200 border-white rounded-xl w-[65%] mb-10 pb-3"
          type="text"
        />
        <div className="flex flex-row gap-8">
          <button className="bg-amarillooscuro text-white px-12 py-2 rounded-2xl font-onest text-xl font-bold">
            Editar
          </button>
          <button className="bg-white text-verde  border-verde border-2 px-10 py-2 rounded-3xl font-onest text-xl font-bold">
            Guardar
          </button>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-3xl border-b-2  w-[90%]  max-w-[1000px] my-4 mx-auto px-10 pt-10 pb-6 mb-16 cursor-pointer"
        onClick={() => setSeguridadVisible(!seguridadVisible)}
      >
        <div className="flex flex-row">
          <h2 className="font-onest font-semibold text-negro text-xl pb-6">
            Seguridad y privacidad
          </h2>
          <svg
            className="ml-auto cursor-pointer transform transition-transform"
            style={{
              transform: seguridadVisible ? "rotate(180deg)" : "rotate(0deg)",
            }}
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.88016 7.38419C6.12366 7.14077 6.45386 7.00403 6.79815 7.00403C7.14245 7.00403 7.47265 7.14077 7.71615 7.38419L11.9919 11.6599L16.2676 7.38419C16.3874 7.26018 16.5307 7.16126 16.6891 7.09321C16.8475 7.02516 17.0179 6.98934 17.1903 6.98784C17.3627 6.98634 17.5337 7.0192 17.6932 7.08448C17.8528 7.14977 17.9978 7.24618 18.1197 7.36809C18.2416 7.49001 18.338 7.63498 18.4033 7.79455C18.4686 7.95413 18.5014 8.1251 18.5 8.29751C18.4985 8.46991 18.4626 8.64029 18.3946 8.79871C18.3265 8.95712 18.2276 9.1004 18.1036 9.22017L12.9099 14.4139C12.6664 14.6573 12.3362 14.7941 11.9919 14.7941C11.6476 14.7941 11.3174 14.6573 11.0739 14.4139L5.88016 9.22017C5.63675 8.97668 5.5 8.64648 5.5 8.30218C5.5 7.95788 5.63675 7.62768 5.88016 7.38419Z"
              fill="#1E1E1E"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div className={seguridadVisible ? "block" : "hidden"}>
          <h2 className="font-onest font-semibold text-negro text-lg pb-3">
            Contraseña
          </h2>
          <button
            className="bg-verde text-white px-5 py-2 rounded-2xl font-onest text-base font-bold mb-4"
            onClick={() => handleShowModal(CambioContraModalID)}
          >
            Cambiar Contraseña
          </button>
          <h2 className="font-onest font-semibold text-negro text-lg pb-3">
            Política de privacidad
          </h2>
          <h3 className="font-onest font-semibold text-negro text-base">
            Información
          </h3>
          <p className="font-onest font-normal text-negro text-sm">
            En FIPE, valoramos tu privacidad. Esta política explica cómo
            recopilamos, usamos, almacenamos y protegemos tu información
            personal al usar nuestra plataforma de planificación financiera
            personal.
          </p>
          <h3 className="font-onest font-semibold text-negro text-base">
            Datos que recopilamos
          </h3>
          <ul className="font-onest font-normal text-negro text-sm list-disc list-outside pl-6">
            <li>
              Datos personales: Información que nos proporcionas directamente al
              registrarte, como tu nombre y dirección de correo electrónico.
            </li>
            <li>
              Datos financieros: Información que ingresas para utilizar nuestras
              herramientas de planificación financiera, como ingresos, gastos y
              ahorros.
            </li>
            <li>
              Datos de uso: Información sobre cómo interactúas con nuestra
              plataforma, como las páginas que visitas y las funciones que
              utilizas.
            </li>
            <li>
              Datos técnicos: Información recopilada automáticamente, como tu
              dirección IP, tipo de dispositivo, navegador y sistema operativo.
            </li>
          </ul>
          <h3 className="font-onest font-semibold text-negro text-base">
            Como usamos tus datos
          </h3>
          <ul className="font-onest font-normal text-negro text-sm list-disc list-outside pl-6">
            <li>
              Proporcionar servicios personalizados: Adaptamos nuestras
              herramientas y recomendaciones de planificación financiera según
              la información que nos proporcionas, como tus ingresos y gastos.
            </li>
            <li>
              Envío de recordatorios y notificaciones: Te ayudamos a mantener el
              control de tus finanzas enviándote alertas sobre fechas de
              vencimiento, metas financieras y nuevas oportunidades.
            </li>
            <li>
              Mejora de la plataforma: Analizamos los datos de uso para
              optimizar nuestras funciones, corregir errores y desarrollar
              nuevas herramientas que se adapten a tus necesidades.
            </li>
            <li>
              Cumplimiento con la ley: Procesamos tu información cuando sea
              necesario para cumplir con requisitos legales o regulatorios
              aplicables.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-8 mx-[5%] my-10">
        <button className="bg-red-500 text-white px-8 py-2 rounded-2xl font-onest text-xl font-bold">
          Deshabilitar cuenta
        </button>
        <button className=" text-grisclaro border-grisclaro border-2 px-8 py-2 rounded-3xl font-onest text-xl font-bold">
          Eliminar cuenta
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
