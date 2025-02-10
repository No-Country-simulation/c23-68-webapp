import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

const FinBlog02 = () => {
  const location = useLocation();

  const routes = [
    { path: "/finblog", name: "FinBlog", image: "/finblog.png" },

    {
      path: "/finblog/finblog01",
      name: "¿Qué es la planificación financiera personal y por qué es crucial para lograr la estabilidad financiera?",
      description:
        "En la vida, uno de los mayores retos es gestionar el dinero de manera efectiva. Si bien todos deseamos alcanzar la estabilidad financiera...",
      parent: "/finblog",
      image: "/finblog01.png",
    },

    {
      path: "/finblog/finblog02",
      name: "Cómo la Planificación Financiera Ayuda a Evitar el Estrés Financiero y Alcanzar Metas a Largo Plazo.",
      description:
        "El estrés financiero es una de las principales fuentes de preocupación en la vida de muchas personas. No saber si el dinero alcanzará...",
      parent: "/finblog",
      image: "/finblog02.png",
    },

    {
      path: "/finblog/finblog03",
      name: "La Regla del 50/30/20: La Estrategia Simple para Administrar tu Dinero",
      description:
        "Administrar el dinero puede parecer complicado, pero la regla del 50/30/20 es un método simple y efectivo para...",
      parent: "/finblog",
      image: "/finblog03.png",
    },

    {
      path: "/finblog/finblog04",
      name: "La Importancia de un Fondo de Emergencia en tu Plan Financiero",
      description:
        "Un fondo de emergencia es un ahorro destinado exclusivamente para cubrir imprevistos. Es la diferencia entre...",
      parent: "/finblog",
      image: "/finblog04.png",
    },
  ];

  const currentRoute = routes.find((route) => route.path === location.pathname);
  const parentRoute = routes.find(
    (route) => route.path === currentRoute?.parent
  );

  const CustomPrevArrow = ({ onClick }) => (
    <FaChevronLeft
      className="text-black absolute left-[-40px] top-[50%] z-10 cursor-pointer"
      style={{ fontSize: "24px" }}
      onClick={onClick}
    />
  );

  CustomPrevArrow.propTypes = {
    onClick: PropTypes.func,
  };

  const CustomNextArrow = ({ onClick }) => (
    <FaChevronRight
      className="text-black absolute right-[-40px] top-[50%] z-10 cursor-pointer"
      style={{ fontSize: "24px" }}
      onClick={onClick}
    />
  );

  CustomNextArrow.propTypes = {
    onClick: PropTypes.func,
  };

  // Filtrar rutas para excluir la actual
  const relatedRoutes = routes.filter(
    (route) => route.path !== location.pathname && route.path !== "/finblog"
  );
  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };


  return (
    <div className="min-h-screen font-sans bg-white">
      <div className="bg-white shadow-lg rounded-3xl border-b-8 border-r-8 border-l-2 border-t-2 border-black py-6 px-56 w-[89%]  max-w-[1400px] h-auto my-16 mx-auto">
        <div className="text-center ">
          {parentRoute ? (
            <>
              <a
                href={parentRoute.path}
                className="text-sm font-normal font-onest text-gris4 hover:text-negro"
              >
                {parentRoute.name} &gt;
              </a>
              <span className="text-sm font-medium font-onest text-negro">
                {" "}
                {currentRoute?.name}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium font-onest text-negro">
              {currentRoute?.name}
            </span>
          )}
          <h2 className="text-xs font-onest font-normal text-gris my-4">
            Subido el 09 de Febrero del 2025
          </h2>

          <h2 className="text-3xl font-anybody font-bold text-negro my-4">
            Cómo la Planificación Financiera Ayuda a Evitar el Estrés Financiero
            y Alcanzar Metas a Largo Plazo
          </h2>

          <p className=" text-left text-lg text-black font-light font-onest">
            El estrés financiero es una de las principales fuentes de
            preocupación en la vida de muchas personas. No saber si el dinero
            alcanzará para cubrir necesidades, pagar deudas o enfrentar
            imprevistos
            <span className="font-onest  font-bold text-lg text-blue-500">
              {" "}
              puede generar ansiedad y afectar la calidad de vida.{" "}
            </span>
            La planificación financiera es la clave para tomar el control de
            nuestras finanzas y construir un futuro estable.
          </p>
          <div className=" center w-auto my-4 h-[480px] bg-[url('/finblog02.png')] rounded-2xl bg-cover bg-center"></div>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            ¿Cómo ayuda la planificación financiera?
          </h2>

          <ol className="text-left text-lg text-black font-bold font-onest list-decimal list-inside">
            <li>Presupuesto claro y realista</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Elaborar un presupuesto mensual permite saber cuánto dinero entra
              y en qué se está gastando. Esto ayuda a identificar gastos
              innecesarios y a distribuir mejor los ingresos.
            </p>
            <li>Reducción de deudas</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Tener un plan de pago organizado evita caer en el ciclo de deudas
              que generan altos intereses y estrés constante. Priorizar la
              eliminación de deudas costosas mejora la estabilidad financiera.
            </p>
            <li>Creación de un fondo de emergencia</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Contar con un ahorro destinado a imprevistos (como emergencias
              médicas o reparaciones del hogar) evita la necesidad de recurrir a
              préstamos o tarjetas de crédito.
            </p>
            <li>Definición de metas a largo plazo</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Ahorrar sin un propósito puede ser difícil. Definir objetivos
              concretos, como comprar una casa, estudiar una maestría o
              jubilarse cómodamente, motiva a mantener una planificación
              financiera constante.
            </p>
          </ol>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            Cuando tomamos el control de nuestras finanzas, reducimos la
            incertidumbre y podemos enfocarnos en disfrutar la vida sin
            preocupaciones innecesarias.
          </p>
        </div>
        {/* Slider */}
        <div className="mt-10">
          <h2 className="text-2xl font-anybody font-semibold text-negro my-4 text-left">
            Lea más aquí
          </h2>
          <Slider {...settings}>
            {relatedRoutes.map((route) => (
              <div
                key={route.path}
                className="p-4 cursor-pointer"
                href={route.path}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = route.path;
                }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <img
                    src={route.image}
                    alt={route.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-left">
                    <h3 className="text-xl font-semibold font-anybody text-negro">
                      {route.name}
                    </h3>
                    <p className="text-sm text-grisclaro font-onest font-normal my-2">
                      {route.description}
                    </p>
                    <p className="text-xs font-onest text-negro">
                      Subido el 09 de Febrero del 2025
                    </p>
                    <a
                      href={route.path}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = route.path;
                      }}
                      className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FinBlog02;
