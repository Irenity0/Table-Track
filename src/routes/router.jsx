import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";

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
            }
        ]
    }
])

export default router;