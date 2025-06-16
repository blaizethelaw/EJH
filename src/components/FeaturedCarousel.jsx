// src/components/FeaturedCarousel.jsx
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Place your best/most impressive images in /public/images/featured/
const images = [
  "/images/featured/FB_IMG_1750085753155.jpg",
  "/images/featured/FB_IMG_1750085854176.jpg",
  "/images/featured/FB_IMG_1750085746595.jpg",
  // ...add more featured images as needed
];

export default function FeaturedCarousel() {
  const [sliderRef] = useKeenSlider({ loop: true });

  return (
    <div className="w-full max-w-3xl mx-auto my-10">
      <div ref={sliderRef} className="keen-slider rounded-2xl shadow-lg">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide flex justify-center items-center">
            <img src={src} alt={`Featured work ${i + 1}`} className="w-full h-72 object-cover rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
