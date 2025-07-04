import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "CMR Engineering College",
      years: "2022–2026",
      description:
        "Focusing on core computer science subjects, including data structures, web development, and software engineering. Actively involved in projects and tech communities.",
    },
    {
      degree: "12th Grade",
      institution: "Alphores Junior College",
      years: "2020–2022",
      description:
        "Completed intermediate education with emphasis on Mathematics, Physics, and Chemistry under the Telangana State Board.",
    },
    {
      degree: "10th Grade",
      institution: "Tawakkal High School",
      years: "2020",
      description:
        "Achieved excellent academic results and built a strong foundation in all subjects.",
    },
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
              I’m a Computer Science undergraduate with a strong passion for technology and a commitment to continuous learning. I thrive in dynamic, challenging environments and am driven by a proactive mindset and a can-do attitude.            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As an avid reader and problem-solver, I constantly seek opportunities to grow, enhance my technical skills, and contribute meaningfully to impactful projects. I'm especially enthusiastic about learning new tools and technologies that align with my interests and career goals.
            </p>
             <p className="text-gray-300 mb-6 leading-relaxed">
              I'm also exploring cloud deployment and DevOps practices using AWS to ensure smooth, scalable application delivery. I believe in continuous learning and enjoy experimenting with new technologies to enhance my skills and contribute to impactful solutions.

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
                  <p className="text-sm text-gray-400 mb-1">{edu.years}</p>
                  <p className="text-sm text-gray-500">{edu.description}</p>
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
