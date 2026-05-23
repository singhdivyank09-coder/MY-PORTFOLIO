import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, X, Calendar, Building2, Eye, ShieldAlert } from "lucide-react";

const categories = ["All", "Cloud & AI", "Development", "Problem Solving", "Milestones"];

const certificatesData = [
  {
    id: 1,
    title: "AWS Certified AI/ML Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025 (Planned)",
    category: "Cloud & AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "In-depth validation of overall understanding of AWS Cloud, focusing on core AI/ML services, data engineering pipelines, and foundational security.",
    tags: ["AWS", "AI/ML", "Cloud Architecture"],
    status: "Planned",
    verificationLink: "https://aws.amazon.com/certification/",
    accentColor: "from-amber-500 to-orange-600",
    glowColor: "rgba(245,158,11,0.15)"
  },
  {
    id: 2,
    title: "Problem Solving (Gold Badge)",
    issuer: "HackerRank",
    date: "Ongoing",
    category: "Problem Solving",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Evaluates intermediate to advanced proficiency in data structures, algorithms (searching, sorting, dynamic programming), and core computer science fundamentals.",
    tags: ["Algorithms", "Data Structures", "C++"],
    status: "Verified",
    verificationLink: "https://www.hackerrank.com/profile/singhdivyank09",
    accentColor: "from-[#2EC866] to-[#00EA64]",
    glowColor: "rgba(46,200,102,0.15)"
  },
  {
    id: 3,
    title: "Python Developer Certification",
    issuer: "HackerRank",
    date: "Jan 2026",
    category: "Development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Validates comprehensive knowledge of Python syntax, object-oriented concepts, error handling, complex file I/O operations, and functional programming conventions.",
    tags: ["Python", "OOP", "Software Eng"],
    status: "Verified",
    verificationLink: "https://www.hackerrank.com/profile/singhdivyank09",
    accentColor: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)"
  },
  {
    id: 4,
    title: "Smart India Hackathon Finalist",
    issuer: "Ministry of Education, Govt. of India",
    date: "SIH 2025",
    category: "Milestones",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg",
    description: "Recognized for qualifying and competing at the national level, solving critical engineering and automation problems for national ministries.",
    tags: ["Hackathon", "National Level", "Automation"],
    status: "Completed",
    verificationLink: "https://sih.gov.in/",
    accentColor: "from-purple-500 to-indigo-600",
    glowColor: "rgba(168,85,247,0.15)"
  },
  {
    id: 5,
    title: "Suvidha Kiosk Initiative",
    issuer: "CDAC (Center for Dev of Advanced Computing)",
    date: "Collaborator",
    category: "Milestones",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/C-DAC_logo.svg/1200px-C-DAC_logo.svg.png",
    description: "Partnered in technical implementations for developing smart automated kiosks delivering digital public utilities to rural communities in Pune.",
    tags: ["IoT", "Public Utility", "CDAC"],
    status: "Completed",
    verificationLink: "https://www.cdac.in/",
    accentColor: "from-red-500 to-pink-500",
    glowColor: "rgba(239,68,68,0.15)"
  }
];

// Helper for external link arrow
const ArrowUpRight = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4 }
  }
};

