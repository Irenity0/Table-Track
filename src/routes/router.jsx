import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import HomeBanner from "../Sections/HomeBanner";
import PrivateRoute from "./privateRoute";
import Dashboard from "../Layouts/Dashboard";
import DashboardCart from "../Pages/DashboardCart";
import DashboardAllUsers from "../Pages/DashboardAllUsers";
import DashboardAddItems from "../Pages/DashboardAddItems";
import AdminRoute from "./AdminRoutes";
import DashboardManageItems from "../Pages/DashboardManageItems";
import DashboardUpdateItem from "../Pages/DashboardUpdateItem";
import PaymentPage from "../Pages/PaymentPage";
import PaymentHistory from "../Pages/PaymentHistory";
import DashboardAdminHome from "../Pages/DashboardAdminHome";
import DashboardUserHome from "../Pages/DashboardUserHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>, 
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/menu',
                element: <MenuPage/>
            },
            {
                path: '/shop/:category',
                element: <ShopPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            }, 
            {
                path: '/register',
                element: <RegisterPage/>
            }, 
            {
                path: 'secret',
                element: <PrivateRoute><HomeBanner/></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <PrivateRoute><DashboardUserHome/></PrivateRoute>
            },
            {
                path: "cart",
                element: <PrivateRoute><DashboardCart/></PrivateRoute>
            },
            {
                path: 'payment',
                element: <PrivateRoute><PaymentPage/></PrivateRoute>   
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory/>
            },
            // admin routes
            {
                path: 'adminHome',
                element: <AdminRoute><DashboardAdminHome/></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><DashboardAllUsers/> </AdminRoute>
            }, 
            {
                path: 'addItems',
                element: <AdminRoute><DashboardAddItems/></AdminRoute>
            }, 
            {
                path: 'manageItems',
                element: <AdminRoute><DashboardManageItems/></AdminRoute>
            }, 
            {
                path: 'updateItem/:id',
                element: <AdminRoute><DashboardUpdateItem/></AdminRoute>,
                loader: ({params}) => fetch(`https://table-track-server.vercel.app/menu/${params.id}`)
            }
        ]
    }
])

export default router;