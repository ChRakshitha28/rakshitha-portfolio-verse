
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Here you would typically send the data to a server or API
    alert("Thank you for your message! I'll get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-portfolio-gray border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-portfolio-gray border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-portfolio-gray border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div className="animate-slide-up [animation-delay:200ms]">
            <div className="bg-portfolio-gray p-8 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6 text-portfolio-accent">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-portfolio-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:chrakshitha28@gmail.com" className="text-gray-400 hover:text-portfolio-accent">chrakshitha28@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="w-6 h-6 text-portfolio-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
<a href="https://linkedin.com/in/chennala-rakshitha-1b22812a5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent">
  linkedin.com/in/chennala-rakshitha-1b22812a5
</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="w-6 h-6 text-portfolio-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
<a href="https://github.com/ChRakshitha28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent">
  github.com/ChRakshitha28
</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-400">
                  Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, opportunities, or just having a chat about technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
