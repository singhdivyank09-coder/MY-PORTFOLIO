import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

const HeroSection = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col md:flex-row font-sans overflow-hidden bg-[#030014]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* LEFT SIDE: Text Content */}
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center px-8 py-20 md:py-0 z-10">
        <motion.div 
          className="flex flex-col items-start justify-center space-y-8 max-w-xl mx-auto md:ml-12 lg:ml-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-purple-500" />
            <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Creative Developer
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            DIVYANK <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-300% animate-gradient">SINGH.</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {["React.js", "Python", "AI/ML"].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-gray-300">
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md font-medium opacity-80">
            Architecting high-performance digital experiences and intelligent AI solutions for the future.
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
          >
            <span className="relative z-10 flex items-center">
              Explore My Journey <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Profile Image with Futuristic Overlay */}
      <motion.div 
        className="w-full md:w-1/2 h-[60vh] md:h-screen relative"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#030014] z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10 md:hidden" />
        
        <motion.div 
          className="w-full h-full"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        >
          <img 
            src="/profile.jpg" 
            alt="Divyank Portrait" 
            className="w-full h-full object-cover object-[center_20%] grayscale contrast-[1.1] brightness-[0.8]"
          />
        </motion.div>
        
        {/* Subtle holographic line effect */}
        <div className="absolute inset-0 opacity-20 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }
      `}} />
    </motion.section>
  );
};

export default HeroSection;
