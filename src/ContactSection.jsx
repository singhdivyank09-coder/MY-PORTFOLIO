import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Terminal, Send, Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden flex items-center"
    >
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-0 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-[1px] bg-blue-500/50" />
            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs">
              Communication
            </span>
            <div className="w-10 h-[1px] bg-blue-500/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Connect.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SECTION: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                Let’s build something <br />
                <span className="text-purple-400 italic">impactful</span> together.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium opacity-80">
                I’m currently exploring opportunities in AI/ML, development, and real-world problem solving. Whether you have a project idea, collaboration, or just want to connect — feel free to reach out.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Location", value: "Pune, Maharashtra", color: "text-purple-400" },
                { icon: Phone, label: "Phone", value: "+91 7043908402", color: "text-blue-400" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className={`w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center ${item.color} shadow-2xl group-hover:border-white/20 transition-all`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-white font-black text-xl tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-6">Social Networks</p>
              <div className="flex space-x-4">
                {[
                  { icon: "github", href: "https://github.com/singhdivyank09-coder", svg: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/> },
                  { icon: "linkedin", href: "https://www.linkedin.com/in/divyank-singh-4b0055299", svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/> },
                  { icon: "terminal", href: "https://www.hackerrank.com/profile/singhdivyank09" },
                  { icon: "instagram", href: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, background: "rgba(255,255,255,0.1)" }} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 transition-all hover:text-purple-400 hover:border-purple-500/50"
                  >
                    {social.icon === "terminal" ? <Terminal size={22} /> : 
                     social.icon === "instagram" ? <Instagram size={22} /> :
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{social.svg}</svg>}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION: Glassmorphism Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[80px] rounded-full -z-10 group-hover:bg-purple-600/20 transition-all" />
              
              <h3 className="text-3xl font-black text-white mb-10 tracking-tight">Drop a message.</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group/input">
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 ml-1 group-focus-within/input:text-purple-400 transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all duration-300 placeholder:text-gray-700"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="relative group/input">
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 ml-1 group-focus-within/input:text-blue-400 transition-colors">Digital Mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300 placeholder:text-gray-700"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="relative group/input">
                  <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 ml-1 group-focus-within/input:text-purple-400 transition-colors">The Brief</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all duration-300 resize-none placeholder:text-gray-700"
                    placeholder="Describe your vision..."
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex justify-center items-center space-x-3 transition-all duration-500 ${
                    isSubmitting 
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : submitStatus === "success"
                        ? "bg-green-600 text-white shadow-[0_0_30px_rgba(22,163,74,0.4)]"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting...</span>
                  ) : submitStatus === "success" ? (
                    <span>Mission Success!</span>
                  ) : (
                    <>
                      <span>Broadcast Message</span>
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
