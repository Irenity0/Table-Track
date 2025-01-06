import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";


const RootLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <>
        { noHeaderFooter || <Navbar/>}
        <Outlet/>
        { noHeaderFooter || <Footer/>}
        </>
    );
};

export default RootLayout;