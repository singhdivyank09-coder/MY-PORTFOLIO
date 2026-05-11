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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const ResumeSection = () => {
  return (
    <motion.section 
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden"
    >
      {/* Decorative dark theme background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center mb-20">
          <motion.div variants={cardVariants} className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-[1px] bg-purple-500/50" />
            <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs">
              Curriculum Vitae
            </span>
            <div className="w-10 h-[1px] bg-purple-500/50" />
          </motion.div>
          <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-black text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Resume.</span>
          </motion.h2>
        </motion.div>

        {/* Resume Layout - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN */}
          <motion.div variants={containerVariants} className="space-y-10">
            
            {/* Education */}
            <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex items-center space-x-5 mb-8">
                <div className="p-3.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg shadow-purple-500/20">
                  <GraduationCap size={26} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Education</h3>
              </div>
              <div className="relative pl-8 border-l border-white/10 ml-4">
                <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7]"></div>
                <h4 className="text-xl font-black text-white leading-tight mb-2">B.Tech in Computer Science</h4>
                <p className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-3">AI/ML Specialization</p>
                <div className="flex items-center text-gray-400 text-sm mb-4 font-medium">
                  JSPM University, Pune
                </div>
                <span className="inline-block px-4 py-1.5 bg-white/5 text-gray-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/5 group-hover:border-purple-500/30 transition-all">
                  2025 – Present
                </span>
              </div>
            </motion.div>

            {/* Skills Focus */}
            <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:border-blue-500/30 transition-all duration-500 group">
              <div className="flex items-center space-x-5 mb-8">
                <div className="p-3.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  <Code2 size={26} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Skills Focus</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Python", status: "Decent" },
                  { name: "Pandas", status: "Learning" },
                  { name: "NumPy", status: "Learning" },
                  { name: "AI Fundamentals", status: "Basic" },
                  { name: "ML Concepts", status: "Learning" },
                  { name: "Data Analysis", status: "Intermediate" }
                ].map((skill) => (
                  <div key={skill.name} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest text-gray-300 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default flex items-center space-x-2 group/skill">
                    <span>{skill.name}</span>
                    <span className="text-purple-500/50 group-hover/skill:text-purple-400 transition-colors">/</span>
                    <span className="text-[9px] text-gray-500 group-hover/skill:text-gray-300 transition-colors">{skill.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profiles */}
            <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex items-center space-x-5 mb-8">
                <div className="p-3.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg shadow-purple-500/20">
                  <LinkIcon size={26} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Digital Profiles</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { name: "GitHub", icon: "github", href: "https://github.com/singhdivyank09-coder", color: "hover:bg-white/10 hover:border-white/30" },
                  { name: "HackerRank", icon: "terminal", href: "https://www.hackerrank.com/profile/singhdivyank09", color: "hover:bg-[#00EA64]/10 hover:border-[#00EA64]/30 hover:text-[#00EA64]" },
                  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/divyank-singh-4b0055299", color: "hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-[#0A66C2]" }
                ].map((profile) => (
                  <motion.a 
                    key={profile.name}
                    href={profile.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 transition-all group/link ${profile.color}`}
                  >
                    <div className="flex items-center space-x-4">
                      {profile.icon === "github" && <svg className="text-gray-400 group-hover/link:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                      {profile.icon === "terminal" && <Terminal className="text-gray-400 group-hover/link:text-[#00EA64] transition-colors" size={22} />}
                      {profile.icon === "linkedin" && <svg className="text-gray-400 group-hover/link:text-[#0A66C2] transition-colors" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>}
                      <span className="text-gray-300 font-black uppercase text-xs tracking-widest">{profile.name}</span>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div variants={containerVariants} className="space-y-10">
            
            {/* Projects */}
            <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:border-blue-500/30 transition-all duration-500 group">
              <div className="flex items-center space-x-5 mb-10">
                <div className="p-3.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  <Briefcase size={26} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Active Initiatives</h3>
              </div>
              <div className="space-y-10">
                <div className="relative pl-8 border-l border-white/10 ml-4">
                  <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3B82F6]"></div>
                  <h4 className="text-xl font-black text-white leading-tight mb-2">Portfolio OS</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed opacity-80">A high-performance digital environment showcasing technical depth and creative engineering.</p>
                  <span className="px-4 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full">In Progress</span>
                </div>
                <div className="relative pl-8 border-l border-white/10 ml-4">
                  <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-gray-600 shadow-[0_0_10px_#4B5563]"></div>
                  <h4 className="text-xl font-black text-white leading-tight mb-2">Suvidha Kiosk</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed opacity-80">Hardware/software integration focused on providing automated public services to local communities.</p>
                  <span className="px-4 py-1 bg-white/5 border border-white/10 text-gray-500 text-[9px] font-black uppercase tracking-widest rounded-full">Next Phase</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex items-center space-x-5 mb-10">
                <div className="p-3.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg shadow-purple-500/20">
                  <Trophy size={26} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Milestones</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Participated in Suvidha Kiosk initiative by CDAC",
                  "Qualified for Smart India Hackathon 2025",
                  "Active problem solver on HackerRank"
                ].map((achievement, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="mt-1 mr-4 w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition-all duration-300">
                      <span className="text-[10px]">✓</span>
                    </div>
                    <p className="text-gray-300 font-bold text-sm leading-tight opacity-80 group-hover/item:opacity-100 transition-opacity">{achievement}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:border-blue-500/30 transition-all duration-500 group">
              <div className="flex items-center space-x-5 mb-8">
                <div className="p-3.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  <Award size={26} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Validation</h3>
              </div>
              <div className="flex items-center justify-between p-6 bg-white/5 rounded-[1.5rem] border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center p-2 border border-white/5 group-hover:border-blue-500/20 transition-all">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-full h-full grayscale brightness-200 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-xs tracking-widest leading-tight">AWS AI/ML Practitioner</h4>
                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-tighter mt-1">Amazon Web Services</p>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/5">Planned</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

// Helper for external link icon since I used it above
const ArrowUpRight = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);

export default ResumeSection;
