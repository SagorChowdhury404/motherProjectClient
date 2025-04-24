import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from 'react-icons/fa';
import UseCart from '../../hooks/useCart/UseCart';
import { FaPaypal } from 'react-icons/fa6';

const DashboardLayout = () => {
  const [cart] = UseCart();

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'hover:bg-gray-200 text-gray-800'
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Responsive */}
      <div className="w-full md:w-64 bg-white shadow-lg">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-col p-4 gap-2 text-sm">
          <li>
            <NavLink to="/dashboard/userHome" className={navLinkClass}>
              <FaHome /> <span>User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className={navLinkClass}>
              <FaCalendar /> <span>Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className={navLinkClass}>
              <FaShoppingCart /> <span>My Cart ({cart.length})</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment" className={navLinkClass}>
              <FaPaypal /> <span>Payment history </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className={navLinkClass}>
              <FaAd /> <span>Add a Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings" className={navLinkClass}>
              <FaList /> <span>My Bookings</span>
            </NavLink>
          </li>

          <div className="col-span-2 border-t my-2 md:hidden" />
          <hr className="hidden md:block my-2" />

          <li>
            <NavLink to="/" className={navLinkClass}>
              <FaHome /> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={navLinkClass}>
              <FaSearch /> <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourShop" className={navLinkClass}>
              <FaSearch /> <span>Our Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              <FaSearch /> <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
