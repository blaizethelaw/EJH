// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectsPage from "./pages/projects";
// Import your HomePage or other pages as needed

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 flex gap-4">
        <Link to="/" className="text-white font-semibold">Home</Link>
        <Link to="/projects" className="text-white font-semibold">Projects</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
