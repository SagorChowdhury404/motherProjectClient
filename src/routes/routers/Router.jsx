import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayout/MainLayouts";
import Home from "../../pages/home/Home/Home";
import Menu from "../../pages/Menu/menu/Menu";
import OurShop from "../../pages/ourShop/OurShop";
import Contact from "../../pages/Contact/Contact";
import LoginPage from "../../pages/auth/loginPage/LoginPage";
import RegisterPage from "../../pages/auth/registationPage/RegisterPage";
import PrivetRouter from "../privetRouter/PrivetRouter";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Cart from "../../pages/dashboard/cart/Cart";
import AllUser from "../../dashboard/Alluser/Alluser";
import ManageItems from "../../dashboard/ManageItems/ManageItems";
import AdminHome from "../../dashboard/AdminHome/AdminHome";
import AddItem from "../../dashboard/AddITEMS/AddItem";
import ManageBooking from "../../dashboard/manageBooking/ManageBooking";
import UserHome from "../../dashboard/UserDashboard/userHome/UserHome";
import Payment from "../../dashboard/UserDashboard/payment/Payment";
import Review from "../../dashboard/UserDashboard/review/Review";
import Bookings from "../../dashboard/UserDashboard/bookings/Bookings";
import AdminRoutes from "../adminRoutes/AdminRoutes";
import UpdateItems from "../../dashboard/updateItems/UpdateItems";
import PaymentHistory from "../../dashboard/UserDashboard/paymentHistory/PaymentHistory";

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


        ]
    },
    //////////// todo for Admin dashboard/////////////////
    {
        path: "/dashboard",
        element: <PrivetRouter>
            <DashboardLayout ></DashboardLayout>
        </PrivetRouter>,
        children: [
            {
                path: 'AdminHome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: 'addItems',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>,
            },
            {
                path: 'updateItems/:id',
                element: <AdminRoutes><UpdateItems /></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/updateItems/${params.id}`),
            
            }
            ,
            {
                path: 'manageBooking',
                element: <AdminRoutes><ManageBooking></ManageBooking></AdminRoutes>
            },

            {
                path: 'allUser',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },

            //////////// todo for user dashboard/////////////////

            //UseCart ,userHome ,reservation ,cart,payment,review,bookings
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            {
                path: 'bookings',
                element: <Bookings></Bookings>
            },
        ]
    }
]);