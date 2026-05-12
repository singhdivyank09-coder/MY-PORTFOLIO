import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

// Updated Dummy Project Data
const projectsData = [
  {
    id: 1,
    title: "Main Portfolio Project",
    description: "A premium, modern portfolio website showcasing my skills, projects, and journey as a developer.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    linkDemo: "#",
    linkCode: "#",
    isComingSoon: false,
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An artificial intelligence tool that generates stunning images from text prompts using advanced ML models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "React", "OpenAI API"],
    category: "AI",
    linkDemo: "#",
    linkCode: "#",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "A full-stack admin dashboard for managing products, orders, and user analytics with real-time charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Node.js", "MongoDB"],
    category: "Web",
    linkDemo: "#",
    linkCode: "#",
    isComingSoon: true,
  },
  {
    id: 4,
    title: "SaaS Landing Page UI",
    description: "A high-converting, modern landing page design exploration for a hypothetical SaaS startup.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Figma", "UI/UX", "Tailwind"],
    category: "UI",
    linkDemo: "#",
    linkCode: "#",
    isComingSoon: false,
  },
];

const categories = ["All", "Web", "AI", "UI"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
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

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useState(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://portfolio-backend-08kr.onrender.com/api/projects");
        const json = await response.json();
        
        if (json.success) {
          // Map backend data to frontend format
          const mappedProjects = json.data.map((p, index) => ({
            id: p._id || index,
            title: p.title,
            description: p.description,
            image: p.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
            tags: p.tags || [],
            category: p.category || "Web",
            linkDemo: p.link || "#",
            linkCode: p.github || "#",
            isComingSoon: p.isComingSoon || false,
          }));
          setProjects(mappedProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback to initial dummy data if fetch fails
        setProjects(projectsData);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <motion.section 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#030014] py-24 px-6 font-sans relative overflow-hidden"
    >
      {/* Background Decorative Blob */}
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center lg:text-left mb-16">
          <motion.div variants={cardVariants} className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
            <div className="w-10 h-[1px] bg-blue-500/50" />
            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs">
              Portfolio
            </span>
          </motion.div>
          <motion.h2 variants={cardVariants} className="text-5xl md:text-7xl font-black text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects.</span>
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

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loading ? (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4" />
              <p className="text-gray-500 font-black uppercase tracking-widest animate-pulse">Synchronizing Data...</p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl hover:border-purple-500/30 transition-all duration-500"
              >
                {/* Thumbnail Container */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -5 }} 
                      href={project.linkDemo} 
                      className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -5 }} 
                      href={project.linkCode} 
                      className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                      title="View Code"
                    >
                      <Code2 size={20} />
                    </motion.a>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                    <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                      {project.category}
                    </span>
                    {project.isComingSoon && (
                      <span className="px-4 py-1.5 bg-purple-600/20 backdrop-blur-md border border-purple-500/30 text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-tighter text-gray-500 group-hover:text-blue-400 transition-colors duration-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ProjectsSection;
