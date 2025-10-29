import img1 from "../assets/pathology.webp";
import img2 from "../assets/labware.webp";
import img3 from "../assets/tubes-and-vials.webp";
import { NextArrow, PrevArrow } from "../components/CustomArrows";

export const images = [
  { 
    src: img1, 
    alt: "Slide 1", 
    title: "Pathology",
    description: "Advanced pathology solutions for accurate diagnostics.",
  },
  { 
    src: img2, 
    alt: "Slide 2", 
    title: "Labware",
    description: "High-quality labware for precise scientific experiments.",
  },
  { 
    src: img3, 
    alt: "Slide 3", 
    title: "Tubes and Vials",
    description: "Durable tubes and vials for secure sample storage.",
  },
];

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  fade: false,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      },
    },
  ],
};
