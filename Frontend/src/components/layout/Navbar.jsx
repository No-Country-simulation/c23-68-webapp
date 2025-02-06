import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { nameModal } from '../../config/nameModals'
import usePopups from '../../hooks/usePopups'

const Navbar = () => {
  const location = useLocation()

  const routes = [
    { path: '/', name: '' },
    { path: '/about', name: 'Acerca de' },
    { path: '/team', name: 'Equipo' },
    { path: '/finblog', name: 'FinBlog' },
    { path: '/datos', name: 'Datos' },
    { path: '/datos/ingresos', name: 'Ingresos', parent: '/datos' },
    { path: '/datos/gastos', name: 'Gastos', parent: '/datos' },
    { path: '/dashboard', name: 'Dashboard' },
  ]

  const currentRoute = routes.find((route) => route.path === location.pathname)
  const parentRoute = routes.find(
    (route) => route.path === currentRoute?.parent
  )

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

  return (
    <div className='flex items-center justify-between px-8 mt-4 mb-4 w-100'>
      <h1>
        <NavLink to='/'>
          <img
            src='/images/logo.png'
            alt='Logo'
            className='h-auto w-auto ml-[50%] my-4'
          />
        </NavLink>
      </h1>
      <div className='flex text-left gap-4 -ml-[33%]'>
        <h2>
          {parentRoute ? (
            <>
              <NavLink
                to={parentRoute.path}
                className='text-xl font-semibold font-onest text-gris4 hover:text-negro'
              >
                {parentRoute.name} &gt;{' '}
              </NavLink>

              <span className='text-xl font-semibold  font-onest text-negro'>
                {currentRoute?.name}
              </span>
            </>
          ) : (
            <span className='text-xl font-semibold  font-onest text-negro'>
              {currentRoute?.name}
            </span>
          )}
        </h2>
      </div>

      <button
        type='button'
        className='flex items-center justify-center px-6 py-3 text-lg text-white bg-green-500 rounded-full shadow-lg font-onest hover:bg-green-600'
        onClick={() => handleShowModal(LoginModalID)}
      >
        Iniciar Sesión
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='size-6'
        >
          <path
            fillRule='evenodd'
            d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
          />
        </svg>
      </button>
    </div>
  )
}

export default Navbar
