import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
      logOut()
      .then(()=>{})
      .catch(error => console.log(error))
    }

    const navOptions = <>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li><Link to={'/menu'}>Our Menu</Link></li>
                <li><Link to={'/shop/salad'}>Our Shop</Link></li>
                {
                  user && isAdmin && <li><Link to={'/dashboard/adminHome'}>Dashboard</Link></li>
                }
                {
                  user && !isAdmin && <li><Link to={'/dashboard/userHome'}>Dashboard</Link></li>
                }
                <li>
                  <Link to={'/dashboard/cart'}>
                    <button className="btn btn-xs">
                    <FaShoppingCart /> 
                      <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                  </Link>
                </li>
                
                {
                  user ? <>
                  <button onClick={handleLogOut} className="btn btn-sm btn-ghost">Log Out</button>
                  </> 
                  
                  : <>
                  
                  <li><Link to={'/login'}>Sign In</Link></li>
                  <li><Link to={'/register'}>Sign Up</Link></li>
                  </>
                }
    </>

    return (
        <>
        <div className="navbar text-white fixed z-10 bg-base-100/30">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navOptions}
              </ul>
            </div>
            <a className="text-xl">Table Track</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navOptions}
            </ul>
          </div>
        </div>
        </>
    );
};

export default Navbar;