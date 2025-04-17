import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayout/MainLayouts";
import Home from "../../pages/home/Home/Home";
import Menu from "../../pages/Menu/menu/Menu";
import OurShop from "../../pages/ourShop/OurShop";
import Contact from "../../pages/Contact/Contact";

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
                path: "/Menu",
                element: <Menu></Menu>,
            },
            {
                path: "/ourShop",
                element: <OurShop></OurShop>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
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