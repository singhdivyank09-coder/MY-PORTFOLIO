import React from "react";
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
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// Skill Progress Bar Component
const ProgressBar = ({ label, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-semibold text-gray-800">{label}</span>
      <span className="text-xs font-bold text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div 
        className="bg-[#FFC107] h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  </div>
);

// Skill Tag Component
const SkillTag = ({ text }) => (
  <div className="bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-md mb-3 flex items-center shadow-sm">
    <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] mr-3"></div>
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
      className="min-h-screen bg-white py-20 px-6 font-sans"
    >
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center md:text-left mb-16">
          <motion.span variants={cardVariants} className="text-gray-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 block">
            My Strengths
          </motion.span>
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative">
            Skills
            <div className="absolute -bottom-2 right-0 w-1/2 h-1.5 bg-[#FFC107] rounded-full"></div>
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
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-[#FFC107] rounded-xl shadow-md text-gray-900">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">AI / Data & Analysis</h3>
            </div>
            
            <p className="text-sm text-gray-500 font-medium mb-6">
              Strong interest in building real-world AI systems and understanding data pipelines.
            </p>

            <ProgressBar label="Python" percentage={55} />
            <ProgressBar label="Pandas" percentage={50} />
            <ProgressBar label="NumPy" percentage={50} />
            <ProgressBar label="Matplotlib" percentage={45} />
            <ProgressBar label="Seaborn" percentage={45} />
          </motion.div>

          {/* Category 2: Programming */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-[#FFC107] rounded-xl shadow-md text-gray-900">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Programming</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-3 rounded-md flex items-start shadow-sm border border-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] mt-1.5 mr-3 flex-shrink-0"></div>
                Core programming concepts in Python
              </div>
              <div className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-3 rounded-md flex items-start shadow-sm border border-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] mt-1.5 mr-3 flex-shrink-0"></div>
                Data manipulation and scripting
              </div>
              <div className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-3 rounded-md flex items-start shadow-sm border border-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] mt-1.5 mr-3 flex-shrink-0"></div>
                Strong foundation for AI/ML development
              </div>
            </div>
          </motion.div>

          {/* Category 3: UI/UX & Vibe Coding Approach */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-50 rounded-br-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-[#FFC107] rounded-xl shadow-md text-gray-900">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">UI/UX & Design</h3>
            </div>
            
            <SkillTag text="Understanding of modern design aesthetics" />
            <SkillTag text="Ability to visualize clean and minimal interfaces" />
            <SkillTag text="Exploring AI-assisted development workflows" />
            <SkillTag text="Focus on building visually appealing user experiences" />
          </motion.div>

          {/* Category 4: Mindset Skills */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-100 rounded-tl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gray-900 rounded-xl shadow-md text-[#FFC107]">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Core Strengths</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-gray-900 font-bold text-sm">Problem Solving</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-gray-900 font-bold text-sm">Consistent Action</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-gray-900 font-bold text-sm">Self-Improvement</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-gray-900 font-bold text-sm">Quick Learner</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
