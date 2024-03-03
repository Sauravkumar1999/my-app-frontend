"use client"
import Link from 'next/link'
import React from 'react'

const Card = ({ product }) => {
    return (
        <div className="w-full bg-white rounded-sm hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <Link href={"/product/" + product.id}><img className="px-3 py-2 rounded-t-lg w-full h-40 overflow-hidden" src={product.thumbnail} alt="product image" /></Link>
            <div className="px-4 pb-5">
                <Link href={"/product/" + product.id}>
                    <h5 className="text-sm tracking-tight text-gray-500 dark:text-white">{product.title}</h5>
                </Link>
                <div className="flex items-center justify-between pt-2">
                    <p className="text-xl font-bold text-gray-900 dark:text-white">₹{((product.price) - (product.discountPercentage.toFixed() / 100) * product.price).toFixed()}
                        <span className='text-gray-400 text-sm ps-2 font-light align-text-top line-through'> ₹{((product.discountPercentage.toFixed() / 100) * product.price).toFixed()}</span>
                        <span className='text-green-500 text-sm ps-2 font-semiboldt align-text-top'> {product.discountPercentage.toFixed()} %</span>
                    </p>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <span className="bg-white text-gray-800 text-xs font-medium inline-flex items-center px-1 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-200 ">
                        <p className='text-md font-semibold'>{product.rating.toFixed(1)}</p>
                        <svg className="w-4 h-4 text-blue-300 text-sm ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export { Card } 