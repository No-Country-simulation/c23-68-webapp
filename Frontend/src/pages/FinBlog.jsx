import { NavLink } from "react-router-dom";

const FinBlog = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <div className="bg-white shadow-lg rounded-3xl border-b-8  border-r-8 border-l-2 border-t-2 border-black py-12 p-10 w-[89%]  max-w-[1400px] h-auto my-16 mx-auto">
        <div className="text-center">
          <button className=" ml-24 mb-8 py-2 text-xl font-normal border border-black rounded-full bg-amarilloclaro font-onest px-7">
            Finblog
          </button>
          <img src="/logo.png" alt="Logo" className="h-auto w-[15%] ml-[47%]" />
          <div className="flex raw">
            <NavLink to="/finblog/finblog01" className="block">
              <div className="w-[760px]  h-[592px] bg-[url('/finblog01.png')] rounded-2xl bg-cover bg-center relative mt-10  ml-2 mr-4 filter brightness-90 contrast-100">
                <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-rosa to-transparent rounded-2xl ">
                  <h2 className="font-anybody text-white text-3xl font-bold text-left ml-8 mr-32 leading-[1.15] pb-2">
                    Cómo la Planificación Financiera Ayuda a Evitar el Estrés
                    Financiero y Alcanzar Metas a Largo Plazo.
                  </h2>
                  <p className="font-onest text-white text-lg font-medium text-left ml-8 mr-32">
                    En la vida, uno de los mayores retos es gestionar el dinero
                    de manera efectiva. Si bien todos deseamos alcanzar la
                    estabilidad financiera, no siempre sabemos cómo hacerlo de
                    forma organizada y con propósito.
                  </p>
                  <svg
                    className="absolute right-0 bottom-0"
                    width="85"
                    height="85"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_194_475)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.4584 66.5416C24.8346 72.9179 33.4826 76.5 42.5 76.5C51.5174 76.5 60.1654 72.9179 66.5416 66.5416C72.9179 60.1654 76.5 51.5174 76.5 42.5C76.5 33.4826 72.9179 24.8346 66.5416 18.4584C60.1654 12.0821 51.5174 8.50001 42.5 8.50001C33.4826 8.50001 24.8346 12.0821 18.4584 18.4584C12.0821 24.8346 8.5 33.4826 8.5 42.5C8.5 51.5174 12.0821 60.1654 18.4584 66.5416ZM55.765 51.5156V33.4844C55.7648 32.3574 55.317 31.2767 54.5202 30.4798C53.7233 29.683 52.6426 29.2352 51.5156 29.235H33.4844C32.3702 29.2544 31.3081 29.7106 30.527 30.5054C29.7459 31.3002 29.3082 32.37 29.3082 33.4844C29.3082 34.5988 29.7459 35.6686 30.527 36.4634C31.3081 37.2582 32.3702 37.7144 33.4844 37.7338H41.2558L30.4792 48.5104C29.6822 49.3074 29.2344 50.3884 29.2344 51.5156C29.2344 52.6428 29.6822 53.7238 30.4792 54.5208C31.2762 55.3179 32.3572 55.7656 33.4844 55.7656C34.6116 55.7656 35.6926 55.3179 36.4896 54.5208L47.2663 43.7442V51.5156C47.2856 52.6298 47.7418 53.6919 48.5366 54.473C49.3314 55.2541 50.4012 55.6918 51.5156 55.6918C52.63 55.6918 53.6998 55.2541 54.4946 54.473C55.2894 53.6919 55.7456 52.6298 55.765 51.5156Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_194_475">
                        <rect width="85" height="85" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </NavLink>

            <div className="flex flex-col">
              <NavLink to="/finblog/finblog02" className="block">
                <div className="w-[398px]  h-[291px] bg-[url('/finblog02.png')] rounded-2xl bg-cover bg-center relative mt-10 filter brightness-90 contrast-100">
                  <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-blue-500 to-transparent rounded-2xl ">
                    <h2 className="font-anybody text-white text-xl font-semibold text-left ml-8 mr-36 leading-[1.15] pb-2">
                      Cómo la Planificación Financiera Ayuda a Evitar el Estrés
                      Financiero y Alcanzar Metas a Largo Plazo.
                    </h2>
                    <p className="font-onest text-white text-sm font-medium text-left ml-8 mr-32">
                      El estrés financiero es una de las principales
                      preocupaciones de muchas personas.
                    </p>
                  </div>
                  <svg
                    className="absolute right-0 bottom-0"
                    width="85"
                    height="85"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_194_475)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.4584 66.5416C24.8346 72.9179 33.4826 76.5 42.5 76.5C51.5174 76.5 60.1654 72.9179 66.5416 66.5416C72.9179 60.1654 76.5 51.5174 76.5 42.5C76.5 33.4826 72.9179 24.8346 66.5416 18.4584C60.1654 12.0821 51.5174 8.50001 42.5 8.50001C33.4826 8.50001 24.8346 12.0821 18.4584 18.4584C12.0821 24.8346 8.5 33.4826 8.5 42.5C8.5 51.5174 12.0821 60.1654 18.4584 66.5416ZM55.765 51.5156V33.4844C55.7648 32.3574 55.317 31.2767 54.5202 30.4798C53.7233 29.683 52.6426 29.2352 51.5156 29.235H33.4844C32.3702 29.2544 31.3081 29.7106 30.527 30.5054C29.7459 31.3002 29.3082 32.37 29.3082 33.4844C29.3082 34.5988 29.7459 35.6686 30.527 36.4634C31.3081 37.2582 32.3702 37.7144 33.4844 37.7338H41.2558L30.4792 48.5104C29.6822 49.3074 29.2344 50.3884 29.2344 51.5156C29.2344 52.6428 29.6822 53.7238 30.4792 54.5208C31.2762 55.3179 32.3572 55.7656 33.4844 55.7656C34.6116 55.7656 35.6926 55.3179 36.4896 54.5208L47.2663 43.7442V51.5156C47.2856 52.6298 47.7418 53.6919 48.5366 54.473C49.3314 55.2541 50.4012 55.6918 51.5156 55.6918C52.63 55.6918 53.6998 55.2541 54.4946 54.473C55.2894 53.6919 55.7456 52.6298 55.765 51.5156Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_194_475">
                        <rect width="85" height="85" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </NavLink>

              <NavLink to="/finblog/finblog03" className="block">
                <div className="w-[398px]  h-[291px] bg-[url('/finblog03.png')] rounded-2xl bg-cover bg-center relative mt-3 filter brightness-90 contrast-100">
                  <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-verde to-transparent rounded-2xl ">
                    <h2 className="font-anybody text-white text-xl font-semibold text-left ml-8 mr-40 leading-[1.15] pb-2">
                      La Regla del 50/30/20: La Estrategia Simple para
                      Administrar tu Dinero
                    </h2>
                    <p className="font-onest text-white text-sm font-medium text-left ml-8 mr-32">
                      Si alguna vez te has sentido abrumado por cómo organizar
                      tus finanzas personales, no estás solo.
                    </p>
                  </div>
                  <svg
                    className="absolute right-0 bottom-0"
                    width="85"
                    height="85"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_194_475)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.4584 66.5416C24.8346 72.9179 33.4826 76.5 42.5 76.5C51.5174 76.5 60.1654 72.9179 66.5416 66.5416C72.9179 60.1654 76.5 51.5174 76.5 42.5C76.5 33.4826 72.9179 24.8346 66.5416 18.4584C60.1654 12.0821 51.5174 8.50001 42.5 8.50001C33.4826 8.50001 24.8346 12.0821 18.4584 18.4584C12.0821 24.8346 8.5 33.4826 8.5 42.5C8.5 51.5174 12.0821 60.1654 18.4584 66.5416ZM55.765 51.5156V33.4844C55.7648 32.3574 55.317 31.2767 54.5202 30.4798C53.7233 29.683 52.6426 29.2352 51.5156 29.235H33.4844C32.3702 29.2544 31.3081 29.7106 30.527 30.5054C29.7459 31.3002 29.3082 32.37 29.3082 33.4844C29.3082 34.5988 29.7459 35.6686 30.527 36.4634C31.3081 37.2582 32.3702 37.7144 33.4844 37.7338H41.2558L30.4792 48.5104C29.6822 49.3074 29.2344 50.3884 29.2344 51.5156C29.2344 52.6428 29.6822 53.7238 30.4792 54.5208C31.2762 55.3179 32.3572 55.7656 33.4844 55.7656C34.6116 55.7656 35.6926 55.3179 36.4896 54.5208L47.2663 43.7442V51.5156C47.2856 52.6298 47.7418 53.6919 48.5366 54.473C49.3314 55.2541 50.4012 55.6918 51.5156 55.6918C52.63 55.6918 53.6998 55.2541 54.4946 54.473C55.2894 53.6919 55.7456 52.6298 55.765 51.5156Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_194_475">
                        <rect width="85" height="85" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </NavLink>
            </div>
          </div>
          <h3 className="text-negro text-sm font-onest font-normal mt-4">
            Deslizar para ver más
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FinBlog;
