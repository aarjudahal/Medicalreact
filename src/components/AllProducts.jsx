import React from 'react'
import { products } from '../data/featuredProducts';

const AllProducts = () => {
    const featuredproducts = products;
  return (
      <div className='py-12 px-6 max-w-7xl mx-auto'>
      
      <h2 className='text-3xl font-bold text-center mb-8'>Featured Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6 max-w-7xl mx=auto'>
        {featuredproducts.map((products)=> (
          <div key={products.id} className='bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300'>
            <img src={products.image} alt={products.name} className='bg-white w-40 h-32 object-cover mx-auto'/>
            <div className='p-4 text-center'>
              <h3 className='text-lg font-semibold mb-2'>{products.name}</h3>
              
              <p className='text-sm text-gray-500'>{products.model}</p>
              </div>
          </div>
        ))}
      </div>
      </div>

  )
}
export default AllProducts
