import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Coffee E-commerce Website",
      description: "A simple, visually appealing e-commerce site for selling coffee products, built with React and Tailwind CSS (front-end only).",
      link: "https://nextjs-assignment-khaki.vercel.app",
    },
    {
      title: "PowerPoint Presentation",
      description: "Created a stunning presentation on Next.js using PowerPoint. .",
      link: "https://1drv.ms/p/c/58fcfa617608f068/Ed3whpqBAalAtZ1vtULhflsBFbev3JVNxqh2vXpOKUCx9Q?e=EPFixI",
    },
    {
      title: "Resume Builder",
      description: "An intuitive web-based resume builder that helps users design and export professional resumes.",
      link: "https://shareable-resume-builder-ten.vercel.app/",
    },
    {
      title: "Graphic Designs 1",
      description: "A showcase of my graphic designs, Business Card Fontside.",
      link: "https://1drv.ms/b/c/58fcfa617608f068/EccyTkYmqPxEsl-4wmab9HkBiXN4B4vGgSxS1ieyZKbeLg?e=wM9DP4",
    },
    {
        title: "Graphic Designs 2",
        description: "A showcase of my graphic designs, Business Card Backside.",
        link: "https://1drv.ms/b/c/58fcfa617608f068/Ec13iD4R1PdGuNJXLTKS73cBxJ2dH6TjlRZesW6stykdjA?e=Xsvmme",
      },
  ];

  return (
    <section className="py-32 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
