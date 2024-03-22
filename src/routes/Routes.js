import { createBrowserRouter } from "react-router-dom"
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import DashboardLayout from "../Layouts/DashboardLayout";

import AllUsers from "../Pages/Dashboard/AllUsers";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor";
import AdminRoute from "./AdminRoutes";
import PrivateRoute from "./PrivateRoutes";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Payment from "../Pages/Dashboard/Payment";
import DisplayError from "../Pages/Shared/DisplayError";
import Reviews from "../Pages/Reviews/Reviews";
import Contact from "../Pages/Contact/Contact";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://doctors-portal-server-ten-iota.vercel.app/bookings/${params.id}`),
                element: <Payment />
            },
        ]
    }
])