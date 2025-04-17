import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayout/MainLayouts";
import Home from "../../pages/home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Home></Home>,
            },

        ]
    },
]);