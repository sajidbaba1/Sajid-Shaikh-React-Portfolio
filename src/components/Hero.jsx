import React, { useState, useEffect, useRef } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.2; // Set low volume
        audioRef.current.play().catch((error) => {
          console.warn("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const profileVariants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 4px 20px rgba(0, 0, 0, 0.4)",
        "0 6px 30px rgba(0, 0, 0, 0.6)",
        "0 4px 20px rgba(0, 0, 0, 0.4)"
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="hero-container">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/src/assets/jungle-loop.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <audio ref={audioRef} src="/src/assets/music1.mp3" loop />
      <div className="hero-content">
        <motion.img
          src="/src/assets/profile.jpg"
          alt="Profile"
          className="hero-profile-img"
          variants={profileVariants}
          animate="animate"
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
        <button
          onClick={toggleAudio}
          className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>
    </div>
  );
}