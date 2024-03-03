"use client"
import ProductShow from '@/components/productshow/ProductShow'
import React, { useEffect, useState } from 'react'

const Page = ({ p_id }) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch('https://dummyjson.com/products/' + id);
                const products = await response.json();
                setProduct(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (p_id) {
            fetchData(p_id)
        }
    }, [p_id]);
    return (
        <>
            {product && (
                <main className='py-4'>
                    <div className='container mx-auto'>
                        <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
                            <div className='md:col-span-4 border border-gray-100 p-2'>
                                <ProductShow images={product.images} />
                            </div>
                            <div className='md:col-span-5'>
                                <div className='border p-3'>
                                    <h1 className='text-gray-900 pb-1 text-xl md:text-lg'>{product.title}</h1>
                                    <div className="flex items-center py-2">
                                        <span className="bg-white text-gray-800 text-xs font-medium inline-flex items-center px-1 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-200 ">
                                            <p className='text-md font-semibold'>{product.rating.toFixed(1)}</p>
                                            <svg className="w-4 h-4 text-blue-300 text-sm ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </span>
                                        <span className='text-gray-400 text-xs'>
                                            <span>50,192 Ratings </span>
                                            <span >&amp;</span>
                                            <span> 7,136 Reviews</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">₹{((product.price) - (product.discountPercentage.toFixed() / 100) * product.price).toFixed()}
                                            <span className='text-gray-400 text-sm ps-2 font-light align-text-top line-through'>₹{((product.discountPercentage.toFixed() / 100) * product.price).toFixed()}</span>
                                            <span className='text-green-500 text-sm ps-2 font-semiboldt align-text-top'> {product.discountPercentage.toFixed()} %</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <p className="text-xs bg-gray-100 font-medium text-gray-700  px-2 rounded-md">Free Delivery</p>
                                    </div>
                                </div>
                                <div className='border p-3 mt-3'>
                                    <h1 className='text-gray-900 pb-1 font-medium text-xl md:text-lg'>Product Details</h1>
                                </div>
                                <div className="flex border-t py-2 mt-4">
                                    <span className='text-gray-400 text-sm font-semibold'>Description</span>
                                    <span className='text-gray-600 text-sm font-normal ps-16'>{product.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
            }
        </>
    )
}

export default Page