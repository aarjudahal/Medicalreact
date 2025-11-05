import React,{useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Product from './components/Products';
import Blogs from './components/Blogs';
import Heroimage from './components/HeroSection';
import AllProducts from './components/AllProducts';
import ProductDetails from './pages/ProductDetails';
import WhoAreWeDetails from './pages/WhoAreWeDetails';
import Footer from "./components/Footer";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div> 
   <Navbar />
   <ScrollToTop />
     <Routes>
        <Route path="/" element={<Heroimage />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/who-are-we-details" element={<WhoAreWeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

   