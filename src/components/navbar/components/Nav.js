"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Nav1 = () => {
   const [user, setUser] = useState(null);
   useEffect(() => {
      const storedUser = localStorage.getItem('user__login');
      if (storedUser) {
         setUser(JSON.parse(storedUser));
      }
   }, []);
   return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse py-3">
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flow bite</span>
            </Link>
            <div className="relative md:block md:w-auto">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
               </div>
               <input type="text" className="w-full p-2 ps-10 text-md text-gray-900 border border-gray-300 rounded-sm bg-white focus:ring-0 focus:border-pink-400 focus:outline-none" placeholder="Try Saree, Kurti or Search by Product Code" />
            </div>
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
               <span className="sr-only">Open main menu</span>
               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
               </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto z-10">
               <ul className="font-normal flex flex-col border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white">
                  <li className='py-4 flex hover:border-b-2 hover:border-pink-700 hover:pb-2 relative group'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        Download App
                     </a>
                     <div className="z-10 hidden bg-white rounded-sm shadow w-44 absolute mt-10 group-hover:block p-3">
                        <div className='text-lg font-medium'>Download From</div>
                        <div className='py-4'><a href="#"><img src='/playstore.png' className='w-full' /></a></div>
                        <div><a href="#"><img src='/playstore.png' className='w-full' /></a></div>
                     </div>
                     <div className="h-full border-r-2 border-gray-400 px-2"></div>
                  </li>
                  <li className='py-4 flex'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">Become a Supplier</a>
                     <div className="h-full border-r-2 border-gray-400 px-2"></div>
                  </li>
                  <li className='py-4 flex'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">Newsroom</a>
                     <div className="h-full border-r-2 border-gray-400 px-2"></div>
                  </li>
                  <li className='py-4 flex hover:border-b-2 hover:border-pink-700 hover:pb-2 group'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Profile
                     </a>
                     <div className="z-10 hidden p-2 text-base w-44 list-none bg-white divide-y divide-gray-100 rounded-sm shadow  absolute mt-10 group-hover:block">
                        {user ? (
                           <>
                              <div className="py-2">
                                 <span className="block text-lg font-semibold text-gray-900">Hello {user.name}</span>
                                 <span className="block text-xs font-light  text-gray-700 truncate dark:text-gray-400">{user.email}</span>
                              </div>
                              <div className="py-2 flex">
                                 <Link href={'/profile'} className='px-3 py-2 rounded-sm bg-green-500 hover:bg-green-600 text-gray-900 text-center w-full'>profile</Link>
                              </div>
                           </>
                        ) : (
                           <>
                              <div className="py-2">
                                 <span className="block text-lg font-semibold text-gray-900">Hello User</span>
                                 <span className="block text-xs font-light  text-gray-700 truncate dark:text-gray-400">To access your account</span>
                              </div>
                              <div className="py-2 flex">
                                 <Link href={'/auth/login'} className='px-3 py-2 rounded-sm bg-pink-500 hover:bg-pink-600 text-gray-900 text-center w-full'>Login</Link>
                              </div>
                           </>
                        )}
                        <div className="py-2 flex">
                           <Link href={'#'} className='px-3 py-2 flex rounded-sm bg-pink-500 hover:bg-pink-600 text-gray-900 text-center w-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-6 me-4">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                              </svg>
                              <span className='text-md font-medium text-gray-900'>My Order</span>
                           </Link>
                        </div>
                     </div>
                     <div className="h-full border-r-2 border-gray-400 px-2"></div>
                  </li>
                  <li className='py-4 flex'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Cart
                     </a>
                     <div className="px-2"></div>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

