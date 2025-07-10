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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Lower volume (30%)
    }
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="home" className="hero-container section">
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
        <button
          onClick={toggleAudio}
          className="glass-button absolute bottom-4 right-4 p-2 rounded-full text-white hover:scale-110 transition"
          aria-label={isPlaying ? "Pause Background Music" : "Play Background Music"}
        >
          {isPlaying ? "🔇 Pause Music" : "🔊 Play Music"}
        </button>
        <audio id="home-bgm" ref={audioRef} src="/src/assets/music1.mp3" loop />
      </div>
    </div>
  );
}