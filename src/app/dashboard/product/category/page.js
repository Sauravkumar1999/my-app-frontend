"use client"
import Breadcrum from '@/dashboard-components/Breadcrum'
import React from 'react'

const Page = () => {
    return (
        <>
            <Breadcrum />
            <div className="py-3 grid md:grid-cols-4 md:gap-6">
                <form className="mx-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative w-full py-2">
                        <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Title</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-4 py-2 text-center">Add</button>
                </form>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:col-span-3">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className='px-4 py-3'>S.no</th>
                                <th scope="col" className='px-4 py-3'>title</th>
                                <th scope="col" className='px-4 py-3'>price</th>
                                <th scope="col" className='px-4 py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index}</th>
                                            <td className='px-4 py-3'>{p.title}</td>
                                            <td className='px-4 py-3'>{p.price}</td>
                                            <td className='px-4 py-3'>{p.discountPercentage}</td>
                                            <td className='px-4 py-3'>{p.stock}</td>
                                            <td className='px-4 py-3'>{p.brand}</td>
                                            <td className='px-4 py-3'>{p.category}</td>
                                            <td className='px-4 py-3'>wrw</td>
                                            <td className='px-4 py-3'>
                                                <a href="#" className="font-medium text-xs text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Page