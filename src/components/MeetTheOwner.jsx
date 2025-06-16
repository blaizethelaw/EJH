// src/components/MeetTheOwner.jsx
import React from "react";

// Place the owner photo in /public/images/owner/evan.jpg
export default function MeetTheOwner() {
  return (
    <section className="flex flex-col sm:flex-row gap-8 items-center bg-gray-100 p-8 rounded-2xl shadow-lg my-8 max-w-3xl mx-auto">
      <img
        src="/images/owner/evan.jpg"
        alt="Evan Hosbach, Owner"
        className="w-40 h-40 rounded-full border-4 border-primary object-cover shadow"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">Meet the Owner: Evan Hosbach</h2>
        <p className="text-lg text-gray-700">
          With years of hands-on experience, Evan Hosbach is dedicated to quality workmanship and customer satisfaction on every job.
          From routine maintenance to complex installations, Evan takes pride in every project. When you hire EJ Hosbach Mechanical,
          you work directly with the owner—no shortcuts, just honest, reliable service.
        </p>
      </div>
    </section>
  );
}
