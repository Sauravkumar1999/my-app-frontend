import React, { useState } from 'react'

const AccordionList = ({ li }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <li className="flex items-center cursor-pointer" onClick={() => { setIsChecked(!isChecked) }}>
            <input type="checkbox" onChange={() => setIsChecked(!isChecked)} checked={isChecked} className="w-4 h-4 text-blue-600 bg-gray-100 cursor-pointer border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label className="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{li}</label>
        </li>
    )
}

export default AccordionList