const CertificatesSection = () => {
  const [filter, setFilter] = useState("All");
  const [activeCert, setActiveCert] = useState(null);

  const filteredCerts = certificatesData.filter(
    (cert) => filter === "All" || cert.category === filter
  );

  return (
    <motion.section 
      id="certificates"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center lg:text-left mb-16">
          <motion.div variants={cardVariants} className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
            <div className="w-10 h-[1px] bg-purple-500/50" />
            <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs">
              Credentials
            </span>
          </motion.div>
          <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-black text-white">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Honors.</span>
          </motion.h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={containerVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={cardVariants}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 border ${
                filter === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between"
                style={{
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px -15px ${cert.accentColor.includes('amber') ? 'rgba(245,158,11,0.1)' : cert.accentColor.includes('blue') ? 'rgba(59,130,246,0.1)' : 'rgba(168,85,247,0.1)'}`
                }}
              >
                {/* Visual Header / Glow */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-purple-500 to-blue-500 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="p-8">
                  {/* Top Line: Category & Logo */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-400">
                      {cert.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center p-2 border border-white/5 group-hover:border-purple-500/20 transition-all">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-xs mb-4 font-bold tracking-tight">
                    <Building2 size={12} className="mr-1.5 text-gray-600" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Area */}
                <div className="px-8 pb-8 pt-4 border-t border-white/5 flex flex-col space-y-4">
                  {/* Date & Status */}
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={12} className="mr-1.5 text-gray-600" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.status === "Verified" ? (
                      <span className="flex items-center text-green-400 space-x-1">
                        <ShieldCheck size={12} />
                        <span>{cert.status}</span>
                      </span>
                    ) : cert.status === "Planned" ? (
                      <span className="flex items-center text-amber-400/80 space-x-1">
                        <ShieldAlert size={12} />
                        <span>{cert.status}</span>
                      </span>
                    ) : (
                      <span className="flex items-center text-purple-400/80 space-x-1">
                        <ShieldCheck size={12} />
                        <span>{cert.status}</span>
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button 
                      onClick={() => setActiveCert(cert)}
                      className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-white transition-all flex items-center justify-center space-x-1.5 cursor-pointer group/btn"
                    >
                      <Eye size={12} className="text-gray-400 group-hover/btn:text-white transition-colors" />
                      <span>View</span>
                    </button>
                    <a 
                      href={cert.verificationLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/20 rounded-xl text-[9px] font-black uppercase tracking-widest text-purple-400 hover:text-white transition-all flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span>Verify</span>
                      <ArrowUpRight size={10} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* LIGHTBOX MODAL: Custom Digital Interactive Certificate */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#07041a] rounded-[2.5rem] border border-white/15 p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Closing Button */}
              <button 
                onClick={() => setActiveCert(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer z-25"
              >
                <X size={18} />
              </button>

              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

              {/* Inner Certificate Container */}
              <div className="relative border border-white/10 rounded-[1.8rem] p-6 md:p-8 bg-black/40 backdrop-blur-md flex flex-col justify-between h-full min-h-[400px]">
                
                {/* Top Corner Details */}
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-400/80">
                    Secure Digital Credential
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#10B981]" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Live Server Verified</span>
                  </div>
                </div>

                {/* Certificate Title Area */}
                <div className="text-center my-6 flex-1 flex flex-col justify-center items-center">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl text-white mb-6 shadow-xl shadow-purple-500/25">
                    <Award size={48} />
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">
                    This certifies that
                  </span>
                  
                  <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-4 tracking-tight">
                    DIVYANK SINGH
                  </h4>
                  
                  <p className="text-[11px] text-gray-400 max-w-md mx-auto leading-relaxed opacity-85 px-4 mb-4">
                    has successfully achieved and demonstrated technical competency for
                  </p>
                  
                  <h5 className="text-xl font-bold text-white tracking-wide uppercase px-6 py-2 bg-white/5 border border-white/5 rounded-2xl mb-4">
                    {activeCert.title}
                  </h5>

                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                    Authorized and Issued by {activeCert.issuer}
                  </p>
                </div>

                {/* Bottom Metadata Panel */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-gray-500">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-1.5">ISSUED:</span>
                    <span className="text-gray-300">{activeCert.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-1.5">CREDENTIAL STATUS:</span>
                    <span className={activeCert.status === "Verified" || activeCert.status === "Completed" ? "text-green-400" : "text-amber-400"}>
                      {activeCert.status}
                    </span>
                  </div>
                  <a 
                    href={activeCert.verificationLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-purple-400 hover:text-white transition-colors duration-300 cursor-pointer space-x-1"
                  >
                    <span>SECURE LOG</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default CertificatesSection;
