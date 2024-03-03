"use client"
import { Card } from '@/components/card/Card';
import Filter from '@/components/filters/Filter';
import { useEffect, useState } from 'react';

const Page = () => {
  const [products, setProducts] = useState([]);
  const [selectedfilter, setselectedfilter] = useState([]);
  const [mainproducts, setMainProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        setProducts(products);
        setMainProducts(products)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const getSelected = (data) => {
    setselectedfilter([...selectedfilter, data])
  }
  return (
    <main className='py-2'>
      <div className='container mx-auto'>
        <h3 className='text-gray-800 py-3 text-xl  md:text-3xl'>Products For You</h3>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-2">
          <div className='md:col-span-2'>
            <Filter getSelected={getSelected} />
          </div>
          <div className='md:col-span-7'>
            <div className="grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4">
              {products.map((a, index) => {
                return (<div key={index} className='m-1' ><Card product={a} /></div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page