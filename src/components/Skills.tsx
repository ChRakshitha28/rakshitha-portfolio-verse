
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "MongoDB", "MySQL"]
    },
    {
      title: "Programming",
      skills: ["C", "C++", "Java"]
    },
    {
      title: "Core CS Concepts",
      skills: ["DS & Algorithms", "OOPS", "DBMS", "OS", "CN"]
    },
    {
      title: "Currently Learning",
      skills: ["Cloud Computing", "DevOps"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-gray p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-accent/10 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-accent">{category.title}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag hover:bg-portfolio-accent/10 transition-colors duration-300">
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
