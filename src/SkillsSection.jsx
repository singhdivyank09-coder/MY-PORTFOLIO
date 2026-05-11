import { motion } from "framer-motion";
import { BrainCircuit, Terminal, Layout, Target } from "lucide-react";

// Animation Variants
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

// Skill Progress Bar Component
const ProgressBar = ({ label, percentage }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-bold text-gray-300 tracking-wide">{label}</span>
      <span className="text-xs font-black text-purple-400">{percentage}%</span>
    </div>
    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
      <motion.div 
        className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      />
    </div>
  </div>
);

// Skill Tag Component
const SkillTag = ({ text }) => (
  <div className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-xl mb-3 flex items-center group hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-4 shadow-[0_0_8px_#A855F7] group-hover:scale-125 transition-transform"></div>
    {text}
  </div>
);

const SkillsSection = () => {
  return (
    <motion.section 
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center lg:text-left mb-20">
          <motion.div variants={cardVariants} className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
            <div className="w-10 h-[1px] bg-purple-500/50" />
            <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs">
              Capabilities
            </span>
          </motion.div>
          <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-black text-white">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Skills.</span>
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Category 1: AI / Data & Analysis */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-center space-x-5 mb-10">
              <div className="p-3.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg shadow-purple-500/20">
                <BrainCircuit size={26} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">AI / Data & Analysis</h3>
            </div>
            
            <p className="text-sm text-gray-400 font-medium mb-8 leading-relaxed opacity-80">
              Strong interest in building real-world AI systems and understanding complex data pipelines.
            </p>

            <div className="space-y-2">
              <ProgressBar label="Python" percentage={55} />
              <ProgressBar label="Pandas" percentage={50} />
              <ProgressBar label="NumPy" percentage={50} />
              <ProgressBar label="Matplotlib" percentage={45} />
              <ProgressBar label="Seaborn" percentage={45} />
            </div>
          </motion.div>

          {/* Category 2: Programming */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-center space-x-5 mb-10">
              <div className="p-3.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                <Terminal size={26} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">Programming</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 text-gray-300 text-xs font-black uppercase tracking-[0.15em] px-5 py-4 rounded-2xl flex items-start border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-4 flex-shrink-0 shadow-[0_0_8px_#3B82F6]"></div>
                Core concepts in Python
              </div>
              <div className="bg-white/5 text-gray-300 text-xs font-black uppercase tracking-[0.15em] px-5 py-4 rounded-2xl flex items-start border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-4 flex-shrink-0 shadow-[0_0_8px_#3B82F6]"></div>
                Data manipulation & Scripting
              </div>
              <div className="bg-white/5 text-gray-300 text-xs font-black uppercase tracking-[0.15em] px-5 py-4 rounded-2xl flex items-start border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-4 flex-shrink-0 shadow-[0_0_8px_#3B82F6]"></div>
                Foundation for AI/ML development
              </div>
            </div>
          </motion.div>

          {/* Category 3: UI/UX & Design */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-center space-x-5 mb-10">
              <div className="p-3.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg shadow-purple-500/20">
                <Layout size={26} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">UI/UX & Design</h3>
            </div>
            
            <div className="space-y-1">
              <SkillTag text="Modern design aesthetics" />
              <SkillTag text="Clean and minimal interfaces" />
              <SkillTag text="AI-assisted workflows" />
              <SkillTag text="Visual User Experiences" />
            </div>
          </motion.div>

          {/* Category 4: Core Strengths */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
          >
            <div className="flex items-center space-x-5 mb-10">
              <div className="p-3.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">Core Strengths</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {["Problem Solving", "Consistency", "Self-Learning", "Quick Learner"].map((strength) => (
                <div key={strength} className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center group hover:border-blue-500/40 transition-all duration-300">
                  <span className="block text-white font-black text-[10px] uppercase tracking-widest leading-tight">{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
