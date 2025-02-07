const FinBlog = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <div className="bg-white shadow-lg rounded-3xl border-b-8  border-r-8 border-l-2 border-t-2 border-black py-12 p-24 w-[89%] max-w-[1400px] h-auto my-16 mx-auto">
        <div className="text-center">
          <button className="py-2 text-xl font-normal border border-black rounded-full bg-amarilloclaro font-onest px-7 ">
            Finblog
          </button>
          <h2 className="py-4 mt-4 text-4xl font-semibold font-anybody">
            Logo Finanzas
          </h2>

          <div>
            <img
              src="/finblog01.png"
              className=" " // Tamaño de la imagen
              alt="datos"
            />
          </div>
          <div>
            <img
              src="/finblog02.png"
              className=" " // Tamaño de la imagen
              alt="datos"
            />

            <img
              src="/finblog03.png"
              className=" " // Tamaño de la imagen
              alt="datos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinBlog;
