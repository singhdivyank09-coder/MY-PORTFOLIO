import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, FileText, Mail, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Skills", icon: Code },
    { name: "Projects", icon: Briefcase },
    { name: "Resume", icon: FileText },
    { name: "Contact", icon: Mail },
  ];

  const sidebarVariants = {
    hidden: { x: -280 },
    visible: { 
      x: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
    exit: { 
      x: -280, 
      transition: { duration: 0.3, ease: "easeInOut" } 
    }
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); 
    
    if (section === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const SidebarContent = () => (
    <div className="h-full flex flex-col justify-between p-6 overflow-y-auto">
      <div>
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 mt-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500/30 p-1 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <img 
              src="/profile.jpg" 
              alt="Divyank Portrait" 
              className="w-full h-full object-cover object-top rounded-full filter saturate-[0.8]"
            />
          </motion.div>
          <h2 className="text-white text-xl font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">DIVYANK</h2>
          <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-medium opacity-80">Full Stack Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.name;

            return (
              <motion.button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 w-full text-left group
                  ${isActive 
                    ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white" : "group-hover:text-purple-400"}`}>
                  <Icon size={18} />
                </div>
                <span className="font-semibold text-xs uppercase tracking-[0.1em]">{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#A855F7]"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Footer Socials */}
      <div className="flex justify-center space-x-5 pb-4">
        {[
          { icon: "github", href: "https://github.com/singhdivyank09-coder", svg: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/> },
          { icon: "linkedin", href: "https://www.linkedin.com/in/divyank-singh-4b0055299", svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/> },
          { icon: "mail", href: "mailto:singhdivyank@gmail.com" }
        ].map((social, i) => (
          <motion.a
            key={i}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            href={social.href}
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            {social.icon === "mail" ? (
              <Mail size={20} />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{social.svg}</svg>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-5 left-5 z-50 p-2.5 bg-black/20 backdrop-blur-lg text-purple-400 rounded-xl border border-white/10 shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container (Desktop & Mobile Drawer) */}
      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.aside 
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 left-0 w-[260px] h-screen bg-black/20 backdrop-blur-2xl z-50 shadow-[5px_0_30px_rgba(0,0,0,0.5)] border-r border-white/5 md:block ${isOpen ? "block" : "hidden md:block"}`}
          >
            {/* Close button for mobile inside sidebar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="md:hidden absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
            >
              <X size={24} />
            </button>
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
