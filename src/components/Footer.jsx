import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <img
              src="https://www.jaynaglass.com/assests/img/jaynaftrLogo.png"
              alt="Jayna Logo"
              className="w-full"
            />
          </div>
          <p className="font-[700] text-[18px] mt-4 tracking-wide leading-snug" style={{ fontFamily: 'Open Sans, sans-serif' }}>
               Jayna Glass Industries <br />Anvaya Med Healthcare LLP</p>

          <p className="text-[#0056A8] text-[13px] font-[600] mt-3 leading-snug tracking-wide uppercase" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          COMPLETE RANGE OF MEDICAL, SURGICAL, <br /> SCIENTIFIC & LABORATORY EQUIPMENTS & CONSUMABLES</p>

          </div>

        <div className="font-semibold">
          <h3 className="text-lg mb-4">Contact us</h3>
          <ul className="space-y-2 text-[16px]">
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@jaynaglass.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 96259 15625
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" /> 3823, Main Rd, Pahari Dhiraj, Delhi - 110006
            </li>
          </ul>
        </div>

        <div className="font-semibold">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-1 text-[16px]">
            <li>About</li>
            <li>Quality Control</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Social media</h3>
          <div className="flex space-x-3">
            <a href="#" className="text-black hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black hover:text-pink-600">
              <FaInstagram />
            </a>
          </div>
        </div>

       <div className="font-semibold">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-1 text-sm text-[16px]">
            <li>Histology & Pathology</li>
            <li>Tubes & Vials</li>
            <li>Liquid Handling</li>
            <li>Labware</li>
            <li>Hospital Supplies</li>
            <li>Sharps Disposal</li>
            <li>Waste Bins</li>
            <li>Lights & Scales</li>
            <li>Measuring & Testing</li>
            <li>Physiotherapy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-[16px]">
        <p>
          © 2025 <span className="font-semibold">JAYNA</span>. All rights reserved | Developed by{" "}
          <span className="font-semibold">CFCS Cloud Solutions</span>
        </p>
        <div className="mt-2 flex justify-center space-x-4 text-sm font-semibold">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
