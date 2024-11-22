import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const li = <>
        <Link to="/">Home</Link>
        <Link to="/learn">Start Learning</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/about-us">About Us</Link>
    </>
    return (
        <div className=' absolute left-0 right-0 top-3 z-10'>
            <div className='w-7/12 bg-white border  border-zinc-300 mx-auto mt-4 rounded-full px-2 sticky top-3'>
                <div className="navbar">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  gap-4 font-logo">
                                {li}
                            </ul>
                        </div>
                        <Link to="/" className='font-logo font-bold text-xl'>Vocab Point</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4 font-logo text-sm text-zinc-600">
                            {li}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="/login" className='px-4 py-2 bg-zinc-800 text-white font-logo rounded-full text-sm'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;