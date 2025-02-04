import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="h-100 w-100 bg-white">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-10">
        <div className="md:w-1/2 space-y-6 self-start">
          <h1 className="text-4xl md:text-6xl font-anybody  text-black">
            Deja de <br />
            preocuparte por el <br />
            <span className="text-yellow-400"> dinero</span>.
            <br />
            ¡Empieza a <br />
            <span className="text-pink-500"> planificarlo</span> hoy <br />
            mismo!
          </h1>
          <div className="flex items-center mt-16">
          <button className="flex items-center justify-center px-6 py-3 bg-green-500 font-onest text-white text-lg rounded-full shadow-lg hover:bg-green-600">
          <NavLink to="/dashboard">Ver Panel</NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button className="text-lg font-medium text-gray-700 hover:underline font-onest cursor-pointer ml-14">
              Conócenos
            </button>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-6 mt-8 md:mt-0 w-1/2">
          <div className="grid grid-cols-1 grid-rows-2 overflow-hidden max-w-full max-h-full row-span-1 col-span-2 p-6 rounded-2xl shadow-md bg-cover bg-center about-bg">
            <div>
              <button className="font-onest bg-white bg-opacity-70 text-lg p-2 rounded-2xl">
                <NavLink to="/about">Acerca de</NavLink>
              </button>
              <p className="text-white p-2 font-onest mt-2">
                Logo Finanzas, creada para simplificar la gestión de tus
                finanzas personales y ayudarte a alcanzar tus metas.
              </p>
            </div>

            <div className="self-end w-1/2">
              <p className="text-white text-start font-onest text-sm p-2">
                Creemos que la planificación financiera no tiene por qué ser
                complicada, por eso creamos herramientas prácticas que se
                adaptan a tus necesidades y objetivos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2 overflow-hidden p-6 rounded-2xl shadow-md bg-cover bg-center finblog-bg ">
            <div>
              <button className="font-onest text-lg bg-white bg-opacity-70 px-6 py-2 rounded-2xl hover:bg-opacity-90 transition-opacity">
                <NavLink to="/finblog">Finblog</NavLink>
              </button>
              <p className="text-white p-2 font-onest mt-2">
                Consejos prácticos para gestionar tu dinero, ahorrar y alcanzar
                tus objetivos financieros
              </p>
            </div>

            <p className="self-end font-onest text-white text-start text-sm p-2 w-1/2">
              Descubre tips sencillos para gestionar tu dinero y lograr tus
              metas.
            </p>
          </div>

          <div className="p-6 bg-pink-100 rounded-2xl shadow-md bg-cover bg-center team-bg flex flex-col items-start justify-between">
            <button className="font-onest text-lg bg-white bg-opacity-70 p-2  rounded-2xl">
              <NavLink to="/team">Equipo</NavLink>
            </button>
            <p className="font-onest text-white font-semibold text-8xl ">06</p>
            <p className="text-white font-onest p-2">
              Conoce al equipo que hace posible el sistema para planificar tus
              finanzas personales.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-1/2  p-8 ">
        <div className=" text-start ">
          <p className="text-black-600 font-onest mb-4">
            *Nuestro planificador de finanzas personales te ayuda a gestionar
            tus recursos y tomar decisiones inteligentes.
          </p>
          <div className="flex items-center justify-around">
            <FaFacebook className="w-8 h-8 text-black-600 cursor-pointer" />
            <FaTwitter className="w-8 h-8 text-black-600 cursor-pointer" />
            <FaInstagram className="w-8 h-8 text-black-600 cursor-pointer" />
            <FaTiktok className="w-8 h-8 text-black-600 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
