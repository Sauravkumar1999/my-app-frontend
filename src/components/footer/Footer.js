"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
  const [isActive, setisActive] = useState(false)
  return (
    <footer className="bg-pink-50 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-5">
          <div className="md:col-span-2 space-y-3 col-span-5 mb-6 md:mb-0">
            <p className='md:text-3xl text-2xl font-medium text-gray-700'>Shop Non-Stop on Flow bite</p>
            <p className='text-gray-500 dark:text-gray-400 font-medium'>Trusted by more than 1 Crore Indians <br />
              Cash on Delivery | Free Delivery</p>
            <a href="#" className="flex items-center space-x-6">
              <img src="/playstore.png" className="h-5 sm:h-8 md:h-10" alt="FlowBite Logo" />
              <img src="/appstore.png" className="h-5 sm:h-8 md:h-10" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="md:col-span-3  col-span-5 grid grid-cols-2 gap-1 sm:gap-3 sm:grid-cols-4">
            <div>
              <h2 className="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Usefull Links</h2>
              <ul className="text-gray-500 font-medium dark:text-gray-400 space-y-2">
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Become a supplier</a></li>
                <li><a href="#" className="hover:underline">Hall of FameSitemap</a></li>
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Reach out to us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li className="flex space-x-3">
                  <img src='/social-img/facebook.png' alt='facebook' />
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="flex space-x-3">
                  <img src='/social-img/instagram.png' alt='instagram' />
                  <a href="#" className="hover:underline">Instagram</a>
                </li>
                <li className="flex space-x-3">
                  <img src='/social-img/youtube.png' alt='youtube' />
                  <a href="#" className="hover:underline">Youtube</a>
                </li>
                <li className="flex space-x-3">
                  <img src='/social-img/twitter.png' alt='twitter' />
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="flex space-x-3">
                  <img src='/social-img/linkedin.png' alt='linkedin' />
                  <a href="#" className="hover:underline">Linkedin</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-700 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-700 uppercase dark:text-white">Contact Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <p className='text-xs'>
                  Fashnear Technologies Private Limited,
                  CIN: U74900KA2015PTC082263
                  06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
                  E-mail address: query@meesho.com
                  © 2015-2023 Meesho.com
                </p>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2023 <a href="/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <div>
          <h2 id="accordion-collapse-heading-1" onClick={() => { setisActive(!isActive) }}>
            <button type="button" className={`flex items-center justify-between w-full px-4 py-3 text-2xl font-semibold rtl:text-right text-gray-700  hover:bg-gray-200 gap-3 ${isActive ? 'bg-gray-200' : 'bg-white'}`}>
              <span>More About Meesho</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d={isActive ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M15.75 19.5L8.25 12l7.5-7.5"} />
              </svg>
            </button>
          </h2>
          <div className={"p-3 w-full bg-white px-4 py-3 space-y-3 " + (!isActive && "hidden")}>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Meesho: Affordable Online Shopping at Your Fingertips</h1>
              <p className='text-gray-500 font-medium'>There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market. Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>A Huge Selection of Products Across All Categories</h1>
              <p className='text-gray-500 font-medium'>We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Latest Women's Fashion Is Right Here</h1>
              <p className='text-gray-500 font-medium'>Women’s Ethnic Wear Collection When it comes to women's ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Western Wear for Women</h1>
              <p className='text-gray-500 font-medium'>Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Accessories, Jewellery, and Footwear</h1>
              <p className='text-gray-500 font-medium'>You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you'll be sure to find the perfect accessories for any outfit!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Men's Ethnic Wear</h1>
              <p className='text-gray-500 font-medium'>Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men’s ethnic wear collection! Whether you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Largest Collection of Menswear and Accessories</h1>
              <p className='text-gray-500 font-medium'>Men’s Western Wear Through our large selection of menswear products we offer, you’re sure to find something you love. We have a vast collection of t-shirts, jeans, polos, coats, and shirts. We have sizes in stock that fit any man’s body type, and the best news of all is that they’re all affordable. We make it easy to find exactly what you’re looking for, too. Our search tool lets you filter our selection down by size, color, material, and more.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Ethnic Wear for Men</h1>
              <p className='text-gray-500 font-medium'>If you're on the hunt for a new sherwani or any other type of Indian attire for an upcoming wedding, our latest men's ethnic wear collection has got you covered. We have a range of budget-friendly styles to choose from, so you're sure to find something that fits your needs. Whether you're looking for a Sherwani set, Kurta pajamas, or an ethnic jacket, we've got it all!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Men’s Accessories and Footwear</h1>
              <p className='text-gray-500 font-medium'>When it comes to fashion, no one knows how to help you gain the upper hand in style better than us. Shop our online collection of accessories for men and pick out something for yourself or for your other half! Our accessories collection includes items like men's wallets, cufflinks, bags for men, and more. So don't waste another minute and get yourself some accessories today! Do not forget to check out our latest footwear for men. We have everything from colorful sneakers to formal footwear to flip-flops for men.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Affordable and Top Quality Beauty Products</h1>
              <p className='text-gray-500 font-medium'>With so many different cosmetics brands, products, and items to choose from, it can be overwhelming when trying to find the right makeup for you. Sometimes it's nice to try out new products, but if you buy bad quality makeup that breaks you out, it's not very cost-effective. We are only concerned with the best products. We only stock up on the best makeup and skincare that won't damage your skin or make you break out. We have everything from foundations, makeup removers, concealers to primer, mascara, eye shadow, and lipsticks.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Cute and Trendy Kidswear Collection</h1>
              <p className='text-gray-500 font-medium'>Kids grow so fast, it feels like you're constantly buying new clothes for them! Whether you're looking for the latest trends or just want something practical and affordable, our kidswear collection has got you covered. You'll find everything from rompers and dresses for girls to sets and jeans for boys. Plus, we have ethnic wear and accessories for kids of all ages. And don't forget to check out our baby care collection for all the basic products for baby care.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Shop Home & Kitchen Products, Electronics, and More</h1>
              <p className='text-gray-500 font-medium'>Kitchen Products If you're looking to spice up your kitchen, then you've come to the right place! We carry a wide variety of home and kitchen essentials like cooking utensils and serveware, kitchen storage, appliances like blenders, choppers, cooktops, and more! We are dedicated to providing the highest quality products for a reasonable price. We're confident that we have everything you're looking for in your kitchen or home!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Home Utility and Essentials</h1>
              <p className='text-gray-500 font-medium'>It's always a good idea to switch up your home's style every now and then - it keeps things fresh and also allows you to try out new trends. But of course, you never want to spend more money than you have to. That's where Meesho comes in! We've got amazing prices on all kinds of home furnishing items like bedsheets, curtains, cushions, and more. Plus, we have a constantly rotating selection of the best home decor items so you can always stay on top of the latest trends. So be sure to check out our home decor section today!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Electronics and Accessories</h1>
              <p className='text-gray-500 font-medium'>At Meesho, we give you access to a huge selection of gadgets and essentials for your electronic devices. Here you'll find everything from chargers and headphones to data cables and even external battery packs. Every month, we offer different sales and discounts on products, allowing you to save on your favorite essentials. Here you can find the perfect gift for everyone on your list without breaking your budget!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Health, Fitness & Sports</h1>
              <p className='text-gray-500 font-medium'>We know how important it is to take care of your health and keep yourself fit. We have everything you need to start your journey towards fitness. At our store, you will find a wide variety of fitness equipment at very affordable prices. We have everything you need to get started with your home workouts, including dumbbell sets, exercise bands, exercise mats, skipping ropes, sports kits and more!</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Office Supplies and Stationery</h1>
              <p className='text-gray-500 font-medium'>We have a wide range of stationery items which will help you stay tidy and organised. You can buy notebooks, diaries and notepads and craft supplies which are great for school and college, or you can buy office supplies which are great for adults. We have a variety of pens, pencils, and other stationery supplies to ensure that you have what you need to write down your thoughts, make lists and so much more.</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-xl font-medium text-gray-700'>Get the Meesho App for Hassle Free Online Shopping</h1>
              <p className='text-gray-500 font-medium'>If you want a seamless shopping experience, you should also consider downloading Meesho’s App. While you may think that it's unnecessary to have an app for shopping, there are plenty of features that will make your life easier. If you find yourself preferring to shop from home, this is the app for you. It makes shopping online easier than ever. You can browse through a plethora of products and even get great deals with more discounts than you can count. You can even share products you like with your friends on social media in just seconds.</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  )
}

export default Footer