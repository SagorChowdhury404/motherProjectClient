// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const { user, setUser } = useState('sagor')
    const navTittle = <>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 4</a></li>
        <li><a>Item 5</a></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-black shadow-sm bg-opacity-30 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-opacity-75 text-black  bg-slate-100 rounded-box z-1 mt-3 w-52 p-2 shadow-slate-300">
                        {
                            navTittle
                        }
                    </ul>
                </div>
                <a className="btn  text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navTittle
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-3">

                    {/* { */}
                    {/* user ? <> */}

                    {/* user profile  */}

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">


                            <div className="w-10 rounded-full">

                                <img src={''} alt="Tailwind CSS Navbar component" />;

                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">



                            <section className=''>
                                <div className='flex mx-auto'>
                                    <div tabIndex={0} role="button" className="  btn-circle avatar my-3 flex-1 bg-white text-xl ">


                                        <div className="w-10 rounded-full bg-white">

                                            <img src={''} alt="Tailwind CSS Navbar component" />



                                        </div>

                                    </div>
                                    <h1 className='text-black font-bold text-xl ml-1'>sagor chowdhury</h1>
                                </div>


                                <hr />
                                {/* user  */}
                                {/* <li>{ users}</li> */}
                                <li className='text-xl hover:bg-gray-400 font-bold'> <Link to='/MyApplication'><a>My Application</a></Link></li>
                                <hr />
                                <li className='text-xl font-semibold hover:bg-gray-400  '><a>Settings</a></li>


                                {/* logOut btn  */}
                                <li className="flex !justify-center mx-auto">
                                    <button className="my-4 w-full max-w-[200px] text-black font-semibold bg-red-500 text-xl py-2 mx-auto ">
                                        Logout
                                    </button>
                                </li>



                            </section>

                        </ul>
                    </div>

                    {/* </> : */}


                    <>
                        <Link to='/LoginPages'><button className="btn btn-soft bg-blue-600  text-white text-xl ">

                            Login
                        </button> </Link>
                        <hr />
                        {/* <ul><Link to='/Register'>Register</Link> </ul>  */}


                    </>
                    {/* } */}




                </div>
            </div>
        </div>
    );
};

export default Navbar;