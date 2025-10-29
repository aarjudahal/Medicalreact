import React from 'react'
import { products } from '../data/featuredProducts';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedProducts = () => {
  const featuredproducts = products.slice(0, 4);
  return (
    <div className='py-12 bg-gray-100'>
      <div className='flex justify-between mb-8 px-6 max-w-7xl mx-auto '>
      <h2 className='text-3xl font-bold mb-8'>Featured Products</h2>
      <div className=' md:flex space-x-8 font-medium uppercase mt-2' >
      <Link to="/all-products" className=" text-black px-4 py-2 mx-auto">View All
        <FaArrowRight className='inline-block ml-2'/>
      </Link>
      </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6 max-w-7xl mx=auto'>
        {featuredproducts.map((products)=> (
          <div key={products.id} className='bg-white rounded-xl hover:shadow-xl overflow-hidden transition-all duration-300'>
            <img src={products.image} alt={products.name} className='w-40 border-b h-32 object-cover mx-auto'/>
            <div className='p-4'>
              <h3 className='text-lg font-semibold mb-2'>{products.name}</h3>
             
              <p className='text-sm text-gray-500'>{products.model}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
