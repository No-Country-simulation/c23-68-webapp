import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { nameModal } from '../../config/nameModals'
import usePopups from '../../hooks/usePopups'
import { fetchLogout } from '../../service/logout'
import profileImage from '../../assets/images/foto-perfil.png'
import { authStore } from '../../store/auth.store'

const Navbar = () => {
  const { user, isAuthenticated, logout } = authStore()
  const location = useLocation()
  const navigate = useNavigate()
  const { LoginModalID } = nameModal

  const { show } = usePopups()

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: 'prepend',
    })
  }

  const handleLogout = () => {
    fetchLogout(logout)
    navigate('/')
  }

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

              <span className='text-xl font-semibold font-onest text-negro'>
                {currentRoute?.name}
              </span>
            </>
          ) : (
            <span className='text-xl font-semibold font-onest text-negro'>
              {currentRoute?.name}
            </span>
          )}
        </h2>
      </div>

      {isAuthenticated ? (
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <img
              src={profileImage}
              alt='Foto de perfil'
              className='w-10 h-10 rounded-full'
            />
            <span className='font-onest'>{user?.name}</span>
          </div>
          <button
            onClick={handleLogout}
            className='px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600'
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button
          type='button'
          className='flex items-center justify-center px-6 py-3 text-lg text-white bg-green-500 rounded-full shadow-lg font-onest hover:bg-green-600'
          onClick={() => handleShowModal(LoginModalID)}
        >
          Iniciar Sesion
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Navbar
