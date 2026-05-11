import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Target, Cpu } from "lucide-react";

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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const AboutSection = () => {
  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#030014] py-24 px-6 flex items-center justify-center font-sans relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* LEFT SIDE: Image with futuristic frame */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center order-2 lg:order-1"
          variants={itemVariants}
        >
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-[550px] overflow-hidden rounded-3xl bg-[#030014] border border-white/10 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Divyank Singh" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start justify-center text-left order-1 lg:order-2"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-4">
            <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              The Journey
            </span>
            <div className="w-12 h-[1px] bg-purple-500/50" />
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white mb-8">
            Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Futures.</span>
          </motion.h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl mb-10 font-medium">
            <motion.p variants={itemVariants}>
              I’m a focused and determined developer currently building a strong foundation in full-stack development, with a growing interest in artificial intelligence and real-world problem solving.
            </motion.p>
            <motion.p variants={itemVariants}>
              My journey is defined by a commitment to **consistency** and **clarity**. I believe in the power of learning by doing—rebuilding from scratch and approaching every challenge with a discipline that turns setbacks into stepping stones.
            </motion.p>
          </div>

          {/* Details Grid: Glassmorphism Cards */}
          <motion.div variants={itemVariants} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: User, label: "Name", value: "Divyank Singh" },
              { icon: MapPin, label: "Location", value: "Pune, Maharashtra" },
              { icon: GraduationCap, label: "Education", value: "B.Tech CSE (AI/ML)" },
              { icon: Target, label: "Focus", value: "Full-Stack & AI" }
            ].map((detail, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/30 transition-colors group">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <detail.icon size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">{detail.label}</span>
                  <span className="text-sm font-bold text-gray-200">{detail.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all"
            >
              Download Resume
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-full transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
