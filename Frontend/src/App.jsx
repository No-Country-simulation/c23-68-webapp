import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import FinBlog from "./pages/FinBlog";
import Dashboard from "./pages/Dashboard";
import Datos from "./pages/Datos";
import Ingresos from "./pages/Ingresos";
import Gastos from "./pages/Gastos";

const PrivateLayout = ({ children }) => (
  <div className="flex min-h-screen">
    <SideBar />
    <main className="flex-1  ">{children}</main>
  </div>
);

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/team", element: <Team /> },
      { path: "/finblog", element: <FinBlog /> },
      {
        path: "/dashboard",
        element: (
          <PrivateLayout>
            <Dashboard />
          </PrivateLayout>
        ),
      },
      {
        path: "/datos",
        element: (
          <PrivateLayout>
            <Datos />
          </PrivateLayout>
        ),
      },
      {
        path: "/datos/ingresos",
        element: (
          <PrivateLayout>
            <Ingresos />
          </PrivateLayout>
        ),
      },
      {
        path: "/datos/gastos",
        element: (
          <PrivateLayout>
            <Gastos />
          </PrivateLayout>
        ),
      },
    ]);

    return routes;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
