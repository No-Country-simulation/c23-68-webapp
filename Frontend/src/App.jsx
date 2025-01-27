import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD

function App() {


  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
    
=======
import About from "./pages/About";


function App() {
 
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
>>>>>>> 6223b6e7dc9177ba1ad27db13b025f25bbcd0ad3
    ]);
    return routes;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

<<<<<<< HEAD
       
=======
      
>>>>>>> 6223b6e7dc9177ba1ad27db13b025f25bbcd0ad3
    </>
  );
}

export default App;
