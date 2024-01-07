import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'menu', element: <Menu /> },
            { path: 'order/salad', element: <Order /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ]
    },
]);