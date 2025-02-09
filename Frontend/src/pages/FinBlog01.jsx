import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FinBlog01 = () => {
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

  const navigate = useNavigate();

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
            ¿Qué es la planificación financiera personal y por qué es crucial
            para lograr la estabilidad financiera?
          </h2>

          <p className=" text-left text-lg text-black font-light font-onest">
            En la vida, uno de los mayores retos es gestionar el dinero de
            manera efectiva. Si bien todos deseamos alcanzar la estabilidad
            financiera, no siempre sabemos cómo hacerlo de forma organizada y
            con propósito. Aquí es donde entra en juego la planificación
            financiera personal: un proceso clave que te permite
            <span className="font-onest  font-bold text-lg text-rosa">
              {" "}
              tomar control de tus finanzas y tomar decisiones
            </span>
            , que te acerquen a tus objetivos a corto, mediano y largo plazo.
          </p>
          <div className=" center w-auto my-4 h-[480px] bg-[url('/finblog01.png')] rounded-2xl bg-cover bg-center"></div>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            ¿Qué es la Planificación Financiera Personal?
          </h2>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            La planificación financiera personal es el proceso de crear un plan
            para gestionar tu dinero, de manera que puedas alcanzar tus metas
            financieras mientras cubres tus necesidades y te preparas para
            imprevistos. Este plan involucra una serie de pasos estratégicos
            para administrar tus ingresos, gastos, ahorros, inversiones, deudas
            y seguros de forma alineada con tus objetivos de vida.
          </p>
          <h3 className="text-left text-lg text-black font-light font-onest">
            Algunos de los elementos clave de la planificación financiera
            incluyen:
          </h3>
          <ul className="text-left text-lg text-black font-light font-onest list-disc list-inside">
            <li>
              Presupuesto personal: La base de todo plan financiero. Se trata de
              hacer un seguimiento de tus ingresos y gastos mensuales para
              asegurarte de que estás viviendo dentro de tus posibilidades y
              ahorrando para el futuro.
            </li>
            <li>
              Ahorro e inversión: Una parte esencial de cualquier plan es
              ahorrar para emergencias y comenzar a invertir para lograr
              objetivos a largo plazo, como comprar una casa o asegurar tu
              jubilación.
            </li>
            <li>
              Eliminación de deudas: Si tienes deudas, es importante establecer
              un plan para pagarlas. Las deudas pueden ahogar tu capacidad para
              ahorrar y crecer financieramente, por lo que eliminarlas debe ser
              una prioridad.
            </li>
            <li>
              Protección financiera: Esto incluye la contratación de seguros que
              te protejan a ti y a tu familia frente a imprevistos como
              accidentes, enfermedades o pérdida de ingresos.
            </li>
          </ul>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            ¿Por Qué es Crucial la Planificación Financiera Personal?
          </h2>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            La planificación financiera no es solo para quienes tienen grandes
            riquezas o ingresos. Es fundamental para todos, sin importar el
            nivel de tus ganancias. Aquí te explicamos por qué es tan crucial:
          </p>
          <ol className="text-left text-lg text-black font-bold font-onest list-decimal list-inside">
            <li>Te da control sobre tu dinero</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Sin un plan, tu dinero puede escaparse rápidamente sin que te des
              cuenta. La planificación financiera te permite tener un control
              consciente sobre cómo gastas, ahorras e inviertes. Al crear un
              presupuesto y seguirlo, puedes asegurarte de que tu dinero trabaje
              para ti, en lugar de que tú trabajes para él.
            </p>
            <li>Te ayuda a alcanzar tus metas financieras</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Todos tenemos sueños: comprar una casa, viajar por el mundo,
              ahorrar para la educación de nuestros hijos o tener una jubilación
              tranquila. La planificación financiera te da una hoja de ruta
              clara para convertir esos sueños en metas alcanzables. Al
              establecer metas específicas, puedes crear un plan detallado para
              lograr cada una de ellas.
            </p>
            <li>Protege tu futuro</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              La planificación financiera no solo se trata del presente, sino
              también del futuro. Tener un plan de ahorro para emergencias,
              inversiones a largo plazo y estrategias para la jubilación te
              permite prepararte para lo que está por venir, minimizando los
              riesgos y brindándote seguridad financiera a largo plazo.
            </p>
            <li>Te ayuda a tomar decisiones informadas</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              Sin un plan claro, es fácil tomar decisiones impulsivas que
              afecten negativamente tus finanzas. La planificación financiera te
              da una perspectiva amplia de tus recursos y necesidades, lo que te
              permite tomar decisiones más inteligentes y alineadas con tus
              objetivos.
            </p>
            <li>Reduce el estrés financiero</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              La falta de control financiero puede generar ansiedad y estrés. La
              planificación financiera te permite reducir la incertidumbre y el
              miedo al futuro, ya que sabes exactamente dónde estás y cómo
              avanzar. Al tener claridad sobre tus finanzas, puedes disfrutar de
              una mayor tranquilidad y confianza en tu camino hacia la
              estabilidad.
            </p>
            <li>Te ayuda a adaptarte a los cambios</li>
            <p className="text-left text-lg text-black font-light font-onest ">
              La vida está llena de cambios inesperados, como la pérdida de
              empleo, enfermedades o incluso nuevos proyectos familiares. Con un
              plan financiero sólido, puedes ajustarte mejor a estas
              transiciones, ya que tendrás un colchón financiero que te ayude a
              manejar los altibajos sin caer en pánico ni endeudarte.
            </p>
          </ol>
          <h2 className=" text-left text-2xl font-onest font-bold text-negro my-4">
            En Resumen
          </h2>
          <p className=" text-left text-lg text-black font-light font-onest my-4">
            La planificación financiera personal no es un lujo ni una opción, es
            una necesidad para cualquier persona que quiera alcanzar la
            estabilidad financiera y construir un futuro sin preocupaciones
            económicas. Al crear un plan sólido y seguirlo, puedes tomar el
            control de tu dinero, alcanzar tus metas y tener la tranquilidad de
            saber que estás preparado para lo que venga. Recuerda que nunca es
            tarde para empezar. Si bien puede parecer abrumador al principio,
            dar el primer paso hacia la planificación financiera puede ser la
            decisión más importante que tomes para mejorar tu vida financiera y
            asegurar un futuro más próspero y estable.
          </p>
        </div>
        {/* Slider */}
        <div className="mt-10">
          <h2 className="text-2xl font-anybody font-semibold text-negro my-4 text-left">
            Lea más aquí
          </h2>

          <Slider {...settings}>
            {relatedRoutes.map((route) => (
              <div key={route.path} className="p-4" onClick={() => navigate(route.path)}>
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

export default FinBlog01;
