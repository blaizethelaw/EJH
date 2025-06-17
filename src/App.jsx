import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource-variable/urbanist";

// EXAMPLE: Update these to your real images/desc
const projects = [
  {
    title: "Ridley Twp. Sewer Relocation",
    desc: "Large scale sewer project in Ridley Township. Quality, on time, under budget.",
    img: "/images/projects/ridley-twp/1.jpg",
  },
  {
    title: "Malvern Sewer",
    desc: "Major sewer overhaul in Malvern with advanced trenching.",
    img: "/images/projects/malvern-sewer/12.jpg",
  },
  {
    title: "Delco Trench",
    desc: "Trench work for Delaware County with minimal disruption.",
    img: "/images/projects/delco_trench/6.jpg",
  },
  {
    title: "Glen Mills Eyewash",
    desc: "Installed new eyewash stations for Glen Mills facility.",
    img: "/images/projects/glen-mills-eyewash/13.jpg",
  }
];

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        zIndex: 99,
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: "#A7263B",
          letterSpacing: 2,
        }}
      >
        E.J. Hosbach Mechanical
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "UrbanistVariable, Arial, sans-serif",
        background: "linear-gradient(135deg, #fff6e0 0%, #ffdde1 100%)",
      }}
    >
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {/* HEADER */}
      <header
        style={{
          width: "100%",
          padding: "32px 0 8px 0",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(8px)",
          borderBottom: "1.5px solid #eee",
          boxShadow: "0 2px 16px 0 rgba(174, 38, 59, 0.04)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
          }}
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: 28,
              color: "#A7263B",
              letterSpacing: 1,
            }}
          >
            E.J. Hosbach
          </span>
          <nav style={{ display: "flex", gap: 32 }}>
            <a href="#" style={{ color: "#A7263B", fontWeight: 700 }}>Home</a>
            <a href="#projects" style={{ color: "#A7263B", fontWeight: 700 }}>Projects</a>
            <a href="#contact" style={{ color: "#A7263B", fontWeight: 700 }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "96px 16px 40px 16px",
          minHeight: 320,
        }}
      >
        <motion.h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "#A7263B",
            background: "linear-gradient(90deg, #A7263B 40%, #ee9ca7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          Welcome to E.J. Hosbach Mechanical
        </motion.h1>
        <p
          style={{
            margin: "18px 0 32px 0",
            color: "#994455",
            fontSize: 22,
            maxWidth: 580,
            textAlign: "center",
          }}
        >
          Serving Ridley, PA and beyond.<br />
          <span style={{ fontWeight: 500 }}>
            Explore our projects and experience true quality, integrity, and satisfaction.
          </span>
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.07, boxShadow: "0 6px 18px #A7263B44" }}
          transition={{ type: "spring", stiffness: 250 }}
          style={{
            background: "linear-gradient(90deg, #A7263B 30%, #ee9ca7 100%)",
            color: "#fff",
            fontWeight: 800,
            padding: "18px 48px",
            fontSize: 20,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 16px #A7263B22",
            textDecoration: "none"
          }}
        >
          View Projects
        </motion.a>
      </motion.section>

      {/* RECENT PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          maxWidth: 1200,
          margin: "0 auto 64px auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 32,
            color: "#A7263B",
          }}
        >
          Recent Projects
        </h2>
        <div
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              whileHover={{
                y: -6,
                scale: 1.025,
                boxShadow: "0 10px 32px #ee9ca777",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: "#fff",
                borderRadius: 22,
                boxShadow: "0 4px 28px #a7263b13",
                padding: 0,
                overflow: "hidden",
                border: "1px solid #fff4f6",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 180,
                  background: "#eee",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={e => (e.target.style.display = "none")}
                />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ margin: 0, color: "#A7263B", fontWeight: 900, fontSize: 22 }}>{p.title}</h3>
                <p style={{ color: "#7a4e57", fontSize: 16 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer
        style={{
          padding: "32px 0 12px 0",
          textAlign: "center",
          color: "#a7263bcc",
          fontWeight: 700,
        }}
      >
        © {new Date().getFullYear()} E.J. Hosbach Mechanical. All rights reserved.
      </footer>
    </div>
  );
}
