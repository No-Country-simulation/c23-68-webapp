import { useState } from 'react'
import { Modal } from './Modal'
import { nameModal } from '../../config/nameModals'
import usePopups from '../../hooks/usePopups'

// eslint-disable-next-line react/prop-types
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
  const { LoadingModalID, LoginModalID } = nameModal

  const { show, hide } = usePopups()
  const [showPassword, setShowPassword] = useState(false)

  const SVG = (
    <svg
      className='w-4 h-4'
      aria-hidden='true'
      fill='rgb(59 130 246)'
      viewBox='0 0 20 16'
    >
      <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
      <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
    </svg>
  )
  const handleSubmit = (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log({ email, password })

    // Añadir validaciones. que sean visibles en el formulario
    if (!email || !password) {
      console.error('Email y password son obligatorios')
    }

    show({
      popUpId: LoadingModalID,
      metadata: { id: LoadingModalID },
      pushMethod: 'prepend',
    })
  }

  const handleClose = () => {
    hide({
      popUpId: LoginModalID,
      metadataId: LoginModalID,
    })
  }
  return (
    <Modal id={LoginModalID}>
      <form className='flex flex-col items-center justify-center'>
        <div className='relative flex flex-col w-full max-w-md p-6 bg-white shadow-lg rounded-2xl'>
          <button
            className='absolute w-full pr-10 text-xl text-right -translate-y-4'
            onClick={handleClose}
          >
            x
          </button>
          <h1 className='w-full text-2xl font-bold text-center'>
            Iniciar Sesión
          </h1>
          <p className='w-full my-2 text-sm text-center opacity-70'>
            ingresa tus credenciales para acceder a tu cuenta
          </p>
          <SimpleInputIcon
            id='email'
            type='email'
            label='Correo Electrónico'
            icon={SVG}
            placeholder='jhon.doe@gmail.com'
            pattern='^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$'
            title='Por favor, ingresa un correo electrónico válido.'
          />
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Contraseña
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 truncate'
                placeholder='•••••••••'
                required
              />
              <button
                type='button'
                className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-eye'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                    <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-eye-closed'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4' />
                    <path d='M3 15l2.5 -3.8' />
                    <path d='M21 14.976l-2.492 -3.776' />
                    <path d='M9 17l.5 -4' />
                    <path d='M15 17l-.5 -4' />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            onClick={(event) => handleSubmit(event)}
            className='px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-600 focus:ring-blue-500'
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </Modal>
  )
}
