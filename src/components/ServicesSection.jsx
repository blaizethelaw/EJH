const services = [
  {
    title: "Plumbing",
    desc: "Leak repairs, fixture installs, pipe replacement, and more—done right the first time.",
    icon: "🛠️",
  },
  {
    title: "Heating",
    desc: "Boiler, furnace, and radiant heating installs, maintenance, and emergency repairs.",
    icon: "🔥",
  },
  {
    title: "Cooling",
    desc: "A/C system service, tune-ups, and full replacements for homes and businesses.",
    icon: "❄️",
  },
  {
    title: "Piping",
    desc: "New piping, re-piping, trenchless solutions, and specialty commercial jobs.",
    icon: "🚰",
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white text-red-900">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((svc) => (
          <div key={svc.title} className="w-72 bg-yellow-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-5xl mb-3">{svc.icon}</div>
            <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
