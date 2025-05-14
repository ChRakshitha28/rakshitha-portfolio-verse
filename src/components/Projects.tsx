
import { ExternalLink, Github, Hospital, FileCode, Code } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "ai", label: "AI Projects" }
  ];
  
  const projects = [
    {
      title: "Hospital Management System",
      description: "A comprehensive system for patient registration, doctor scheduling, and billing. Designed with a user-friendly interface to improve hospital administration.",
      image: "/lovable-uploads/d46996d4-1038-4df9-9898-e494c3a5e9dd.png", 
      tags: ["PostgreSQL", "Express.js", "React.js", "Node.js"],
      github: "#",
      demo: "#",
      categories: ["web"]
    },
    {
      title: "AI ChatBot",
      description: "A web app that processes dynamic user input, provides intelligent responses, and ensures a real-time chat experience. Focus on API integration, backend handling, and UI responsiveness.",
      image: "/lovable-uploads/d46996d4-1038-4df9-9898-e494c3a5e9dd.png",
      tags: ["React.js", "Node.js", "Express.js", "Gemini API", "TailwindCSS"],
      github: "#",
      demo: "#",
      categories: ["web", "ai"]
    },
    {
      title: "Automated Resume Builder",
      description: "A web app built using HTML/CSS/JS that generates a professional resume in real-time with features like live preview, form validation, and PDF download.",
      image: "/lovable-uploads/d46996d4-1038-4df9-9898-e494c3a5e9dd.png",
      tags: ["HTML", "CSS", "JavaScript", "PDF Generation"],
      github: "#",
      demo: "#",
      categories: ["web"]
    }
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  const getProjectIcon = (title) => {
    if (title.includes("Hospital")) return <Hospital className="w-10 h-10" />;
    if (title.includes("AI") || title.includes("Chat")) return <Code className="w-10 h-10" />;
    return <FileCode className="w-10 h-10" />;
  };

  return (
    <section id="projects" className="bg-portfolio-dark py-16">
      <div className="section-container">
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#121a29] p-1.5 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-[#121a29] to-portfolio-darker overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-portfolio-accent animate-pulse-slow">
                    {getProjectIcon(project.title)}
                  </div>
                </div>
                <div className="project-image-overlay"></div>
                <div className="project-actions">
                  <a href={project.github} className="action-button">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className="action-button">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-pill">
                      {tag}
                    </span>
                  ))}
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
