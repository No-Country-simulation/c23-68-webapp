// import React from "react";
// import Navbar from "../components/layout/Navbar";

// const Home = () => {
//   return (
//     <div className="h-screen w-screen p-6">
//       <Navbar />
//       <section className="flex h-4/5 justify-center items-center border-solid border-2 border-red-500">

//         <div className="w-1/2  h-full   border-solid border-2 border-sky-500">
//           <div>
//             <h1 className="text-4xl font-anybody">Deja de preocuparte por el 
//               dinero. 
//           ¡Empieza a planificarlo hoy mismo!</h1>
//           </div>
//           <div className="flex items-center justify-between pt-3">
//           <button type="button" className='flex items-center justify-center w-56 h-10 text-white text-lg bg-[#2ECC71] rounded-2xl p-2'>
//             Ver panel
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
// </svg>
//           </button>
//           <p>Conocenos</p>
//           </div>
//         </div>

//         <div className="w-1/2    border-solid border-2 border-sky-500">
//           <div className="border-solid border-2 border-sky-500">acerca de bla bla...</div>
//           <div className="flex border-solid border-2 border-sky-500">
//             <div className="w-1/2  border-solid border-2 border-green-500">Findblog..</div>
//             <div className="w-1/2   border-solid border-2 border-green-500">Equipo...</div>  
//           </div>
//         </div>

//       </section>

//       <footer className="flex flex-col w-1/2 mt-2   border-solid border-2 border-yellow-500">
//         <div>  
//           <h4 className="font-onest "> Nuestro planificador de finanzas personales te ayuda a gestionar tus recursos y tomar decisiones inteligentes para alcanzar tus metas financieras.
// </h4>    
//         </div>
//         <div>.....Logos de redes sociales....</div>
//          </footer>

//     </div>
//   );
// };

// export default Home;


import React from "react";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug text-black">
            Deja de <span className="text-yellow-400">preocuparte</span> por el <span className="text-yellow-400">dinero</span>. 
            <br />
            ¡Empieza a <span className="text-pink-500">planificarlo</span> hoy mismo!
          </h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-green-500 text-white text-lg rounded-full shadow-lg hover:bg-green-600">
              Ver Panel
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            <p className="text-lg text-gray-700 hover:underline cursor-pointer">Conócenos</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-0">
          <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Acerca de</h3>
            <p className="text-gray-600">
              Logo Finanzas, creada para simplificar la gestión de tus finanzas personales y ayudarte a alcanzar tus metas.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Finblog</h3>
            <p className="text-gray-600">
              Consejos prácticos para gestionar tu dinero, ahorrar y alcanzar tus objetivos financieros.
            </p>
          </div>
          <div className="p-6 bg-pink-100 rounded-lg shadow-md col-span-2">
            <h3 className="font-bold text-lg">Equipo</h3>
            <p className="text-gray-600">
              Conoce al equipo que hace posible el sistema para planificar tus finanzas personales.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-gray-600">
            Nuestro planificador de finanzas personales te ayuda a gestionar tus recursos y tomar decisiones inteligentes.
          </p>
          <div className="flex items-center justify-center space-x-4">
            {/* Icons de redes sociales */}
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
