import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import { useEffect, useState } from 'react'
import useAuthStore from '../store/useAuth.store'
import { Modal } from '../components/modals/Modal'
import { Login } from '../components/modals/Login'
import usePopups from '../hooks/usePopups'
import { nameModal } from '../config/nameModals'

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()

  const { LoginModalID } = nameModal
  const { show } = usePopups()

  const handleDashboardClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard')
    } else {
      show({ popUpId: LoginModalID }) // Muestra el modal usando tu sistema
    }
  }

  useEffect(() => {
    if (isLoggedIn && showLogin) {
      setShowLogin(false)
      navigate('/dashboard')
    }
  }, [isLoggedIn, showLogin, navigate])

  return (
    <div className='bg-white h-100 w-100'>
      <section className='flex flex-col items-center justify-between px-8 py-10 md:flex-row'>
        <div className='self-start space-y-6 md:w-1/2'>
          <h1 className='text-4xl text-black md:text-6xl font-anybody'>
            Deja de <br />
            preocuparte por el <br />
            <span className='text-yellow-400'> dinero</span>.
            <br />
            ¡Empieza a <br />
            <span className='text-pink-500'> planificarlo</span> hoy <br />
            mismo!
          </h1>
          <div className='flex items-center mt-16'>
            <button
              className='flex items-center justify-center px-6 py-3 text-lg text-white bg-green-500 rounded-full shadow-lg font-onest hover:bg-green-600'
              onClick={handleDashboardClick}
            >
              Ver Panel
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6 ml-2'
              >
                <path
                  fillRule='evenodd'
                  d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>

            <button className='text-lg font-medium text-gray-700 cursor-pointer hover:underline font-onest ml-14'>
              Conócenos
            </button>
          </div>
        </div>

        <div className='grid w-1/2 grid-cols-2 grid-rows-2 gap-6 mt-8 md:mt-0'>
          <div className='grid max-w-full max-h-full grid-cols-1 col-span-2 grid-rows-2 row-span-1 p-6 overflow-hidden bg-center bg-cover shadow-md rounded-2xl about-bg'>
            <div>
              <button className='p-2 text-lg bg-white font-onest bg-opacity-70 rounded-2xl'>
                <NavLink to='/'>Acerca de</NavLink>
              </button>
              <p className='p-2 mt-2 text-white font-onest'>
                Logo Finanzas, creada para simplificar la gestión de tus
                finanzas personales y ayudarte a alcanzar tus metas.
              </p>
            </div>

            <div className='self-end w-1/2'>
              <p className='p-2 text-sm text-white text-start font-onest'>
                Creemos que la planificación financiera no tiene por qué ser
                complicada, por eso creamos herramientas prácticas que se
                adaptan a tus necesidades y objetivos.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 grid-rows-2 p-6 overflow-hidden bg-center bg-cover shadow-md rounded-2xl finblog-bg '>
            <div>
              <button className='px-6 py-2 text-lg transition-opacity bg-white font-onest bg-opacity-70 rounded-2xl hover:bg-opacity-90'>
                <NavLink to='/finblog'>Finblog</NavLink>
              </button>
              <p className='p-2 mt-2 text-white font-onest'>
                Consejos prácticos para gestionar tu dinero, ahorrar y alcanzar
                tus objetivos financieros
              </p>
            </div>

            <p className='self-end w-1/2 p-2 text-sm text-white font-onest text-start'>
              Descubre tips sencillos para gestionar tu dinero y lograr tus
              metas.
            </p>
          </div>

          <div className='flex flex-col items-start justify-between p-6 bg-pink-100 bg-center bg-cover shadow-md rounded-2xl team-bg'>
            <button className='p-2 text-lg bg-white font-onest bg-opacity-70 rounded-2xl'>
              <NavLink to='/team'>Equipo</NavLink>
            </button>
            <p className='font-semibold text-white font-onest text-8xl '>06</p>
            <p className='p-2 text-white font-onest'>
              Conoce al equipo que hace posible el sistema para planificar tus
              finanzas personales.
            </p>
          </div>
        </div>
      </section>
      {showLogin && (
        <Modal>
          <Login onClose={() => setShowLogin(false)} />
        </Modal>
      )}

      <footer className='w-1/2 p-8 '>
        <div className=' text-start'>
          <p className='mb-4 text-black-600 font-onest'>
            *Nuestro planificador de finanzas personales te ayuda a gestionar
            tus recursos y tomar decisiones inteligentes.
          </p>
          <div className='flex items-center justify-around'>
            <FaFacebook className='w-8 h-8 cursor-pointer text-black-600' />
            <FaTwitter className='w-8 h-8 cursor-pointer text-black-600' />
            <FaInstagram className='w-8 h-8 cursor-pointer text-black-600' />
            <FaTiktok className='w-8 h-8 cursor-pointer text-black-600' />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
