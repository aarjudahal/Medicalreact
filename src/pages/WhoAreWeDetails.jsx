import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const WhoAreWeDetails = () => {
   const breadcrumbItems = [
    { label: 'Home', to: '/#hero' },
    { label: 'Who Are We' }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className=" py-4 px-2  flex items-center ">
        {breadcrumbItems.map((item, index) => (
          <span key={index} className="flex items-center">
            {item.to ? (
              <Link to={item.to} className="text-black hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < breadcrumbItems.length - 1 && (
              <FaChevronRight className="mx-2 text-black" />
            )}
          </span>
        ))}
      </nav>

      <h2 className="text-4xl font-bold text-center mt-5 mb-5">
        Origin <span className="text-indigo-600">& Evolution</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black leading-relaxed">
        <div>
          <p>
            <span className="text-indigo-600 font-semibold">Established in 1980,</span> 
            JAYNA Glass Industries is a medium-sized family business located in Delhi, India.
            Our comprehensive range of Surgical, Scientific, Medical & Laboratory products
            has made our name and our brand renowned internationally. The brand JAYNA has become
            a synonym for quality and reliability. With experience of more than 
            <span className="text-indigo-600 font-semibold"> 40 years in the Indian market.</span>
          </p>
        </div>

        <div>
          <p className="mb-4 ">
            We have developed a great knowledge & a wide portfolio of products which we can source
            and offer from all over the country at the best price with best quality. We are currently
            servicing a large client base including manufacturers, exporters and overseas customers.
            We are a one-stop-shop solution to cater to your complete requirements for medical
            consumables and hospital equipment’s.
          </p>

          <p>
            In order to better serve our customers, in 2022 we started operations of our new
            daughter company <strong>Anvaya Med Healthcare LLP</strong> which is a merchant
            exporter and exclusively deals with our international customers. Our vast experience
            in Surgical, Scientific, Medical & Laboratory products will be your success, too.
            The primary approach of our company is based on a simple analogy that 
            <strong> success of our client equates to our success.</strong>
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0pdCbCMCEfrkcAYRS3BsdtQnkvp7q2yO4A&s"
          alt="Origin and Evolution"
          className="w-full h-40 md:w-3/4"
        />
      </div>

    </section>
  );
};

export default WhoAreWeDetails;
