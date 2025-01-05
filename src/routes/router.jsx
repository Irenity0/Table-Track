import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";

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
            }
        ]
    }
])

export default router;