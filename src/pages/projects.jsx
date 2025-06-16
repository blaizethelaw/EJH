// src/pages/projects.jsx

import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Project Showcase</h1>
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} />
      ))}
    </div>
  );
}
