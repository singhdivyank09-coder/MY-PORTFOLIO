import { motion } from "framer-motion";
import { BrainCircuit, Terminal, Database, Compass } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Skill = ({ name, status }) => (
  <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
    <span className="text-sm font-semibold text-gray-200">{name}</span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 whitespace-nowrap">{status}</span>
  </div>
);

const SkillsSection = () => (
  <motion.section id="skills" initial="hidden" whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden">
    <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-6xl w-full mx-auto relative z-10">
      <motion.div variants={containerVariants} className="mb-16 text-center lg:text-left">
        <motion.div variants={cardVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-4">
          <div className="w-10 h-px bg-purple-500/50" />
          <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs">What I Work With</span>
        </motion.div>
        <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-black text-white">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Toolkit.</span>
        </motion.h2>
        <motion.p variants={cardVariants} className="text-gray-400 mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
          A snapshot of the tools and concepts I’m learning and using. I prefer showing my current stage honestly rather than assigning arbitrary skill percentages.
        </motion.p>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <motion.div variants={cardVariants} whileHover={{ y: -4 }} className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-4 mb-7">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white"><Terminal size={24} /></div>
            <h3 className="text-2xl font-black text-white">Programming</h3>
          </div>
          <div className="space-y-3">
            <Skill name="Python" status="Intermediate" />
            <Skill name="C" status="Learning · Pointers" />
            <Skill name="Java" status="Beginner" />
            <Skill name="C++" status="Beginner" />
            <Skill name="Git & GitHub" status="Intermediate" />
          </div>
        </motion.div>

        <motion.div variants={cardVariants} whileHover={{ y: -4 }} className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-7">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white"><BrainCircuit size={24} /></div>
            <h3 className="text-2xl font-black text-white">Machine Learning</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">Learning ML from the fundamentals, with a focus on understanding algorithms and implementing them.</p>
          <div className="space-y-3">
            <Skill name="K-Nearest Neighbors (KNN)" status="Studied" />
            <Skill name="Support Vector Machines (SVM)" status="Studied" />
            <Skill name="ML foundations" status="In progress" />
          </div>
        </motion.div>

        <motion.div variants={cardVariants} whileHover={{ y: -4 }} className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-4 mb-7">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white"><Database size={24} /></div>
            <h3 className="text-2xl font-black text-white">Data & Tools</h3>
          </div>
          <div className="space-y-3">
            <Skill name="NumPy" status="Learning" />
            <Skill name="Pandas" status="Learning" />
            <Skill name="Matplotlib / Seaborn" status="For data analysis" />
            <Skill name="APIs & workflow automation" status="Basic experience" />
          </div>
        </motion.div>

        <motion.div variants={cardVariants} whileHover={{ y: -4 }} className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-7">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white"><Compass size={24} /></div>
            <h3 className="text-2xl font-black text-white">Areas of Interest</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Artificial Intelligence", "Machine Learning", "Computer Vision", "Robotics", "Intelligent Systems", "UAV Systems"].map((item) => (
              <span key={item} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">{item}</span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 leading-relaxed">These are areas I’m exploring, not claims of professional-level expertise.</p>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default SkillsSection;
