import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>, 
        children: [
            {
                path: '/',
                element: <HomePage/>
            }
        ]
    }
])

export default router;