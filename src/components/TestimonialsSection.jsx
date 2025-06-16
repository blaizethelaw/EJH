const testimonials = [
  {
    quote: "Professional, reliable, and honest—wouldn’t call anyone else!",
    name: "M. Taylor",
  },
  {
    quote: "They saved us when our furnace died in the middle of winter. Fast and fair pricing!",
    name: "J. Smith",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-yellow-50 text-red-900">
      <h2 className="text-3xl font-bold text-center mb-10">Customer Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="w-96 bg-white rounded-xl shadow-md p-6">
            <div className="text-2xl mb-3">⭐⭐⭐⭐⭐</div>
            <p className="mb-2 italic">"{t.quote}"</p>
            <div className="font-bold">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
