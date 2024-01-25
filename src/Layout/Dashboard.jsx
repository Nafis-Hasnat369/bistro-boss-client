import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaWallet } from "react-icons/fa6";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { MdMenu } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home" ><FaHome />User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations" ><FaCalendarAlt />Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history" ><FaWallet />Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart" ><FaCartShopping />My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"><MdMenu />Food Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;