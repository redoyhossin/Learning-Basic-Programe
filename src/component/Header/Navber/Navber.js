import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'
const Navber = () => {
    return (
        <div className='mx-8'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52">
                            <li className='text-xl text-pink-600 font-semibold'>
                                <Link to="">Home</Link>
                            </li>
                            <li className='text-xl text-pink-600 font-semibold' tabIndex={0}>

                                <Link to="">Home</Link>
                            </li>
                            <li className='text-xl text-pink-600 font-semibold'>
                                <Link to="">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-2xl text-pink-600 font-bold sm:text-center whitespace-nowrap ">
                        <h1>Learning Basic Programe</h1>
                    </div>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-xl text-pink-600 font-semibold'>
                            <Link to="">Home</Link>
                        </li>

                        <li className='text-xl text-pink-600 font-semibold' tabIndex={0}>
                            <Link to=""></Link>

                        </li>

                        <li className='text-xl text-pink-600 font-semibold'>

                            <Link to="">Home</Link>

                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navber;