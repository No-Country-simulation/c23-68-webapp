import Navbar from './components/layout/Navbar'
import { Navigate, useRoutes } from 'react-router-dom'
import SideBar from './components/layout/SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import FinBlog from './pages/FinBlog'
import Dashboard from './pages/Dashboard'
import Datos from './pages/Datos'
import Ingresos from './pages/Ingresos'
import Gastos from './pages/Gastos'
import Savings from './pages/Savings'
import FinBlog01 from './pages/FinBlog01'
import FinBlog02 from './pages/FinBlog02'
import FinBlog03 from './pages/FinBlog03'
import FinBlog04 from './pages/FinBlog04'
import Configuracion from './pages/Configuracion'
import { authStore } from './store/auth.store'

// eslint-disable-next-line react/prop-types
const PrivateLayout = ({ children }) => {
  const { isAuthenticated } = authStore()
  return isAuthenticated ? (
    <div className='flex min-h-screen'>
      <SideBar />
      <main className='flex-1 '>{children}</main>
    </div>
  ) : (
    <Navigate to='/' />
  )
}

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/team', element: <Team /> },
      { path: '/finblog', element: <FinBlog /> },
      { path: '/finblog/finblog01', element: <FinBlog01 /> },
      { path: '/finblog/finblog02', element: <FinBlog02 /> },
      { path: '/finblog/finblog03', element: <FinBlog03 /> },
      { path: '/finblog/finblog04', element: <FinBlog04 /> },
      {
        path: '/dashboard',
        element: (
          <PrivateLayout>
            <Dashboard />
          </PrivateLayout>
        ),
      },
      {
        path: '/configuracion',
        element: (
          <PrivateLayout>
            <Configuracion />
          </PrivateLayout>
        ),
      },

      {
        path: '/datos',
        element: (
          <PrivateLayout>
            <Datos />
          </PrivateLayout>
        ),
      },
      {
        path: '/datos/ingresos',
        element: (
          <PrivateLayout>
            <Ingresos />
          </PrivateLayout>
        ),
      },
      {
        path: '/datos/gastos',
        element: (
          <PrivateLayout>
            <Gastos />
          </PrivateLayout>
        ),
      },
      { path: '/about', element: <About /> },
      {
        path: '/savings',
        element: (
          <PrivateLayout>
            <Savings />
          </PrivateLayout>
        ),
      },
    ])
    return routes
  }

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  )
}

export default App
