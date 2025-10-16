import React, { useState } from "react";

// Slides data
const slides = [
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
    title: "Labware",
    description: "High-quality labware for precise scientific experiments.",
  },
  {
    image: "/images/pathology.webp",
    title: "Pathology",
    description: "Advanced pathology solutions for accurate diagnostics.",
  },
  {
    image: "/images/tubes-and-vials.webp",
    title: "Tubes and Vials",
    description: "Durable tubes and vials for secure sample storage.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manual slide navigation
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-[80vh] mt-20 bg-cover bg-center flex flex-col justify-center items-center text-center p-8 "
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {slides[currentIndex].title}
        </h2>
        <p className="text-lg md:text-2xl">{slides[currentIndex].description}</p>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSection;
