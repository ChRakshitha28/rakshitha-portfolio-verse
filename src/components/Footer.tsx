
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darker py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#home" className="text-xl font-bold font-poppins">
            Rakshitha Chennala<span className="text-portfolio-accent">.</span>
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
<a
  href="https://github.com/ChRakshitha28"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-portfolio-accent"
>
  GitHub
</a>

<a
  href="https://linkedin.com/in/chennala-rakshitha-1b22812a5"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-portfolio-accent"
>
  LinkedIn
</a>

          <a href="mailto:chrakshitha28@gmail.com" className="text-gray-400 hover:text-portfolio-accent transition-colors duration-300">
            Email
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Rakshitha Chennala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
