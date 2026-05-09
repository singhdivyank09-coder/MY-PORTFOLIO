import React from "react";
import { motion } from "framer-motion";

// Staggered animation variants for text elements
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

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen flex flex-col md:flex-row font-sans overflow-hidden bg-white"
    >
      {/* LEFT SIDE: Text Content */}
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 py-16 md:py-0 z-10">
        <motion.div 
          className="flex flex-col items-start justify-center space-y-6 max-w-xl mx-auto md:mr-12 xl:mr-24 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="text-gray-900 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            Hi There!
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            I'M <span className="text-[#FFC107]">DIVYANK</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="inline-block bg-[#FFC107] text-gray-900 font-bold px-4 py-1.5 text-sm md:text-base uppercase tracking-wider rounded-sm shadow-sm">
            Aspiring Full Stack Developer / AI Enthusiast
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
            Passionate about building scalable modern web applications and integrating intelligent AI solutions to solve complex problems.
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-4 px-8 py-4 bg-[#FFC107] text-gray-900 font-bold uppercase tracking-wide rounded-full transition-colors duration-300 hover:bg-[#ffcd38]"
          >
            More About Me
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Strictly Grayscale Image Full Screen Half */}
      <motion.div 
        className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {/* Image Container with continuous subtle zoom */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          <img 
            src="/profile.jpg" 
            alt="Divyank Portrait" 
            className="w-full h-full object-cover object-[center_top] grayscale"
          />
        </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default HeroSection;
