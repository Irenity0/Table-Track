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
                path: "cart",
                element: <PrivateRoute><DashboardCart/></PrivateRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><DashboardAllUsers/> </AdminRoute>
            }, 
            {
                path: 'addItems',
                element: <AdminRoute><DashboardAddItems/></AdminRoute>
            }
        ]
    }
])

export default router;