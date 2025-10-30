import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/featuredProducts';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
          return <div className="text-center py-20 text-xl">Product not found 😢</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start pt-35">
      <div className='flex flex-col iytems-start p-15' >
        <img src={product.image} alt={product.name} className="w-92 h-78 object-cover mx-auto border border-gray-300 rounded-md "/>

        <img src={product.image} alt={product.name} className="w-24 h-20 object-cover border border-gray-300 rounded-md mt-2  "/>
       </div> 
        <div className='flex flex-col justify-center max-w-md'>
           <h1 className="text-4xl font-bold text-center my-6 text-blue-800">{product.name}</h1>  
            <p className='text-gray-600 mb-4 text-justify'>{product.description}</p>
            <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Model:</span> {product.model} </p>

      </div>
    </div>
    
  )
}

export default ProductDetails
