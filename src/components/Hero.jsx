import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

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
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="hero-container">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/src/assets/jungle-loop.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-content">
        <img
          src="/src/assets/profile.jpg"
          alt="Profile"
          className="hero-profile-img"
        />
        <div className="hero-text">
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