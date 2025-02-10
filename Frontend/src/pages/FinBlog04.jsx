import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

const FinBlog04 = () => {
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
            La Importancia de un Fondo de Emergencia en tu Plan Financiero
          </h2>

          <p className=" text-left text-lg text-black font-light font-onest">
            Un fondo de emergencia es un ahorro destinado exclusivamente para
            cubrir imprevistos.
            <span className="font-onest  font-bold text-lg text-amarillo">
              {" "}
              Es la diferencia entre enfrentar una crisis con tranquilidad o
              caer en deudas{" "}
            </span>
            que afecten la estabilidad financiera.
          </p>
          <div className=" center w-auto my-4 h-[480px] bg-[url('/finblog04.png')] rounded-2xl bg-cover bg-center"></div>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            ¿Por qué es esencial?
          </h2>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            Sin un fondo de emergencia, cualquier gasto inesperado puede
            desajustar el presupuesto y obligar a recurrir a tarjetas de crédito
            o préstamos con altos intereses. Este fondo actúa como un colchón
            financiero que protege contra situaciones imprevistas como:
          </p>
          <ul className="text-left text-lg text-black font-light font-onest list-disc list-inside">
            <li>Pérdida de empleo</li>
            <li>Enfermedades o gastos médicos</li>
            <li>Reparaciones urgentes en el hogar o auto</li>
            <li>Gastos inesperados familiares</li>
          </ul>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            ¿Cuánto dinero debería tener un fondo de emergencia?
          </h2>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            Lo ideal es ahorrar entre tres y seis meses de gastos fijos. Para
            determinar el monto necesario, se deben sumar los costos esenciales
            como renta, servicios, alimentación y transporte.
          </p>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            ¿Cómo empezar a construirlo?
          </h2>
          <ol className="text-left text-lg text-black font-bold font-onest list-decimal list-inside">
            <li>Establecer un objetivo:</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Definir un monto alcanzable según la situación financiera.
            </p>
            <li>Ahorrar regularmente:</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Separar un porcentaje del ingreso cada mes hasta alcanzar la meta.
            </p>
            <li>Mantenerlo en una cuenta accesible pero separada:</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Evitar la tentación de gastarlo en compras innecesarias.
            </p>
          </ol>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            Contar con un fondo de emergencia brinda tranquilidad y seguridad
            ante cualquier imprevisto, evitando caer en deudas o comprometer el
            bienestar financiero.
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

export default FinBlog04;
