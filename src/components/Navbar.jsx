import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#4f46e5",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-white/20 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={linkVariants}
                whileHover="hover"
              >
                <a
                  href={item.href}
                  className="text-white text-lg font-semibold hover:text-indigo-500 transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}