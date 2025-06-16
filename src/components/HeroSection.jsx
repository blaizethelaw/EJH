export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-red-900 to-yellow-400 py-20 text-white text-center">
      <img src="/images/logo.png" alt="E.J. Hosbach Logo" className="mx-auto mb-8 w-28 rounded-full border-4 border-yellow-400" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing, Heating & Cooling Experts You Can Trust</h1>
      <p className="text-xl mb-6">Serving Chadds Ford & Chester County, PA</p>
      <a href="#contact" className="px-6 py-3 rounded-full bg-yellow-400 text-red-900 font-bold shadow-lg hover:bg-yellow-300 transition">Get a Free Estimate</a>
    </section>
  );
}
