// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css"; // Create this for video background styling

const titles = [
  "I am a Software Developer",
  "I am a WordPress Developer",
  "I am a UI/UX Designer",
  "I am a Mobile App Developer",
  "I am a DSA Freak",
  "I am an AI Agent Developer",
  "I am a DevOps Engineer",
  "I am a Full Stack Developer"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // change every 2 seconds
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src="/src/assets/jungle-loop.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Content */}
      <div className="text-center">
        <img
          src="/src/assets/profile.jpg"
          alt="Profile"
          className="mx-auto w-40 h-40 rounded-full border-4 border-white hover:brightness-125 transition duration-500 shadow-lg"
        />
        <div className="mt-6 text-white text-3xl md:text-4xl font-bold">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {titles[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
