import React from 'react';
import { Link } from 'react-router-dom';


const WhoAreWe = () => {
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12 font-[Georgia]">Who Are We</h2>
       <div className="flex flex-col md:flex-row items-center gap-8">
         <div className="md:w-1/2">
          <img 
            src="https://www.jaynaglass.com/assests/img/jaynaBn.jpg" 
            alt="Who Are We" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2">
          <p className="text-black mb-4">
            We are a team of passionate professionals committed to delivering high-quality products and services that empower our clients and drive innovation in the industry.
          </p>

          <p className="text-black mb-4">
            Our mission is to provide solutions that combine efficiency, sustainability, and excellence, building long-term relationships with our customers and partners.
            At the heart of our operations lies a culture of collective responsibility for quality. Through collaborative teamwork, we strive for ongoing performance improvement across our product range, services, and interactions with both suppliers and customers. We actively promote initiatives aimed at waste reduction, cost efficiency, and the perpetual enhancement of quality and service standards, all geared towards upholding product integrity and ensuring utmost customer satisfaction.
          </p>

          <Link 
            to="/who-are-we-details" 
            className="inline-block mt-4 px-6 py-2 bg-white-600 text-black font-medium rounded-full border-2 border-black"> Read More</Link>
        </div>

      </div>

    </section>
  );
};

export default WhoAreWe;
