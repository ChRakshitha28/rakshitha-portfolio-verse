
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI ChatBot",
      description: "A web app that processes dynamic user input, provides intelligent responses, and ensures a real-time chat experience. Focus on API integration, backend handling, and UI responsiveness.",
      tags: ["JavaScript", "Node.js", "API Integration", "UI/UX"],
      github: "#",
      demo: "#"
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive system for patient registration, doctor scheduling, and billing. Designed with a user-friendly interface to improve hospital administration.",
      tags: ["Database Design", "UI/UX", "System Architecture"],
      github: "#",
      demo: "#"
    },
    {
      title: "Automated Resume Builder",
      description: "A web app built using HTML/CSS/JS that generates a professional resume in real-time with features like live preview, form validation, and PDF download.",
      tags: ["HTML", "CSS", "JavaScript", "PDF Generation"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="bg-portfolio-darker py-16">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-portfolio-gray rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-r from-portfolio-accent/80 to-portfolio-secondary/80 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-portfolio-accent/20 text-portfolio-accent px-2 py-1 rounded mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} className="text-white hover:text-portfolio-accent flex items-center">
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="text-white hover:text-portfolio-accent flex items-center">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
