
import { ExternalLink, Github, Hospital, FileCode, Code } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
   
    {
      title: "Automated Resume Builder",
      description: "A web app built using HTML/CSS/JS that generates a professional resume in real-time with features like live preview, form validation, and PDF download.",
      tags: ["HTML", "CSS", "JavaScript", "PDF Generation"],
      github: "https://github.com/ChRakshitha28/Automated-Resume-Bulider",
      demo: "#",
    },
     {
      title: "Hospital Management System",
      description: "A comprehensive system for patient registration, doctor scheduling, and billing. Designed with a user-friendly interface to improve hospital administration.",
      tags: ["PostgreSQL", "React.js","Express.js","Node.js"],
      github: "https://github.com/ChRakshitha28/Hospital-Management-System",
      demo: "#",
    },
     {
      title: "AI ChatBot",
      description: "A web app that processes dynamic user input, provides intelligent responses, and ensures a real-time chat experience. Focus on API integration, backend handling, and UI responsiveness.",
      tags: ["React.js", "Gemini API", "Node.js","Express.js"],
      github: "https://github.com/ChRakshitha28/AI-ChatBot",
      demo: "#",
    }
  ];

  const getProjectIcon = (title) => {
    if (title.includes("Hospital")) return <Hospital className="w-10 h-10" />;
    if (title.includes("AI") || title.includes("Chat")) return <Code className="w-10 h-10" />;
    return <FileCode className="w-10 h-10" />;
  };

  return (
    <section id="projects" className="bg-portfolio-dark py-16">
      <div className="section-container">
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
