import { useState } from 'react'
import { Modal } from './Modal'
import { nameModal } from '../../config/nameModals'
import usePopups from '../../hooks/usePopups'
import { fetchLogin } from '../../service/login'

function SimpleInputIcon({ label, icon, placeholder, ...props }) {
  const setPlaceholder = placeholder || 'Input con icono'
  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <div className='relative mb-6'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
          {icon}
        </div>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5'
          placeholder={setPlaceholder}
          {...props}
        />
      </div>
    </div>
  )
}

export function Login() {
  const { LoadingModalID, LoginModalID, LoginContraModalID, RegisterModalID } =
    nameModal

  const { show, hide } = usePopups()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: 'prepend',
    })
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;
  //   console.log({ email, password });

  //   if (!email || !password) {
  //     console.error("Email y password son obligatorios");
  //   }

  //   show({
  //     popUpId: LoadingModalID,
  //     metadata: { id: LoadingModalID },
  //     pushMethod: "prepend",
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (!email || !password) {
      console.error('Campos obligatorios')
      return
    }

    show({ popUpId: LoadingModalID })

    try {
      const data = await fetchLogin(email, password)
      if (data) {
        // Cerrar todos los modales
        ;[LoginModalID, LoadingModalID].forEach((modalId) =>
          hide({ popUpId: modalId })
        )
        console.log('Login exitoso')
      }
    } catch (error) {
      console.error('Error:', error.message)
      // Mostrar error al usuario
    } finally {
      hide({ popUpId: LoadingModalID })
    }
  }

  const handleClose = () => {
    ;[
      LoginModalID,
      LoginContraModalID,
      RegisterModalID,
      LoadingModalID,
    ].forEach((modalId) => {
      hide({
        popUpId: modalId,
        metadataId: modalId,
      })
    })
  }
  return (
    <Modal id={LoginModalID}>
      <form className='space-y-6'>
        <div className='container flex flex-col px-24 py-24 mx-1 bg-white shadow-lg rounded-3xl'>
          <button
            className='absolute text-2xl font-black text-gray-800 top-12 right-12'
            onClick={handleClose}
          >
            ✕
          </button>
          <h1 className='relative text-4xl font-semibold text-center -bottom-4 font-anybody'>
            Iniciar Sesión
          </h1>

          <SimpleInputIcon
            id='email'
            type='email'
            label={
              <span className='relative left-0 text-lg font-normal text-justify text-black  -bottom-16 font-onest'>
                Correo electrónico
              </span>
            }
            placeholder='ejemplo@hotmail.com'
            pattern='^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$'
            title='Por favor, ingresa un correo electrónico válido.'
            className=' bg-white border relative -bottom-16  font-onest font-light text-lg text-black block w-full p-2.5 pr-10 truncate rounded-lg'
          />

          <div className='flex flex-col mb-6'>
            <label className=' relative -bottom-[4.5rem] left-0 text-lg font-normal font-onest text-justify text-black '>
              Contraseña
            </label>

            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='relative -bottom-20 bg-white border text-gray-900 text-lg rounded-lg block w-full p-2.5 pr-10 truncate'
                placeholder='••••••••••••••'
                required
              />
              <button
                type='button'
                className='h-full px-3 py-2  hover:bg-transparent'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='20'
                    viewBox='0 0 22 20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='relative  -bottom-9 left-80 icon icon-tabler icons-tabler-outline icon-tabler-eye'
                  >
                    <path
                      d='M11 3C6.522 3 2.732 5.943 1.457 10C2.732 14.057 6.522 17 11 17C15.478 17 19.268 14.057 20.543 10C19.268 5.943 15.478 3 11 3ZM11 7C9.343 7 8 8.343 8 10C8 11.657 9.343 13 11 13C12.657 13 14 11.657 14 10C14 8.343 12.657 7 11 7Z'
                      stroke='#1E1E1E'
                      strokeOpacity='0.5'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='20'
                    viewBox='0 0 22 20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='relative -bottom-9 left-80 icon icon-tabler icons-tabler-outline icon-tabler-eye-closed'
                  >
                    <path
                      d='M12.875 16.825C12.2569 16.9419 11.6291 17.0005 11 17C6.52203 17 2.73203 14.057 1.45703 10C1.8003 8.9081 2.32902 7.88346 3.02003 6.971M8.87803 7.879C9.44069 7.31634 10.2038 7.00025 10.9995 7.00025C11.7952 7.00025 12.5584 7.31634 13.121 7.879C13.6837 8.44166 13.9998 9.20478 13.9998 10.0005C13.9998 10.7962 13.6837 11.5593 13.121 12.122M8.87803 7.879L13.121 12.122M8.87803 7.879L13.12 12.12M13.121 12.122L16.412 15.412M8.88003 7.88L5.59003 4.59M5.59003 4.59L2.00003 1M5.59003 4.59C7.20239 3.54957 9.08113 2.9974 11 3C15.478 3 19.268 5.943 20.543 10C19.8391 12.2305 18.3774 14.1446 16.411 15.411M5.59003 4.59L16.411 15.411M16.411 15.411L20 19'
                      stroke='#1E1E1E'
                      strokeOpacity='0.5'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                )}
              </button>
            </div>
            <span
              className='relative text-xs font-semibold text-justify cursor-pointer top-12 font-onest text-verde'
              onClick={() => handleShowModal(LoginContraModalID)}
            >
              ¿Olvidaste tu contraseña?
            </span>
          </div>

          <button
            onClick={(event) => handleSubmit(event)}
            className='relative px-32 py-3 text-lg font-bold text-white transition duration-300 ease-in-out rounded-md  -bottom-12 font-onest bg-verde focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-verde focus:ring-verde'
          >
            Iniciar Sesión
          </button>

          <div className='flex items-center'>
            <hr className='relative flex-grow ml-10 -mb-40 border-gris2' />
            <label className='relative mx-2 -my-2 text-lg font-normal text-black -bottom-20 font-onest'>
              o
            </label>
            <hr className='relative flex-grow mr-10 -mb-40  border-gris2' />
          </div>
          <div className='flex items-center'>
            <button
              onClick={(event) => handleSubmit(event)}
              className='relative flex-grow px-32 py-6 text-lg font-normal transition duration-300 ease-in-out rounded-md  -bottom-28 font-onest text-gris bg-plomo focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-plomo focus:ring-plomo'
            >
              <img
                src='https://img.icons8.com/?size=512&id=17949&format=png'
                alt=''
                className='absolute w-5 h-5 bottom-3 left-20'
              />
              <span className='absolute flex-grow text-lg font-normal font-onest text-gris bottom-2 right-16 '>
                Inicia sesión con Google
              </span>
            </button>
          </div>
          <div className='mb-6 text-center'>
            <label className='relative text-sm font-normal text-center text-black -bottom-32 -left-16 font-onest'>
              ¿No tienes una cuenta?
            </label>
          </div>

          <div className='mb-6 text-center'>
            <label
              className='relative text-sm font-medium text-center text-black underline cursor-pointer -bottom-20 left-20 underline-offset-1 font-onest'
              onClick={() => handleShowModal(RegisterModalID)}
            >
              Crear cuenta
            </label>
          </div>
        </div>
      </form>
    </Modal>
  )
}
