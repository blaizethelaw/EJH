import { useRef } from "react";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import projects from "../data/projects";

export default function ProjectsCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 24 },
    breakpoints: {
      "(min-width: 768px)": { perView: 3 },
      "(min-width: 1024px)": { perView: 4 },
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center text-red-900">Recent Projects</h2>
      <div ref={sliderRef} className="keen-slider">
        {projects.map((proj, i) => (
          <div className="keen-slider__slide" key={i}>
            <div className="bg-white rounded-xl shadow-lg p-4 mx-2">
              <img
                src={proj.images?.[0] || "/images/placeholder.jpg"}
                alt={proj.title}
                className="w-full h-44 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-bold text-red-900 mb-1">{proj.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{proj.description.slice(0, 100)}...</p>
              <a href="/projects" className="text-red-700 underline text-xs font-semibold mt-2 inline-block">See all</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
