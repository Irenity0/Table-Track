import { BiWallet } from "react-icons/bi";
import { FaCalendar, FaHome, FaPhone } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <section className="flex">
            <div className="w-64 min-h-full bg-yellow-600/60 font-bold">
            <ul className="menu">
                <li><NavLink to={'/dashboard/cart'}> <FaHome/> User Home</NavLink></li>
                <li><NavLink to={'/dashboard/cart'}> <FaCalendar/> Reservations</NavLink></li>
                <li><NavLink to={'/dashboard/cart'}> <BiWallet/> Payment History</NavLink></li>
                <li><NavLink to={'/dashboard/cart'}>  <FaCartShopping/> My Cart  ({cart.length})</NavLink></li>
                <li><NavLink to={'/dashboard/cart'}>  <MdReviews/> Add Review</NavLink></li>
                <li><NavLink to={'/dashboard/cart'}> <FaHome></FaHome> My Booking</NavLink></li>
                <div className="divider"></div>
                <li><NavLink to={'/'}> <FaHome></FaHome> Home</NavLink></li>
                <li><NavLink to={'/menu'}> <MdMenu />  Menu</NavLink></li>
                <li><NavLink to={'/shop/salad'}> <FaCartShopping/> Shop</NavLink></li>
                <li><NavLink to={'/contact'}> <FaPhone/> Contact</NavLink></li>
            </ul>
        </div>
        <div className="flex-1 p-8">
            <Outlet/>
        </div>
        </section>
    );
};

export default Dashboard;