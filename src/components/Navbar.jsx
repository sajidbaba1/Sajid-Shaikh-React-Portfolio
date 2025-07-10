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
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const title = "Sajid Shaikh Portfolio";

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-white/20 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div
            className="text-2xl font-bold text-white"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <a
                  href={item.href}
                  className="text-white text-lg font-semibold hover:text-indigo-500 transition-colors"
                >
                  {item.name}
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}