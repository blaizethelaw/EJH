// src/components/ProjectCard.jsx

import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.images && project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={project.title}
            className="h-40 rounded-lg object-cover"
          />
        ))}
      </div>
      <p className="whitespace-pre-line mb-2">{project.description}</p>
      {project.location && <div className="text-gray-500 text-sm">Location: {project.location}</div>}
      {project.date && <div className="text-gray-500 text-sm">Year: {project.date}</div>}
    </div>
  );
}

export default ProjectCard;
