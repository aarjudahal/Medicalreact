import React from "react";
import Slider from "react-slick";
import "../styles/slick.css";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { images, sliderSettings } from "../data/slider";
import FeaturedProducts from "./FeaturedProducts";

const HeroSection = () => {
  
  return (
    <>
        <div className="bg-transparent overflow-hidden">
          <div className="relative ">
            <Slider {...sliderSettings}>     
              {images.map((img, index) => (
                <div key={index} className="outline-none">
                  <div className="relative w-full h-screen">
                    <img
                      src={img.src}
                      alt={img.alt}

                      className="absolute inset-0 w-full h-full object-cover object-center z-0" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 pointer-events-none"></div>

                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 sm:p-8">
                      <div className="max-w-3xl ">
                        <h2 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6  drop-shadow-lg ">
                          {img.title}
                        </h2>
                        <p className="text-sm text-black  sm:text-base md:text-lg lg:text-xl  max-w-2xl drop-shadow-md">
                          {img.description}
                        </p>
                        <Link to="/product" >
                          <button className=" flex flex-row mt-5 m-auto  cursor-pointer bg-blue-400 hover:bg-blue-700 text-black  font-semibold py-2 px-6  rounded-2xl uppercase">view products
                            <FaArrowUp className="rotate-45 ml-2" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <FeaturedProducts />
        </>
  );
}

 export default HeroSection;
