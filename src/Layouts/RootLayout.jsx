import { Outlet } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";


const RootLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default RootLayout;