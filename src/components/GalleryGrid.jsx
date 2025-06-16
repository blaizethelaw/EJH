// src/components/GalleryGrid.jsx
import React from "react";

// Place all gallery images in /public/images/gallery/
const galleryImages = [
  "/images/gallery/FB_IMG_1750085744060.jpg",
  "/images/gallery/FB_IMG_1750085842189.jpg",
  "/images/gallery/FB_IMG_1750085921531.jpg",
  // ...add all your images here
];

export default function GalleryGrid() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {galleryImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i+1}`}
            className="w-full h-48 object-cover rounded-xl shadow hover:scale-105 transition duration-200"
          />
        ))}
      </div>
    </section>
  );
}
