import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="pt-32 pb-20 px-2 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-red-900 mb-10 text-center drop-shadow">Project Showcase</h1>
      {projects.map((proj, i) => (
        <ProjectCard key={i} project={proj} />
      ))}
    </div>
  );
}
