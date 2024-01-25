import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => logout();
    const navOptions = <>
        <li className="text-lg"><Link to="/">Home</Link></li>
        <li className="text-lg"><Link to="/menu">Our Menu</Link></li>
        <li className="text-lg"><Link to="/order/salad">Order Food</Link></li>
        <li className="text-lg"><Link to="/secret">Secret</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                    <MdShoppingCart />
                    <div className="badge badge-secondary">{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></> :
                <><li className="text-lg"><Link to="/login">Login</Link></li></>
        }
    </>

    return (
        <div className="navbar max-w-screen-xl fixed z-10 bg-black opacity-60 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-orange-500 normal-case text-xl font-serif">BISTRO BOSS <br /> RESTAURANT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;