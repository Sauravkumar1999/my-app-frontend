"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
   const router = useRouter();
   const formSubmit = (e) => {
      e.preventDefault();
      const user = {
         name: 'saurav kumar',
         email: 'saurav@gmail.com',
      };
      localStorage.setItem('user__login', JSON.stringify(user));
      alert('login success');
      router.push('/');
   }
   return (
      <div className='flex justify-center pt-10'>
         <div className='mh:w-full w-5/6 max-w-3xl space-y-4 p-2 bg-white border border-gray-200 rounded-sm  sm:p-6'>
            <div className="grid grid-cols-12 space-x-4">
               <div className='md:col-span-6 col-span-12 hidden md:block'>
                  <img src='/login.png' className='w-full h-full' alt='imgage name' />
               </div>
               <form className="space-y-2 md:space-y-5 md:col-span-6 col-span-12" onSubmit={formSubmit}>
                  <h5 className="text-md md:text-2xl  font-semibold text-gray-900">Sign Up to view your profile</h5>
                  <div className="flex items-center">
                     <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border-b-2 border-pink-300 focus:ring-0 focus:outline-none" type="button">
                        IN +91
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                     </button>
                     <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                           <li>
                              <button type="button" className="inline-flex w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                 <div className="inline-flex items-center">(+91)</div>
                              </button>
                           </li>
                        </ul>
                     </div>
                     <div className="relative w-full">
                        <input type="phone" id="phone-input" className="block p-2.5 w-full z-20 text-sm text-gray-900 border-b-2 border-pink-300 focus:ring-0 focus:outline-none" placeholder="Phone Number" required />
                     </div>
                  </div>
                  {/* focus:ring-pink-500 focus:ring-0 focus:outline-none focus:border-pink-500 */}
                  <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">Continue</button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                     Not registered?
                     <Link href="/auth/register" className="text-pink-700 hover:underline "> Create a new account</Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Page