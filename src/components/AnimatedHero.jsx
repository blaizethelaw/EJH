import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-red-900 mb-6 drop-shadow">
        Welcome to E.J. Hosbach Mechanical
      </h1>
      <p className="text-xl text-red-800/80 font-medium max-w-2xl mx-auto mb-8">
        Serving Ridley, PA and beyond. Explore our projects and experience true quality, integrity, and satisfaction.
      </p>
      <a
        href="/projects"
        className="inline-block bg-red-900 text-white px-6 py-3 rounded-2xl shadow-xl text-lg font-bold hover:bg-red-700 transition-all duration-300"
      >
        View Projects
      </a>
    </motion.div>
  );
}
