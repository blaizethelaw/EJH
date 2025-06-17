import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg p-8 mb-16"
    >
      <h2 className="text-3xl font-bold text-red-900 mb-4">{project.title}</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {project.images &&
          project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={project.title}
              className="w-48 h-36 object-cover rounded-lg shadow"
            />
          ))}
      </div>
      <p className="text-base text-gray-700 mb-2 whitespace-pre-line">{project.description}</p>
      {project.location && (
        <div className="text-gray-500 text-sm">Location: {project.location}</div>
      )}
      {project.date && (
        <div className="text-gray-500 text-sm">Year: {project.date}</div>
      )}
    </motion.div>
  );
}
