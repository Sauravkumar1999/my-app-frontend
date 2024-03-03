import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className='flex justify-center pt-10'>
            <div className='w-full max-w-3xl space-y-4 p-2 bg-white border border-gray-200 rounded-sm  sm:p-6'>
                <ol className="flex items-center justify-between w-full space-x-2 text-sm font-medium text-center text-gray-500 ">
                    <li className="flex items-center text-blue-600 dark:text-blue-500">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                            1
                        </span>
                        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            2
                        </span>
                        Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            3
                        </span>
                        Review
                    </li>
                </ol>
                <div className="grid grid-cols-12">
                    <div className='md:col-span-6 col-span-12 hidden md:block'>
                        <img src='/register1.png' className='w-full h-full' />
                    </div>
                    <form className="space-y-2 md:space-y-5 md:col-span-6 col-span-12" action="#">
                        <h5 className="text-md md:text-2xl  font-semibold text-gray-900">Sign Up to view your profile</h5>
                        <div>
                            <label htmlhtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-pink-50 border border-pink-300 text-gray-900 text-sm rounded-sm focus:ring-pink-500 focus:ring-0 focus:outline-none focus:border-pink-500 block w-full p-2.5" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlhtmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-pink-50 border border-pink-300 text-gray-900 text-sm rounded-sm focus:ring-pink-500 focus:ring-0 focus:outline-none focus:border-pink-500 block w-full p-2.5" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50  focus:ring-1 focus:ring-pink-300 " required />
                                </div>
                                <label htmlhtmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-gray-700 hover:underline ">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <Link href="/auth/login" className="text-pink-700 hover:underline "> All ready have account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page