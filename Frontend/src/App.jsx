import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
 
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ]);
    return routes;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

      
    </>
  );
}

export default App;
