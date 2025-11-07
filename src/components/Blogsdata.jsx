import React from "react";
import { blogsdata } from "../data/blogsdata";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Blogsdata = () => {
  return (
    <section className="py-12 bg-gray-100">
     <h2 className="text-3xl font-bold text-center">Our Latest Blogs</h2>
      <div className="flex justify-between mb-6 px-6 max-w-7xl mx-auto">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6 max-w-7xl mx-auto">
        {blogsdata.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl hover:shadow-lg overflow-hidden transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"/>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-600 flex items-center font-medium hover:underline">
                Read More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Blogsdata;
