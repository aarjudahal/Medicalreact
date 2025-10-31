import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [aboutOpen, setAboutOpen] = useState(false); // mobile About submenu
  const [productOpen, setProductOpen] = useState(false); // mobile Product submenu
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if(query.trim() !== ''){
      navigate(`/all-products?search=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
    }
  }

  return (
    <nav className="bg-white top-0 text-black shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/jaynalogo.png" className="w-18 h-10 rounded-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium uppercase mt-2">
          {/* About Us Dropdown */}
          <div className="relative group">
            <Link to="/about" className="hover:text-indigo-600 flex items-center">
              About Us
              <RiArrowDropDownLine className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 top-full bg-white shadow-md mt-1 rounded-md w-60 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <Link to="/about#origin" className="block px-4 py-2 hover:bg-gray-100">Origin and Evolution</Link>
              <Link to="/about#mission" className="block px-4 py-2 hover:bg-gray-100">Mission, Vision and Values</Link>
              <Link to="/about#sustainability" className="block px-4 py-2 hover:bg-gray-100">Sustainability</Link>
              <Link to="/about#why-choose-us" className="block px-4 py-2 hover:bg-gray-100">Why Choose Us</Link>
            </div>
          </div>

          <Link to="/quality" className="hover:text-indigo-600">Quality</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact Us</Link>

          {/* Product Dropdown */}
          <div className="relative group">
            <Link to="/product" className="hover:text-indigo-600 flex items-center">
              Product
              <RiArrowDropDownLine className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 top-full bg-white shadow-md mt-1 rounded-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <Link to="/product#histology-and-pathology" className="block px-4 py-2 hover:bg-gray-100">Histology and Pathology</Link>
              <Link to="/product#tubes-and-vials" className="block px-4 py-2 hover:bg-gray-100">Tubes and Vials</Link>
              <Link to="/product#liquid-handling" className="block px-4 py-2 hover:bg-gray-100">Liquid Handling</Link>
              <Link to="/product#labware" className="block px-4 py-2 hover:bg-gray-100">Labware</Link>
              <Link to="/product#hospital-supplies" className="block px-4 py-2 hover:bg-gray-100">Hospital Supplies</Link>
              <Link to="/product#sharps-disposal" className="block px-4 py-2 hover:bg-gray-100">Sharps Disposal</Link>
              <Link to="/product#waste-bins" className="block px-4 py-2 hover:bg-gray-100">Waste Bins</Link>
              <Link to="/product#lights-and-scales" className="block px-4 py-2 hover:bg-gray-100">Lights and Scales</Link>
              <Link to="/product#measuring-and-testing" className="block px-4 py-2 hover:bg-gray-100">Measuring and Testing</Link>
              <Link to="/product#physiotherapy" className="block px-4 py-2 hover:bg-gray-100">Physiotherapy</Link>
            </div>
          </div>

          <Link to="/blogs" className="hover:text-indigo-600">Blogs</Link>
        </div>

        {/* Search */}
        <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search..."
            className="outline-none px-2 w-32 md:w-48 text-sm"
          />
          <FiSearch onClick={handleSearch} className='w-6 h-6 mt-2'/>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium uppercase">
          
          {/* About Us Mobile */}
          <div>
            <div className="flex justify-between items-center">
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 uppercase">
                About Us
              </Link>
              <button onClick={() => setAboutOpen(!aboutOpen)}>
                <RiArrowDropDownLine className={`w-6 h-6 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {aboutOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/about#origin" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Origin and Evolution</Link>
                <Link to="/about#mission" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Mission, Vision and Values</Link>
                <Link to="/about#sustainability" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Sustainability</Link>
                <Link to="/about#why-choose-us" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Why Choose Us</Link>
              </div>
            )}
          </div>

          {/* Product Mobile */}
          <div>
            <div className="flex justify-between items-center">
              <Link to="/product" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 uppercase">
                Product
              </Link>
              <button onClick={() => setProductOpen(!productOpen)}>
                <RiArrowDropDownLine className={`w-6 h-6 transition-transform duration-300 ${productOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {productOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/product#histology-and-pathology" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Histology and Pathology</Link>
                <Link to="/product#tubes-and-vials" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Tubes and Vials</Link>
                <Link to="/product#liquid-handling" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Liquid Handling</Link>
                <Link to="/product#labware" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Labware</Link>
                <Link to="/product#hospital-supplies" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Hospital Supplies</Link>
                <Link to="/product#sharps-disposal" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Sharps Disposal</Link>
                <Link to="/product#waste-bins" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Waste Bins</Link>
                <Link to="/product#lights-and-scales" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Lights and Scales</Link>
                <Link to="/product#measuring-and-testing" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Measuring and Testing</Link>
                <Link to="/product#physiotherapy" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Physiotherapy</Link>
              </div>
            )}
          </div>

          {/* Other links */}
          <Link to="/quality" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Quality</Link>
          <Link to="/contact" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/blogs" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Blogs</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
