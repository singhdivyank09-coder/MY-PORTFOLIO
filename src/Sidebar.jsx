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
    hidden: { x: -250 },
    visible: { 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      x: -250, 
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close on mobile after click
    
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
    <div className="h-full flex flex-col justify-between p-6">
      <div>
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 mt-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 mb-4">
            <img 
              src="/profile.jpg" 
              alt="Divyank Portrait" 
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <h2 className="text-white text-xl font-bold tracking-wider">DIVYANK</h2>
          <p className="text-gray-400 text-sm mt-1 font-medium">Full Stack Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.name;

            return (
              <motion.button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors duration-300 w-full text-left
                  ${isActive 
                    ? "bg-[#FFC107] text-gray-900 shadow-md" 
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <Icon size={20} className={isActive ? "text-gray-900" : ""} />
                <span className="font-semibold text-sm uppercase tracking-wider">{item.name}</span>
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Footer Socials */}
      <div className="flex justify-center space-x-4 pb-4">
        <motion.a target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, color: "#FFC107" }} href="https://github.com/singhdivyank09-coder" className="text-gray-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </motion.a>
        <motion.a target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, color: "#FFC107" }} href="https://www.linkedin.com/in/divyank-singh-4b0055299" className="text-gray-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </motion.a>
        <motion.a whileHover={{ scale: 1.1, color: "#FFC107" }} href="mailto:singhdivyank@gmail.com" className="text-gray-400 transition-colors">
          <Mail size={22} />
        </motion.a>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-[#FFC107] rounded-md shadow-lg"
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
            className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Fixed) */}
      <motion.aside 
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:block fixed top-0 left-0 w-[250px] h-screen bg-[#111111] z-50 shadow-2xl border-r border-gray-800"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside 
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-0 left-0 w-[250px] h-screen bg-[#111111] z-50 shadow-2xl border-r border-gray-800"
          >
            {/* Close button for mobile inside sidebar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
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
