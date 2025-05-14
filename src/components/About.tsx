
const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "CMR Engineering College, Hyderabad",
      years: "2022–2026 (Expected)"
    },
    {
      degree: "Class 12",
      institution: "Alphores Junior College",
      years: "2020–2022"
    },
    {
      degree: "SSC",
      institution: "Tawakkal High School",
      years: "2020"
    }
  ];

  return (
    <section id="about" className="bg-portfolio-darker py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a third-year Computer Science undergraduate with a strong passion for technology and continuous learning. I thrive in challenging environments and am driven by a self-motivated, can-do attitude.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As an avid reader and problem-solver, I constantly seek opportunities to grow, enhance my technical skills, and contribute meaningfully to impactful projects. I'm especially enthusiastic about learning new tools and technologies that align with my interests and career goals.
            </p>
          </div>
          
          <div className="animate-slide-up [animation-delay:200ms]">
            <h3 className="text-xl font-bold mb-4 text-portfolio-accent">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-portfolio-accent pl-4 py-2">
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.years}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
