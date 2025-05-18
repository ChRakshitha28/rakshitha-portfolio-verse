
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-portfolio-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-portfolio-secondary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="section-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hello, I'm <span className="text-portfolio-accent">Rakshitha</span> Chennala
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 text-gray-300">Future Software Developer</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            I'm a third-year Computer Science undergraduate with a strong passion for technology and continuous learning. I thrive in challenging environments and am driven by a self-motivated, can-do attitude.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="/rakshitha-portfolio-verse/Pics/Rakshitha-Chennala-Resume.pdf"
              className="btn-outline"
              download
            >
            Download Resume
            <Download size={18} className="ml-2" />
          </a>

          </div>
        </div>

        <div className="flex-shrink-0 relative animate-fade-in">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-accent/30 hover-glow transition-all duration-300">
            <img 
              src="Pics\me1.jpg" 
              alt="Rakshitha Chennala"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-portfolio-accent text-black rounded-full flex items-center justify-center text-sm font-semibold animate-glow">CS Student</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
