
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import { nameModal } from './config/nameModals'
import usePopups from './hooks/usePopups'
import Home from './pages/Home'


function App() {
  return (

    <Router>
      <div className="font-sans bg-white ">
        <div className="text-center mt-12">
          <Routes>
            <Route
              path="/"
              element={
                <Link to="/about">
                  <button className="bg-green-300 px-4 py-2 rounded-full">
                    Acerca de
                  </button>
                </Link>
              }
            />
          </Routes>
        </div>

    <>

      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-xl text-orange-400'> Popus</h1>

      
      <Home />
      {/* <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-xl text-red-600'> Testing de modales</h1>

        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          //onClick={() => handleShowModal(LoadingModalID)}
          onClick={() => handleShowModal(LoginContraModalID)}
        >
          Show Login Contra Modal
        </button>
        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          onClick={() => handleShowModal(LoginModalID)}
        >
          Show Login Modal

        </button>
        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          onClick={() => handleShowModal(RegisterModalID)}
        >
          Show Register Modal
        </button>


        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </Router>
  );

        </button> 
      </div>  */}

    </>
  )

}

export default App;