const Nav2 = () => {
   const data = [
      {
         title: 'Women Ethnic',
         submenu: [
            {
               title: 'All Women Ethnic',
               subcategory: ['View All']
            },
            {
               title: 'Sarees',
               subcategory: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Georgette Sarees', 'Chiffon Sarees', 'Satin Sarees', 'Embroidered Sarees']
            },
            {
               title: 'Kurtis',
               subcategory: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
               title: 'Kurta Sets',
               subcategory: ['All Kurta Sets']
            },
            {
               title: 'Suits & Dress Material',
               subcategory: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
            {
               title: 'Other Ethnic',
               subcategory: ['Blouses', 'Dupattas', 'Lehanga', 'Gown', 'Ethnic Bottomwear']
            },
         ]
      },
      {
         title: 'Women Western',
         submenu: [
            {
               title: 'Topwear',
               subcategory: ['Tops', 'Dresses', 'Sweaters', 'Jumpsuits',]
            },
            {
               title: 'Bottomwear',
               subcategory: ['Jeans', 'Jeggings', 'Palazzos', 'Shorts', 'Skirts']
            },
            {
               title: 'Innerwear',
               subcategory: ['Bra', 'Briefs']
            },
            {
               title: 'Sleepwear',
               subcategory: ['Nightsuits', 'Babydolls']
            },
         ]
      },
      {
         title: 'Men',
         submenu: [
            {
               title: 'Top Wear',
               subcategory: ['All Top Wear', 'Tshirts', 'Shirts']
            },
            {
               title: 'Bottom Wear',
               subcategory: ['Track Pants', 'Jeans', 'Trousers']
            },
            {
               title: 'Men Accessories',
               subcategory: ['All Men Accessories', 'Watches', 'Belts', 'Wallets', 'Jewellery', 'Sunglasses', 'Bags']
            },
            {
               title: 'Men Footwear',
               subcategory: ['Casual Shoes', 'Sports Shoes', 'Sandals', 'Formal Shoes']
            },
            {
               title: 'Ethnic Wear',
               subcategory: ['Men Kurtas', 'Ethnic Jackets']
            },
            {
               title: 'Inner & Sleep Wear',
               subcategory: ['All Inner & Sleep Wear', 'Vests']
            },
         ]
      },
      {
         title: 'Kids',
         submenu: [
            {
               title: 'Boys & Girls 2 + Years',
               subcategory: ['Dresses']
            },
            {
               title: 'Infant 0 - 2 Years',
               subcategory: ['Rompers']
            },
            {
               title: 'Toys & Accessories',
               subcategory: ['Soft Toys', 'Footwear', 'Stationery', 'Watches', 'Bags & Backpacks']
            },
            {
               title: 'Baby Care',
               subcategory: ['All Baby Care']
            },
         ]
      },
      {
         title: 'Home & Kitchen',
         submenu: [
            {
               title: 'Home Furnishing',
               subcategory: ['Bedsheets', 'Doormats', 'Curtains & Sheers', 'Cushions & Cushion Covers', 'Mattress Protectors', '', '']
            },
            {
               title: 'Home Decor',
               subcategory: ['All Home Decor', 'Stickers', 'Clocks', 'Showpieces']
            },
            {
               title: 'Kitchen & Dining',
               subcategory: ['Kitchen Storage', 'Cookware & Bakeware']
            }
         ]
      },
      {
         title: 'Beauty & Health',
         submenu: [
            {
               title: 'Make up',
               subcategory: ['Face', 'Eyes', 'Lips', 'Nails']
            },
            {
               title: 'Wellness',
               subcategory: ['Sanitizers', 'Oral Care', 'Feminine Hygiene']
            },
            {
               title: 'Skincare',
               subcategory: ['Deodorants']
            },
         ]
      },
      {
         title: 'Jewellery & Accessories',
         submenu: [
            {
               title: 'Jewellery',
               subcategory: ['Jewellery Set', 'Earrings', 'Mangalsutras', 'Studs', 'Bangles', 'Necklaces', 'Rings', 'Anklets']
            },
            {
               title: 'Women Accessory',
               subcategory: ['Bags', 'Watches', 'Hair Accessories', 'Sunglasses', 'Socks']
            },


         ]
      },
      {
         title: 'Bags & Footwear',
         submenu: [
            {
               title: 'Women Bags',
               subcategory: ['All Women Bags', 'Handbags', 'Clutches', 'Slingbags']
            },
            {
               title: 'Men Bags',
               subcategory: ['All Men Bags', 'Men Wallets', 'Men Footwear', 'Sports Shoes', 'Casual Shoes', 'Formal Shoes', 'Sandals']
            },
            {
               title: 'Women Footwear',
               subcategory: ['Flats', 'Bellies', 'Juttis']
            },
         ]
      },
      {
         title: 'Electronics',
         submenu: [
            {
               title: 'Mobile & Accessories',
               subcategory: ['All Mobile & Accessories', 'Smartwatches', 'Mobile Holders', 'Mobile cases and covers']
            },
            {
               title: 'Appliances',
               subcategory: ['All Appliances', 'Grooming', 'Home Appliances', '', '', '']
            }
         ]
      },
   ]
   return (
      <nav className="hidden md:block bg-white border-b border-gray-300 dark:bg-gray-700">
         <ul className="max-w-screen-xl mx-auto flex justify-between font-lg rtl:space-x-reverse text-md overflow-hidden">
            {data.map((menu, index) => <Nav2Li menus={menu} key={index} />)}
         </ul>
      </nav>
   )
}

const Nav3 = () => {
   return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b sticky top-0">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse py-3">
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flow bite</span>
            </Link>
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
               <span className="sr-only">Open main menu</span>
               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
               </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto z-10">
               <ul className="font-normal flex flex-col border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white">
                  <li className='py-4 flex'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">Become a Supplier</a>
                     <div className="h-full border-r-2 border-gray-400 px-2"></div>
                  </li>
                  <li className='py-4 flex'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">Newsroom</a>
                     <div className="h-full border-r-2 border-gray-400 px-2"></div>
                  </li>
                  <li className='py-4 flex hover:border-b-2 hover:border-pink-700 hover:pb-2 relative group'>
                     <div className="px-2"></div>
                     <a href="#" className="inline-flex items-center text-gray-900 hover:text-pink-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        Download App
                     </a>
                     <div className="z-10 hidden bg-white rounded-sm shadow w-44 absolute mt-10 group-hover:block p-3">
                        <div className='text-lg font-medium'>Download From</div>
                        <div className='py-4'><a href="#"><img src='/playstore.png' className='w-full' /></a></div>
                        <div><a href="#"><img src='/playstore.png' className='w-full' /></a></div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

const Nav2Li = (props) => {
   const menus = props.menus
   return (
      <li className='py-2 group'>
         <a href="#" className="hover:border-b-2 hover:border-pink-700 hover:pb-2 hover:text-pink-700 text-gray-500"  >{menus.title}</a>
         <div className="z-10 border-1 absolute mt-2 border-gray-300 shadow-lg bg-gray-50 md:bg-white border w-full hidden left-0 group-hover:block ">
            <div className='flex'>
               {menus.submenu.map((a, index) => {
                  return (
                     <div className={`px-5 py-3 ${index % 2 == 1 ? 'bg-slate-100' : ''}`} key={index}>
                        <p className="font-semibold text-md text-pink-700 pb-3">{a.title}</p>
                        <ul>
                           {a.subcategory.map((b, index1) => {
                              return (
                                 <li key={index1}><a href="#" className="block py-1 rounded-lg text-gray-500 hover:text-pink-700">{b}</a></li>
                              )
                           })}
                        </ul>
                     </div>
                  )
               })}
            </div>
         </div>
      </li>
   )
}

export { Nav1, Nav2, Nav3 }