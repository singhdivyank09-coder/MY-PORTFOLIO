import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase, Award, Trophy, Link as LinkIcon, Terminal } from "lucide-react";

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

const ResumeSection = () => {
  return (
    <motion.section 
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#111111] py-20 px-6 font-sans relative overflow-hidden"
    >
      {/* Decorative dark theme background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-900/10 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-800/20 rounded-full blur-[100px] -z-0"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center mb-16">
          <motion.span variants={cardVariants} className="text-[#FFC107] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 block">
            My academic journey, skills, and achievements
          </motion.span>
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-extrabold text-white inline-block relative">
            Resume
            <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-[#FFC107] rounded-full"></div>
          </motion.h2>
        </motion.div>

        {/* Resume Layout - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN */}
          <motion.div variants={containerVariants} className="space-y-8">
            
            {/* Education */}
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-[#1A1A1A] border border-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-[#FFC107]">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-800">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FFC107] border-4 border-[#1A1A1A]"></div>
                <h4 className="text-lg font-bold text-white">B.Tech in Computer Science Engineering</h4>
                <p className="text-[#FFC107] font-medium text-sm mb-2">AI/ML Specialization</p>
                <p className="text-gray-400 text-sm">JSPM University, Pune</p>
                <span className="inline-block mt-2 px-3 py-1 bg-gray-800 text-gray-300 text-xs font-semibold rounded-full">2025 – Present</span>
              </div>
            </motion.div>

            {/* Skills Pills */}
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-[#1A1A1A] border border-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-[#FFC107]">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Skills Focus</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-full text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] transition-colors cursor-default">
                  Python <span className="text-gray-500 text-xs ml-1">(Decent)</span>
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-full text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] transition-colors cursor-default">
                  Pandas <span className="text-gray-500 text-xs ml-1">(Learning)</span>
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-full text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] transition-colors cursor-default">
                  NumPy <span className="text-gray-500 text-xs ml-1">(Learning)</span>
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-full text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] transition-colors cursor-default">
                  AI Fundamentals <span className="text-gray-500 text-xs ml-1">(Basic)</span>
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-full text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] transition-colors cursor-default">
                  ML Concepts <span className="text-gray-500 text-xs ml-1">(Learning)</span>
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-full text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] transition-colors cursor-default">
                  Data Analysis <span className="text-gray-500 text-xs ml-1">(Matplotlib, Seaborn)</span>
                </span>
              </div>
            </motion.div>

            {/* Profiles */}
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-[#1A1A1A] border border-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-[#FFC107]">
                  <LinkIcon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Profiles</h3>
              </div>
              <div className="space-y-4">
                <a href="https://github.com/singhdivyank09-coder" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-all group">
                  <div className="flex items-center space-x-3">
                    <svg className="text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span className="text-gray-300 font-medium group-hover:text-white">GitHub</span>
                  </div>
                  <span className="text-xs text-gray-500">View Profile ↗</span>
                </a>
                <a href="https://www.hackerrank.com/profile/singhdivyank09" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-all group">
                  <div className="flex items-center space-x-3">
                    <Terminal className="text-gray-400 group-hover:text-[#00EA64]" size={20} />
                    <span className="text-gray-300 font-medium group-hover:text-white">HackerRank</span>
                  </div>
                  <span className="text-xs text-gray-500">View Profile ↗</span>
                </a>
                <a href="https://www.linkedin.com/in/divyank-singh-4b0055299" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-all group">
                  <div className="flex items-center space-x-3">
                    <svg className="text-gray-400 group-hover:text-[#0A66C2]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="text-gray-300 font-medium group-hover:text-white">LinkedIn</span>
                  </div>
                  <span className="text-xs text-gray-500">View Profile ↗</span>
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div variants={containerVariants} className="space-y-8">
            
            {/* Projects */}
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-[#1A1A1A] border border-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-[#FFC107]">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Active Projects</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-gray-800">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FFC107] border-4 border-[#1A1A1A]"></div>
                  <h4 className="text-lg font-bold text-white">Portfolio Website</h4>
                  <p className="text-gray-400 text-sm mt-1">A modern personal portfolio built with React, Tailwind CSS, and Framer Motion.</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-[#FFC107]/10 text-[#FFC107] text-xs font-semibold rounded-full border border-[#FFC107]/20">In Progress</span>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-800">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#1A1A1A]"></div>
                  <h4 className="text-lg font-bold text-white">Suvidha Kiosk</h4>
                  <p className="text-gray-400 text-sm mt-1">An upcoming hardware/software prototype kiosk aimed at providing automated public services.</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-gray-800 text-gray-400 text-xs font-semibold rounded-full border border-gray-700">Prototype – Upcoming</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-[#1A1A1A] border border-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-[#FFC107]">
                  <Trophy size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-[#FFC107]">✦</div>
                  <p className="text-gray-300 font-medium">Participated in Suvidha Kiosk initiative by CDAC</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-[#FFC107]">✦</div>
                  <p className="text-gray-300 font-medium">Participated in Smart India Hackathon 2025</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-[#FFC107]">✦</div>
                  <p className="text-gray-300 font-medium">Active problem solver on HackerRank</p>
                </li>
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-[#1A1A1A] border border-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-[#FFC107]">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-6 h-6 grayscale opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">AWS AI/ML Practitioner</h4>
                    <p className="text-gray-500 text-sm">Amazon Web Services</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-gray-800 text-gray-400 rounded-md">Planned</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;
