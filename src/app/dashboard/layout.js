"use client"
import Navbar from '@/dashboard-components/navbar/Navbar'
import Sidebar from '@/dashboard-components/sidebar/Sidebar'
import React, { useState } from 'react'

const Layout = ({ children }) => {
    const [dataFromChild, setDataFromChild] = useState(false);

    return (
        <>
            <Sidebar humburger={dataFromChild} />
            <div className={` ${!dataFromChild && 'sm:ml-64'}`}>
                <Navbar gethumberg={(childData) => setDataFromChild(childData)} />
                <div className='px-1 py-1'> {children}</div>
            </div>
        </>
    )
}

export default Layout