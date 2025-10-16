import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white top-0 text-black shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/jaynalogo.png" className="w-18 h-10 rounded-full" />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-10 font-medium uppercase">
          <Link to="/about" className="hover:text-indigo-600 ">About Us</Link>
          <Link to="/quality" className="hover:text-indigo-600">Quality</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact Us</Link>
          <Link to="/product" className="hover:text-indigo-600">Products</Link>
          <Link to="/blogs" className="hover:text-indigo-600">Blogs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
