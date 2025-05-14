
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a third-year Computer Science undergraduate with a strong passion for technology and continuous learning. I thrive in challenging environments and am driven by a self-motivated, can-do attitude.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As an avid reader and problem-solver, I constantly seek opportunities to grow, enhance my technical skills, and contribute meaningfully to impactful projects. I'm especially enthusiastic about learning new tools and technologies that align with my interests and career goals.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary inline-flex items-center group"
              >
                <span>Contact Me</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-portfolio-accent/20 text-portfolio-accent p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </span>
              Education
            </h3>
            <div className="space-y-6 mt-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="education-timeline"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium text-portfolio-accent">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
