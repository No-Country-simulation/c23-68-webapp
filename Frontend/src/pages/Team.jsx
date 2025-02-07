const TeamInfo = [
  {
    id: 1,
    src: "../../public/images/franco_espinoza.png",
    name: "Franco Espinoza",
    role: "PM & Backend",
  },
  {
    id: 2,
    src: "../../public/images/angel_quispe.png",
    name: "Angel Quispe",
    role: "Frontend",
  },
  {
    id: 3,
    src: "../../public/images/fabricio_turrina.png",
    name: "Fabricio Turrina",
    role: "Frontend",
  },
  {
    id: 4,
    src: "../../public/images/hugo_salazar.png",
    name: "Hugo Salazar",
    role: "Frontend",
  },
  {
    id: 5,
    src: "../../public/images/nayely_rodriguez.png",
    name: "Nayely Rodriguez",
    role: "Designer UX/UI",
  },
  {
    id: 6,
    src: "../../public/images/styfferson_castro.png",
    name: "Styfferson Castro",
    role: "Quality Assurance",
  },
];

const Team = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <div className="bg-white shadow-lg rounded-3xl border-b-8  border-r-8 border-l-2 border-t-2 border-black py-12 p-24 w-[89%] max-w-[1400px] my-16 mx-auto">
        <div className="text-center">
          <button className="bg-rosaclaro font-normal font-onest text-xl px-7 py-2 rounded-full border border-black ">
            Equipo
          </button>
          <h2 className="text-4xl py-4 font-semibold font-anybody mt-4">
            Conoce a nuestro equipo
          </h2>
          <p className="mt-4 max-w-4xl pt-1 mx-auto font-onest font-normal text-base text-negro">
            En Fipe, estamos orgullosos de presentar al equipo que convirtió
            esta idea en realidad. Somos un{" "}
            <span className="text-rosa2 font-semibold">
              grupo multidisciplinario de desarrolladores
            </span>{" "}
            y diseñadores que compartimos una visión común: ayudarte a tomar el
            control de tus finanzas de manera sencilla y eficiente. Cada
            detalle, desde el diseño de la plataforma hasta las funcionalidades
            que utilizas, es el resultado del esfuerzo, la creatividad y la
            pasión de nuestro equipo. Conoce a las personas que hicieron esto
            posible y descubre cómo trabajamos para brindarte una experiencia
            única.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mt-5">
          {TeamInfo.map((member) => (
            <div
              key={member.id}
              className="flex flex-col w-[180px] justify-center items-center py-3 px-2 rounded-2xl shadow-xl cursor-pointer hover:scale-105 duration-200 ease-in-out hover:shadow-2xl font-onest">
              <img src={member.src} alt="" width={130} height={130} />

              <h3 className=" text-lg text-negro font-semibold leading-6 my-2">
                {member.name}
              </h3>
              <p className="font-semibold font-onest leading-6 px-2 rounded-full border-2 text-white bg-verdeoscuro border-verdeoscuro py-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
