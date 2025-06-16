export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-red-900 text-white flex items-center justify-between px-6 py-4 shadow z-50">
      <div className="flex items-center gap-3">
        <img src="/images/logo.png" alt="Logo" className="h-10 w-10 rounded-full bg-yellow-400" />
        <span className="font-bold text-xl">E.J. Hosbach</span>
      </div>
      <div className="flex gap-6 text-lg">
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>
      <a href="#contact" className="bg-yellow-400 text-red-900 font-bold px-4 py-2 rounded shadow hover:bg-yellow-300 transition">Request Service</a>
    </nav>
  );
}
