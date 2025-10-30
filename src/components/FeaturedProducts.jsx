import React from 'react';
import { products } from '../data/featuredProducts';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="py-12 bg-gray-100">

      <div className="flex justify-between items-center mb-6  px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link
          to="/all-products"
          className="text-black font-medium uppercase hover:text-blue-600 transition flex items-center" >
          View All <FaArrowRight className="ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6 max-w-7xl mx-auto">
        {featuredProducts.map((products) => (
          <div key={products.id} className="bg-white rounded-xl hover:shadow-lg overflow-hidden transition-all duration-300">
            <img src={products.image} alt={products.name} className="w-40 h-32 object-cover mx-auto" />
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
  );
};

export default FeaturedProducts;
