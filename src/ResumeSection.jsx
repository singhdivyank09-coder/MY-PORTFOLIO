import { motion } from "framer-motion";
import { GraduationCap, Code2, Users, Trophy, Link as LinkIcon, Terminal } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ResumeSection = () => (
  <motion.section id="resume" initial="hidden" whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-6xl w-full mx-auto relative z-10">
      <motion.div variants={containerVariants} className="text-center mb-16">
        <motion.div variants={cardVariants} className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-px bg-purple-500/50" />
          <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs">Background & Experience</span>
          <div className="w-10 h-px bg-purple-500/50" />
        </motion.div>
        <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-black text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Journey.</span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={containerVariants} className="space-y-8">
          <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white"><GraduationCap size={25} /></div>
              <h3 className="text-2xl font-black text-white">Education</h3>
            </div>
            <h4 className="text-xl font-bold text-white">B.Tech — Computer Science & Engineering</h4>
            <p className="text-purple-300 text-sm font-semibold mt-2">Artificial Intelligence & Machine Learning</p>
            <p className="text-gray-400 text-sm mt-2">JSPM University, Pune · 2025 – Present</p>
            <div className="mt-5 inline-flex px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200">
              Current CGPA: <strong className="ml-2 text-white">8.53</strong>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white"><Code2 size={25} /></div>
              <h3 className="text-2xl font-black text-white">Current Learning</h3>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><strong className="text-white">Machine Learning:</strong> Studied KNN and SVM while building foundations from scratch.</li>
              <li><strong className="text-white">Programming:</strong> Strengthening Python and learning C, Java and C++.</li>
              <li><strong className="text-white">Data Structures:</strong> Learning core DSA concepts and implementation in C.</li>
              <li><strong className="text-white">Data analysis:</strong> Developing familiarity with NumPy, Pandas and visualization tools.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-8">
          <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white"><Trophy size={25} /></div>
              <h3 className="text-2xl font-black text-white">Hackathon</h3>
            </div>
            <h4 className="text-xl font-bold text-white">SIH26054</h4>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Selected through the college-level internal hackathon to work on the Smart India Hackathon problem statement SIH26054.
            </p>
            <span className="inline-flex mt-5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider">Internal selection</span>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white"><Users size={25} /></div>
              <h3 className="text-2xl font-black text-white">Leadership & Activities</h3>
            </div>
            <h4 className="text-lg font-bold text-white">Designing Team Co-Head</h4>
            <p className="text-purple-300 text-sm font-semibold mt-1">SCOS E-Cell · JSPM University</p>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Contributed to the creative and visual communication work for Prarambh Startup Fest 2026, including event graphics, banners, posters and social media content.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white"><LinkIcon size={25} /></div>
              <h3 className="text-2xl font-black text-white">Find Me Online</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: "GitHub", href: "https://github.com/singhdivyank09-coder", icon: "github" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/divyank-singh-4b0055299", icon: "linkedin" },
                { name: "HackerRank", href: "https://www.hackerrank.com/profile/singhdivyank09", icon: "terminal" },
              ].map((profile) => (
                <a key={profile.name} href={profile.href} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
                  <span className="text-gray-200 text-sm font-semibold">{profile.name}</span>
                  {profile.icon === "terminal" ? <Terminal size={18} className="text-gray-400" /> : <span className="text-purple-300 text-xs">↗</span>}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default ResumeSection;
