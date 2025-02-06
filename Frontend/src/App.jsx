import Navbar from './components/layout/Navbar'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Savings from './pages/Savings'

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/savings', element: <Savings /> },
    ])
    return routes
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
