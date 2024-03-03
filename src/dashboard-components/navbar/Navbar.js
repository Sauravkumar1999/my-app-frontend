/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'

const Navbar = ({ gethumberg }) => {
    const [childData, setChildData] = useState(false);

    const handleChange = (e) => {
        setChildData(!childData);
        gethumberg(childData);
    };
    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-4 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <a href="/dashboard" className="hidden ms-2 md:me-24">
                            <img src="/meesho.svg" className="h-8 me-3 hidden md:block" alt="FlowBite Logo" />
                        </a>
                        <button type="button" onClick={handleChange} className="p-1 me-8 text-sm text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        {/* <div className="relative hidden md:block md:w-auto">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" className="w-full p-1 py-1 ps-10 text-md text-gray-900 border border-gray-300 rounded-sm bg-white focus:ring-0 focus:border-gray-400 focus:outline-none" placeholder="Search..." />
                        </div> */}
                    </div>
                    <div className="flex items-center space-x-4">
                        <FullScreen />
                        <CornerProfile />
                    </div>
                </div>
            </div>
        </nav>
    )
}

const FullScreen = () => {
    const [isActive, setisActive] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };
    return (
        <a className='cursor-pointer hidden md:block' onClick={toggleFullscreen} onMouseEnter={() => setisActive(!isActive)} onMouseLeave={() => setisActive(!isActive)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={isActive ? "M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" : "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"} />
            </svg>
        </a>
    )
}
const CornerProfile = () => {
    const [isActive, setisActive] = useState(false);
    return (
        <div className="relative">
            <button type="button" onClick={() => setisActive(!isActive)} className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 ">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
            </button>
            <div className={`z-50 absolute right-0 text-base  list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${isActive ? 'block' : 'hidden'}`}>
                <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                        Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        neil.sims@flowbite.com
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar