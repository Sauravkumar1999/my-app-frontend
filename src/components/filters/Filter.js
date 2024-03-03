"use client"
import React, { useEffect, useState } from 'react'
import Accordion from './accordion/Accordion'

const Filter = ({ getSelected }) => {
    const [filters, setFilters] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories').then((re) => re.json()).then(data => {
            setFilters([{ title: 'Category', list: data }])
        }).catch((error) => console.log(error))
    }, [])
    return (
        <div className='p-2 border border-green-100 rounded-md'>
            <div className='py-2 px-3'>
                <p className=''>FILTERS</p>
                <p className='text-gray-400 text-sm'>1000+ Products</p>
            </div>
            <hr />
            {filters.map((a, index) => <Accordion title={a.title} list={a.list} key={index} />)}
        </div>
    )
}

export default Filter