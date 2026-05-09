import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

// Dummy Project Data
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
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 }
  }
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <motion.section 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen bg-[#F8F9FA] py-20 px-6 font-sans relative"
    >
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <motion.div variants={containerVariants} className="text-center md:text-left mb-12">
          <motion.span variants={cardVariants} className="text-gray-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 block">
            My Work
          </motion.span>
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative">
            Projects
            <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-[#FFC107] rounded-full"></div>
          </motion.h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={containerVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={cardVariants}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm ${
                filter === cat
                  ? "bg-[#FFC107] text-gray-900"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group relative"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a whileHover={{ scale: 1.1 }} href={project.linkDemo} className="w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center text-gray-900 shadow-md">
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href={project.linkCode} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md">
                      <Code2 size={20} />
                    </motion.a>
                  </div>
                  {/* Coming Soon Badge */}
                  {project.isComingSoon && (
                    <div className="absolute top-4 right-4 bg-gray-900 text-[#FFC107] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ProjectsSection;
