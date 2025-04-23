import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayout/MainLayouts";
import Home from "../../pages/home/Home/Home";
import Menu from "../../pages/Menu/menu/Menu";
import OurShop from "../../pages/ourShop/OurShop";
import Contact from "../../pages/Contact/Contact";
import LoginPage from "../../pages/auth/loginPage/LoginPage";
import RegisterPage from "../../pages/auth/registationPage/RegisterPage";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import PrivetRouter from "../privetRouter/PrivetRouter";

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
                element: <LoginPage ></LoginPage>,
            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>,
            },
            // Protected Route 
            {
                path: "/dashboard",
                element: <PrivetRouter>
                    <DashboardLayout ></DashboardLayout>
                </PrivetRouter>
            },

        ]
    },
]);