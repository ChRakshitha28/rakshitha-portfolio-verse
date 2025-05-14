
import { Code, Database, FileCode, Github, Cloud, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-8 h-8 text-portfolio-accent" />,
      skills: ["Java (DSA)", "JavaScript", "TypeScript", "C", "C++"]
    },
    {
      title: "Frontend",
      icon: <FileCode className="w-8 h-8 text-portfolio-accent" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8 text-portfolio-accent" />,
      skills: ["Node.js"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-portfolio-accent" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools",
      icon: <Github className="w-8 h-8 text-portfolio-accent" />,
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      title: "Currently Learning",
      icon: <Cloud className="w-8 h-8 text-portfolio-accent" />,
      skills: ["AWS", "DevOps", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-portfolio-darker">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 rounded-md bg-portfolio-accent/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-portfolio-accent">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap mt-4">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="tech-pill hover:bg-portfolio-accent/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
