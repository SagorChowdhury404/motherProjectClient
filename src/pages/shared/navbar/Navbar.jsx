import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaCartPlus } from "react-icons/fa6";
import UseCart from '../../../hooks/useCart/UseCart';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogout = () => {
    console.log('logout')
    logOut()
      .then(() => {
        console.log("User logged out");
        // Optionally redirect or toast
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  };


  const navLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/ourShop">Our Shop</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      {/* <li ><a className=""> <Link to='/dashboard'> Dashboard  </Link> </a></li> */}
    </>
  );

  return (
    <div className=" w-full z-50 shadow-md bg-black bg-opacity-35 text-white">

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="navbar py-2">

          {/* Navbar Start (Logo + Dropdown for Mobile) */}
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52 z-10">
                {navLinks}
              </ul>
            </div>
            <Link
              to="/"
              className="hidden md:inline-block btn bg-yellow-400 text-black text-xl normal-case"
            >
              Social Tourist Restaurant
            </Link>

          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              {navLinks}
            </ul>
          </div>

          {/* Navbar End (Auth Buttons) */}
          <div className="navbar-end flex items-center gap-3">
            <Link to='/dashboard/cart'>
              <button className="btn bg-white text-black">
                <FaCartPlus /> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
              </button>
            </Link>
            {user ? (
              <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'} alt="User Avatar" />
                  </div>
                </button>
                <ul className="menu menu-sm dropdown-content mt-3 p-3 bg-white shadow rounded-box w-64 z-20">
                  <div className="flex items-center gap-3 mb-2 border-b pb-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'} alt="User Avatar" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-black">{user?.displayName || 'User'}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <li><a className="text-black">Profile</a></li>
                  <li ><a className="text-black"> <Link to='/dashboard'> Dashboard  </Link> </a></li>
                  <li><a className="text-black">Settings</a></li>

                  <li className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 text-center">
                    <button
                      onClick={handleLogout}

                    >
                      Logout
                    </button>
                  </li>


                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
