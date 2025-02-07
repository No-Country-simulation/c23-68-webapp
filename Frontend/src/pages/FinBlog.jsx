const FinBlog = () => {
  return (
    <div className='min-h-screen font-sans bg-white'>
      <div className='bg-white shadow-lg rounded-3xl border-b-8  border-r-8 border-l-2 border-t-2 border-black py-12 p-24 w-[89%] max-w-[1400px] my-16 mx-auto'>
        <div className='text-center'>
          <button className='py-2 text-xl font-normal border border-black rounded-full bg-amarilloclaro font-onest px-7 '>
            Finblog
          </button>
          <h2 className='py-4 mt-4 text-4xl font-semibold font-anybody'>
            Logo Finanzas
          </h2>

          {/*         <p className="max-w-4xl pt-1 mx-auto mt-4 text-base font-normal font-onest text-negro">
          En Logo Finanzas, estamos orgullosos de presentar al equipo que convirtió esta idea en realidad. Somos un grupo multidisciplinario de desarrolladores y diseñadores que compartimos una visión común: ayudarte a tomar el control de tus finanzas de manera sencilla y eficiente.
          Cada detalle, desde el diseño de la plataforma hasta las funcionalidades que utilizas, es el resultado del esfuerzo, la creatividad y la pasión de nuestro equipo. Conoce a las personas que hicieron esto posible y descubre cómo trabajamos para brindarte una experiencia única.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24 mt-5 mr-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          <div className="pt-6 pl-3 -mx-10 text-left shadow-md bg-verdesemioscuro rounded-2xl hover:shadow-verdesemioscuro my-7">
            <h3 className="ml-2 mr-24 text-2xl font-semibold leading-6  text-negro font-anybody">
              Registrar y organizar tus ingresos y gastos diarios
            </h3>
            <svg
              width="29"
              height="28"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute ml-56 -mt-36 "
            >
              <path
                d="M11.75 23.75V16.25C11.75 15.587 11.4866 14.9511 11.0178 14.4822C10.5489 14.0134 9.91304 13.75 9.25 13.75H6.75C6.08696 13.75 5.45107 14.0134 4.98223 14.4822C4.51339 14.9511 4.25 15.587 4.25 16.25V23.75C4.25 24.413 4.51339 25.0489 4.98223 25.5178C5.45107 25.9866 6.08696 26.25 6.75 26.25H9.25C9.91304 26.25 10.5489 25.9866 11.0178 25.5178C11.4866 25.0489 11.75 24.413 11.75 23.75ZM11.75 23.75V11.25C11.75 10.587 12.0134 9.95107 12.4822 9.48223C12.9511 9.01339 13.587 8.75 14.25 8.75H16.75C17.413 8.75 18.0489 9.01339 18.5178 9.48223C18.9866 9.95107 19.25 10.587 19.25 11.25V23.75M11.75 23.75C11.75 24.413 12.0134 25.0489 12.4822 25.5178C12.9511 25.9866 13.587 26.25 14.25 26.25H16.75C17.413 26.25 18.0489 25.9866 18.5178 25.5178C18.9866 25.0489 19.25 24.413 19.25 23.75M19.25 23.75V6.25C19.25 5.58696 19.5134 4.95107 19.9822 4.48223C20.4511 4.01339 21.087 3.75 21.75 3.75H24.25C24.913 3.75 25.5489 4.01339 26.0178 4.48223C26.4866 4.95107 26.75 5.58696 26.75 6.25V23.75C26.75 24.413 26.4866 25.0489 26.0178 25.5178C25.5489 25.9866 24.913 26.25 24.25 26.25H21.75C21.087 26.25 20.4511 25.9866 19.9822 25.5178C19.5134 25.0489 19.25 24.413 19.25 23.75Z"
                stroke="#1E1E1E"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="my-4 ml-2 mr-12 text-base font-normal leading-none font-onest text-negro">
              de forma rápida, eficiente y fácil, ayudándote a alcanzar tus
              metas financieras.
            </p>
          </div>
          <div className="pt-6 pb-2 pl-3 -mx-10 text-left shadow-md bg-amarillo rounded-2xl hover:shadow-amarillo my-7">
            <h3 className="ml-2 mr-24 text-2xl font-semibold leading-6  text-negro font-anybody">
              Analizar tus patrones de gasto
            </h3>

            <svg
              width="29"
              height="28"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute -mt-20 ml-56 "
            >
              <path
                d="M13 26.25H21.75C22.413 26.25 23.0489 25.9866 23.5178 25.5178C23.9866 25.0489 24.25 24.413 24.25 23.75V11.7675C24.2499 11.436 24.1182 11.1181 23.8838 10.8837L17.1163 4.11625C16.8819 3.88181 16.564 3.75007 16.2325 3.75H9.25C8.58696 3.75 7.95107 4.01339 7.48223 4.48223C7.01339 4.95107 6.75 5.58696 6.75 6.25V20M6.75 26.25L12.8487 20.1513M12.8487 20.1513C13.1959 20.5042 13.6095 20.7849 14.0656 20.9771C14.5218 21.1694 15.0115 21.2695 15.5065 21.2716C16.0015 21.2736 16.4921 21.1777 16.9498 20.9892C17.4076 20.8008 17.8235 20.5236 18.1736 20.1736C18.5236 19.8236 18.8009 19.4077 18.9895 18.95C19.1781 18.4923 19.2741 18.0018 19.2722 17.5068C19.2702 17.0117 19.1703 16.522 18.9781 16.0658C18.7859 15.6096 18.5053 15.196 18.1525 14.8487C17.4474 14.1549 16.4967 13.7677 15.5074 13.7716C14.5181 13.7755 13.5705 14.1702 12.8709 14.8696C12.1713 15.5691 11.7764 16.5166 11.7722 17.5059C11.7681 18.4951 12.155 19.446 12.8487 20.1513Z"
                stroke="#1E1E1E"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="mt-16 ml-2 mr-16 text-sm font-normal leading-tight font-onest text-negro">
              a través de gráficas interactivas, categorizadas y fáciles de
              interpretar.
            </p>
          </div>
          <div className="pt-6 pb-2 pl-3 my-6 -mx-10 text-left shadow-md bg-rosa rounded-2xl hover:shadow-rosa">
            <h3 className="ml-2 mr-24 text-2xl font-semibold leading-6  text-negro font-anybody">
              Establecer y monitorear objetivos de ahorro
            </h3>
            <svg
              width="29"
              height="28"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute -mt-32 ml-56"
            >
              <path
                d="M15.5 10C13.4288 10 11.75 11.1187 11.75 12.5C11.75 13.8813 13.4288 15 15.5 15C17.5712 15 19.25 16.1187 19.25 17.5C19.25 18.8813 17.5712 20 15.5 20M15.5 10V20M15.5 10C16.8875 10 18.1 10.5025 18.7487 11.25M15.5 10V8.75M15.5 20V21.25M15.5 20C14.1125 20 12.9 19.4975 12.2513 18.75M26.75 15C26.75 16.4774 26.459 17.9403 25.8936 19.3052C25.3283 20.6701 24.4996 21.9103 23.455 22.955C22.4103 23.9996 21.1701 24.8283 19.8052 25.3936C18.4403 25.959 16.9774 26.25 15.5 26.25C14.0226 26.25 12.5597 25.959 11.1948 25.3936C9.8299 24.8283 8.58971 23.9996 7.54505 22.955C6.50039 21.9103 5.67172 20.6701 5.10636 19.3052C4.54099 17.9403 4.25 16.4774 4.25 15C4.25 12.0163 5.43526 9.15483 7.54505 7.04505C9.65483 4.93526 12.5163 3.75 15.5 3.75C18.4837 3.75 21.3452 4.93526 23.455 7.04505C25.5647 9.15483 26.75 12.0163 26.75 15Z"
                stroke="#1E1E1E"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="ml-2 mr-16 text-sm font-normal leading-tight mt-11 font-onest text-negro">
              adaptados a tus metas, necesidades específicas y estilo de vida
              único.
            </p>
          </div>
          <div className="pt-6 pb-2 pl-3 my-6 -mx-10 text-left shadow-md bg-celeste rounded-2xl hover:shadow-celeste">
            <h3 className="ml-2 mr-24 text-2xl font-semibold leading-6  text-negro font-anybody">
              Consejos para mejorar tu gestión financiera
            </h3>
            <svg
              width="29"
              height="28"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute -mt-32 ml-56"
            >
              <path
                d="M12.5788 21.25H18.42M15.5 3.75V5M23.455 7.045L22.5712 7.92875M26.75 15H25.5M5.5 15H4.25M8.42875 7.92875L7.545 7.045M11.08 19.42C10.2061 18.5459 9.611 17.4322 9.36997 16.2199C9.12895 15.0075 9.25281 13.751 9.72591 12.609C10.199 11.4671 11.0001 10.4911 12.0279 9.80437C13.0556 9.11768 14.2639 8.75117 15.5 8.75117C16.7361 8.75117 17.9444 9.11768 18.9721 9.80437C19.9999 10.4911 20.801 11.4671 21.2741 12.609C21.7472 13.751 21.8711 15.0075 21.63 16.2199C21.389 17.4322 20.7939 18.5459 19.92 19.42L19.235 20.1038C18.8434 20.4954 18.5328 20.9604 18.3209 21.4722C18.109 21.9839 17.9999 22.5324 18 23.0862V23.75C18 24.413 17.7366 25.0489 17.2678 25.5178C16.7989 25.9866 16.163 26.25 15.5 26.25C14.837 26.25 14.2011 25.9866 13.7322 25.5178C13.2634 25.0489 13 24.413 13 23.75V23.0862C13 21.9675 12.555 20.8938 11.765 20.1038L11.08 19.42Z"
                stroke="#1E1E1E"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="mt-5 ml-2 mr-16 text-sm font-normal leading-tight font-onest text-negro">
              ayudándote a reducir gastos innecesarios y fomentar el ahorro.
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-5 -ml-8 gap-14">
          <div className="border-[0.5px] border-negro  rounded-3xl w-1/2 pt-5 pr-10 ">
            <h4 className="text-lg font-semibold text-right font-anybody text-negro">
              ¿Listo para tomar el control de tus finanzas?
            </h4>
            <p className="pl-32 mt-2 text-xs font-normal text-right font-onest text-grisclaro">
              En FinBlog encontrarás guías claras, consejos prácticos y
              herramientas para mejorar tu bienestar financiero. ¡Empieza a
              aprender hoy y da el primer paso hacia un futuro más seguro!
            </p>
            <svg
              width="33"
              height="27"
              viewBox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="relative bottom-10 left-10"
            >
              <path
                d="M13.3889 24.3889L2.5 13.5M2.5 13.5L13.3889 2.61114M2.5 13.5L30.5 13.5"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className=" border-[0.5px] border-negro  rounded-3xl w-1/2 pt-4 pl-10">
            <h4 className="pr-32 text-lg font-semibold text-left font-anybody text-negro">
              ¿Quieres saber quienes crearon esta increíble herramienta?
            </h4>
            <p className="pr-32 mt-2 text-xs font-normal text-left font-onest text-grisclaro">
              Descubre a los apasionados que la hicieron posible. ¡Conoce a
              nuestro equipo!
            </p>
            <svg
              width="33"
              height="27"
              viewBox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="relative bottom-14 -right-96 "
            >
              <path
                d="M19.6111 2.61108L30.5 13.5M30.5 13.5L19.6111 24.3889M30.5 13.5H2.5"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default FinBlog
