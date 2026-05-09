import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const AboutSection = () => {
  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-white py-20 px-6 flex items-center justify-center font-sans relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: Image */}
        <motion.div 
          className="md:col-span-5 relative flex justify-center"
          variants={itemVariants}
        >
          {/* Subtle background shape behind image */}
          <div className="absolute inset-0 bg-[#EFEFEF] rounded-tl-3xl rounded-br-3xl transform translate-x-4 translate-y-4 -z-10"></div>
          
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-full md:h-[500px] overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl">
            <img 
              src="/profile.jpg" 
              alt="Divyank Singh" 
              className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: Text Content */}
        <motion.div 
          className="md:col-span-7 flex flex-col items-start justify-center text-left"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="text-gray-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2">
            Get to know me
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-16 h-1.5 bg-[#FFC107] rounded-full"></div>
          </motion.h2>

          <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            <motion.p variants={itemVariants}>
              I’m a focused and determined developer currently building a strong foundation in full-stack development, with a growing interest in artificial intelligence and real-world problem solving.
            </motion.p>
            <motion.p variants={itemVariants}>
              After facing academic setbacks, I made a conscious decision to take a step back, rebuild from scratch, and approach my journey with discipline and clarity. This phase of my life is dedicated to consistent learning, skill development, and creating meaningful projects that reflect my growth.
            </motion.p>
            <motion.p variants={itemVariants}>
              Alongside my academic preparation, I’m actively working on developing practical skills in modern web technologies and software development. My goal is not just to learn concepts, but to apply them in real-world scenarios and continuously improve through execution. I believe in long-term consistency, self-improvement, and building a career that stands out through both skill and mindset.
            </motion.p>
          </div>

          {/* Highlight Line */}
          <motion.div 
            variants={itemVariants} 
            className="border-l-4 border-[#FFC107] pl-4 py-2 bg-yellow-50 mb-8 w-full rounded-r-md"
          >
            <p className="text-gray-900 font-semibold italic text-lg">
              "Currently focused on building projects, strengthening fundamentals, and preparing for high-level opportunities in tech."
            </p>
          </motion.div>

          {/* Details Grid */}
          <motion.div variants={itemVariants} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            <div className="border-b border-gray-200 pb-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Name</span>
              <span className="font-semibold text-gray-900">Divyank Singh</span>
            </div>
            <div className="border-b border-gray-200 pb-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Location</span>
              <span className="font-semibold text-gray-900">Surat, Gujarat</span>
            </div>
            <div className="border-b border-gray-200 pb-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Education</span>
              <span className="font-semibold text-gray-900">Engineering Student (CSE)</span>
            </div>
            <div className="border-b border-gray-200 pb-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Focus Areas</span>
              <span className="font-semibold text-gray-900">Full-Stack Dev, AI/ML (beginner)</span>
            </div>
            <div className="border-b border-gray-200 pb-2 sm:col-span-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Current Goal</span>
              <span className="font-semibold text-gray-900">Skill-building + strong portfolio + high-paying MNC role</span>
            </div>
            <div className="border-b border-gray-200 pb-2 sm:col-span-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Status</span>
              <span className="font-semibold text-gray-900">Open to learning, internships, and collaboration</span>
            </div>
          </motion.div>
          
          <motion.button 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 15px rgba(255, 193, 7, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-[#111111] text-white font-bold uppercase tracking-wide rounded-full transition-colors duration-300 hover:bg-[#FFC107] hover:text-gray-900 shadow-md"
          >
            Download Resume
          </motion.button>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
