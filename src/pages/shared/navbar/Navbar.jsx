import { Link } from 'react-router-dom';

const Navbar = () => {

  const navTittle = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/ourShop">Our Shop</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </>
  );

  return (
    <div className="lg:fixed lg:top-0 lg:left-0 w-full z-50 shadow-sm text-white">
  <div className="max-w-screen-xl mx-auto px-2 bg-black bg-opacity-30">
        <div className="navbar ">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52 z-10"
              >
                {navTittle}
              </ul>
            </div>
            <Link className="btn bg-yellow-400 text-black text-xl">Social Tourist Restaurant</Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              {navTittle}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex gap-3">
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-white">
                  <img src={''} alt="profile" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 p-2 shadow w-52 z-10"
              >
                <div className="flex items-center p-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <h1 className="font-bold text-lg">Sagor Chowdhury</h1>
                </div>
                <hr />
                <li><Link className="text-lg font-semibold hover:bg-gray-200 p-2 rounded" to="/MyApplication">My Application</Link></li>
                <li><a className="text-lg font-semibold hover:bg-gray-200 p-2 rounded">Settings</a></li>
                <hr />
                <li className="flex justify-center">
                  <button className="my-3 w-full max-w-[200px] text-black font-semibold bg-red-500 text-lg py-2 rounded">Logout</button>
                </li>
              </ul>
            </div>

            {/* Login Button */}
            <Link to="/LoginPages">
              <button className="btn bg-blue-600 text-white text-lg">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
