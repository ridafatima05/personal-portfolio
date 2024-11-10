// components/SkillsSection.js
import React from "react";

const SkillsSection = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "Figma",
    "Git/GitHub",
  ];

  return (
    <section className="py-56 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
