import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Product from './components/Products';
import Blogs from './components/Blogs';
import Heroimage from './components/HeroSection';
import { Navigate } from 'react-router-dom';
import AllProducts from './components/AllProducts';


const App = () => {
  return (
    <div> 
   <Navbar />
     <Routes>
        <Route path="/" element={<Heroimage />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </div>
  );
};

export default App;

   