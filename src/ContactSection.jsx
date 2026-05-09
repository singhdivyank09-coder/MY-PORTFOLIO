import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Terminal, Send } from "lucide-react";

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
      className="min-h-screen bg-[#0A0A0A] py-24 px-6 font-sans relative overflow-hidden flex items-center"
    >
      {/* Subtle background gradient / neon glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FFC107]/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] -z-0 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFC107] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 block">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Let’s Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SECTION: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let’s build something impactful together.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I’m currently exploring opportunities in AI/ML, development, and real-world problem solving. Whether you have a project idea, collaboration, or just want to connect — feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-[#FFC107] shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium text-lg">Pune, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-[#FFC107] shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                  <p className="text-white font-medium text-lg">+91 7043908402</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">Connect With Me</p>
              <div className="flex space-x-4">
                <motion.a whileHover={{ y: -5, color: "#FFC107" }} href="https://github.com/singhdivyank09-coder" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:border-[#FFC107]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </motion.a>
                <motion.a whileHover={{ y: -5, color: "#FFC107" }} href="https://www.linkedin.com/in/divyank-singh-4b0055299" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:border-[#FFC107]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </motion.a>
                <motion.a whileHover={{ y: -5, color: "#FFC107" }} href="https://www.hackerrank.com/profile/singhdivyank09" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:border-[#FFC107]">
                  <Terminal size={20} />
                </motion.a>
                <motion.a whileHover={{ y: -5, color: "#FFC107" }} href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:border-[#FFC107]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION: Glassmorphism Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex justify-center items-center space-x-2 transition-all ${
                    isSubmitting 
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : submitStatus === "success"
                        ? "bg-green-500 text-white"
                        : "bg-[#FFC107] text-gray-900 hover:bg-[#ffcd38]"
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitStatus === "success" ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
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
