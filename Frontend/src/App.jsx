import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="font-sans bg-white ">
        <div className="text-center mt-12">
          {/* Mostrar el botón solo si NO estamos en la ruta '/about' */}
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

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
