import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white top-0 text-black shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between ">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/jaynalogo.png" className="w-18  h-10 rounded-full" />
        </Link>
        <div className="hidden md:flex space-x-8 font-medium uppercase mt-2">
          <Link to="/about" className="hover:text-indigo-600 flex flex-row">About Us 
           <RiArrowDropDownLine className='w-10 h-10 m-[-7px]' /></Link>
          <Link to="/quality" className="hover:text-indigo-600">Quality</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact Us</Link>
          <Link to="/product" className="hover:text-indigo-600 flex flex-row">Product 
           <RiArrowDropDownLine className='w-10 h-10 m-[-7px]' /></Link>
          <Link to="/blogs" className="hover:text-indigo-600">Blogs</Link>
        </div>
        <div >
        <FiSearch className='w-6 h-6 mt-2 '/>
        </div>
      
      {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="w-7 h-7" />
            ) : (
              <FiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium uppercase">
          <Link
            to="/about"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/quality"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Quality
          </Link>
          <Link
            to="/contact"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/product"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            to="/blogs"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
