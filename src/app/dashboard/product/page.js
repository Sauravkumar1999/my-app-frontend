"use client"
import Breadcrum from '@/dashboard-components/Breadcrum'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(e => e.json())
            .then(data => {
                setproducts(data.products)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Breadcrum />
            <div className="relative overflow-x-auto shadow-sm sm:rounded-sm">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky">
                        <tr>
                            <th scope="col" className='px-4 py-3'>S.no</th>
                            <th scope="col" className='px-4 py-3'>title</th>
                            <th scope="col" className='px-4 py-3'>price</th>
                            <th scope="col" className='px-4 py-3'>discount</th>
                            <th scope="col" className='px-4 py-3'>stock</th>
                            <th scope="col" className='px-4 py-3'>brand</th>
                            <th scope="col" className='px-4 py-3'>category</th>
                            <th scope="col" className='px-4 py-3'>images</th>
                            <th scope="col" className='px-4 py-3'>thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => <Tr key={index} id={index} data={p} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Tr = ({ data, id }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{++id}</th>
            <td className='px-4 py-3'>{data.title}</td>
            <td className='px-4 py-3'>{data.price}</td>
            <td className='px-4 py-3'>{data.discountPercentage}</td>
            <td className='px-4 py-3'>{data.stock}</td>
            <td className='px-4 py-3'>{data.brand}</td>
            <td className='px-4 py-3'>{data.category}</td>
            <td className='px-4 py-3'><ImageShow images={data.images} /></td>
            <td className='px-4 py-3 relative'>
                <div className='group'>
                    <a target='blank' href={data.thumbnail} className='group'>
                        <img className="w-20 h-20 rounded absolute hidden z-20 group-hover:block -ms-5 -mt-5" src={data.thumbnail} alt="Default avatar" />
                    </a>
                    <img className="w-10 h-10 rounded" src={data.thumbnail} alt="Default avatar" />
                </div>
            </td>
        </tr>
    )
}

const ImageShow = ({ images }) => {
    return (
        <div className='group'>
            <a href="#" className="font-medium px-1 text-xs text-blue-600 hover:underline">Show</a>
            <div className="absolute z-10 left-1/2 -mt-10 invisible group-hover:visible px-3 py-2 text-sm bg-white border border-gray-200 rounded-md shadow-sm tooltip" >
                <div className='flex'>
                    {images.map((img, index) => {
                        return (
                            <img key={index} src={img} className='w-20 p-2' />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page