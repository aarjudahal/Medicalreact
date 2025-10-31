import React from 'react'
import { products } from '../data/featuredProducts';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';   

const AllProducts = () => {
  const featuredproducts = products;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredProducts = featuredproducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );
 
  
  const visibleProducts = searchQuery ? filteredProducts : featuredproducts;

  return (
    <div className='py-12 px-6 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-8 mt-5'>Featured Products</h2>

      
      {searchQuery && (
        <p className="text-center text-gray-600 mb-6">
          Showing results for: <span className="font-semibold">{searchQuery}</span>
        </p>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6 max-w-7xl mx-auto'>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300'
            >
              <img
                src={product.image}
                alt={product.name}
                className='bg-white w-40 h-32 object-cover mx-auto'
              />
              <div className="border-b border-gray-300 w-full mt-3 mb-0"></div>
              <div className="flex justify-between items-center px-3">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <Link to={`/product/${product.id}`}>
                  <FaArrowRight className="text-blue-600 cursor-pointer" />
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-1 px-3">{product.model}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found 😢</p>
        )}
      </div>
    </div>
  )
}

export default AllProducts;
