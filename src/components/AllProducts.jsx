import React from 'react'
import { products } from '../data/featuredProducts';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const featuredproducts = products;
  return (
      <div className='py-12 px-6 max-w-7xl mx-auto'>
      
      <h2 className='text-3xl font-bold text-center mb-8 mt-5'>Featured Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6 max-w-7xl mx=auto'>
        {featuredproducts.map((products)=> (
          <div key={products.id} className='bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300'>
            <img src={products.image} alt={products.name} className='bg-white w-40 h-32 object-cover mx-auto'/>
            <div className="border-b border-gray-300 w-full mt-3 mb-0"></div>
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{products.name}</h3>
                  <Link to={`/product/${products.id}`}>
                    <FaArrowRight className="text-blue-600 cursor-pointer " />
                  </Link>
                </div>
               <p className="text-sm text-gray-500 mt-1">{products.model}</p>
           </div>
         
        ))}
      </div>
      </div>

  )
}
export default AllProducts
