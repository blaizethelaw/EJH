import AnimatedHero from "../components/AnimatedHero";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function Home() {
  return (
    <div className="pt-32 px-4">
      <AnimatedHero />
      <div className="mt-16">
        <ProjectsCarousel />
      </div>
    </div>
  );
}
