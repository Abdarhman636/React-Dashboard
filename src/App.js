import Home from './pages/home/Home.tsx';
import User from './pages/user/User.tsx';
import Products from './pages/products/Products.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import Menu from './components/menu/Menu.tsx';
import Footer from './components/footer/Footer.tsx';
import './styles/global.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContaner">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/products",
        element: <Products />
      },
    ]
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
