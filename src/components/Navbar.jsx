import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md shadow fixed w-full z-30">
      <Link to="/" className="text-2xl font-bold text-red-900">E.J. Hosbach</Link>
      <div className="flex gap-6">
        <Link
          to="/"
          className={`hover:text-red-600 font-semibold ${location.pathname === "/" ? "text-red-900 underline" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`hover:text-red-600 font-semibold ${location.pathname === "/projects" ? "text-red-900 underline" : ""}`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
