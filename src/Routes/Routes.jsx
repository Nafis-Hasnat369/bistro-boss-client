import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'menu', element: <Menu /> },
            { path: 'order/:category', element: <Order /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'secret', element: <PrivateRoutes><Secret /></PrivateRoutes> },
        ]
    },
    {
        path: "dashboard", element: <Dashboard />,
        children: [
            { path: "mycart", element: <MyCart /> }
        ]
    }
]);