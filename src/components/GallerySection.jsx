const gallery = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-gray-50 text-red-900">
      <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
        {gallery.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Project ${idx + 1}`}
            className="w-full rounded-xl shadow-md object-cover h-48"
          />
        ))}
      </div>
    </section>
  );
}
