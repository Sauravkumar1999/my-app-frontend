"use client"
import React, { useState } from 'react'
import AccordionList from './component/AccordionList'

const Accordion = ({ title, list }) => {
   const [isActive, setisActive] = useState(false)
   return (
      <div>
         <h2 id="accordion-collapse-heading-1" onClick={() =>{ setisActive(!isActive)}}>
            <button type="button" className="flex items-center justify-between w-full px-4 py-3 font-medium rtl:text-right text-gray-600  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 gap-3">
               <span>{title}</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round"
                     d={isActive ? "M15.75 19.5L8.25 12l7.5-7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
               </svg>
            </button>
         </h2>
         <div className={"p-3 " + (!isActive && "hidden")}>
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
               {list.map((li, index) => <AccordionList li={li} key={index} />)}
            </ul>
         </div>
         <hr />
      </div>
   )
}

export default Accordion