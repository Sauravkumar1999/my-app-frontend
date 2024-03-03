"use client"
import Breadcrum from '@/dashboard-components/Breadcrum'
import React, { useState } from 'react'

const Page = () => {
   return (
      <>
         <Breadcrum />
         <form className="mx-3" onSubmit={(e)=>e.preventDefault()}>
            <div className="py-3 grid md:grid-cols-4 md:gap-6">
               <div className="relative w-full h-12">
                  <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Title</label>
               </div>
               <div className="relative w-full h-12">
                  <label htmlFor="underline_select" className="sr-only">select Brand</label>
                  <select id="underline_select" className="block cursor-pointer py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                     <option >Select Brand</option>
                     <option value="US">United States</option>
                     <option value="CA">Canada</option>
                     <option value="FR">France</option>
                     <option value="DE">Germany</option>
                  </select>
               </div>
               <div className="relative w-full h-12">
                  <label htmlFor="underline_select" className="sr-only">select Category</label>
                  <select id="underline_select" className="block cursor-pointer py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                     <option >Select Brand</option>
                     <option value="US">United States</option>
                     <option value="CA">Canada</option>
                     <option value="FR">France</option>
                     <option value="DE">Germany</option>
                  </select>
               </div>
               <div className="relative w-full h-12">
                  <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Price</label>
               </div>
            </div>
            <div className="py-3 grid md:grid-cols-4 md:gap-6">
               <div className="relative w-full">
                  <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Discount %</label>
               </div>
               <div className="relative w-full">
                  <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Stock</label>
               </div>
               <div className="relative w-full md:col-span-2">
                  <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 hover:border-pink-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Description</label>
               </div>
            </div>
            <div className="py-3 grid md:grid-cols-5 md:gap-6">
               <div className="relative w-full md:col-span-1"><Thumbnail /></div>
               <div className="relative w-full md:col-span-4"><Images /></div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
         </form>
      </>
   )
}
const Thumbnail = () => {
   const [previewImage, setPreviewImage] = useState('/empty.jpg');

   function onChange(e) {
      const file = e.target.files[0];
      if (file) {
         setPreviewImage(URL.createObjectURL(file));
      }
   }
   return (
      <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <a href="#">
            <img src={previewImage} onClick={(e) => { e.preventDefault(), e.target.parentElement.nextElementSibling.click() }} className='w-full' />
         </a>
         <input type='file' onChange={onChange} className='hidden' />
         <div className='flex justify-center content-center'>Select Thumbnail</div>
      </div>
   )
}
const Images = () => {
   const [previewImage, setPreviewImage] = useState([]);
   function onChange(e) {
      const files = e.target.files;
      if (files.length > 0) {
         const newImages = Array.from(files).map(file => {
            let img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            return img;
         });
         setPreviewImage(prevImages => [...prevImages, ...newImages]);
      } else {
         setPreviewImage([])
      }
   }
   return (
      <div className="w-full p-2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="small_size">Multiple Images</label>
         <input onChange={onChange} className="block w-52 text-xs text-gray-900 border border-gray-300 hover:border-pink-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" id="small_size" multiple type="file" />
         <div className='flex'>
            {previewImage.map((img, index) => (
               <img key={index} src={img.src} className='w-32 border  m-2' />
            ))}
         </div>
      </div>
   );
};


export default Page