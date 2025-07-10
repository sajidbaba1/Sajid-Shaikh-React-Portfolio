// src/components/ProjectSlider.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectSlider.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    video: "/src/assets/project1.mp4",
    bgColor: "#ffaaaa",
    music: "/src/assets/music1.mp3"
  },
  {
    id: 2,
    title: "AI Chatbot",
    video: "/src/assets/project2.mp4",
    bgColor: "#aaffaa",
    music: "/src/assets/music2.mp3"
  },
  {
    id: 3,
    title: "DSA Visualizer",
    video: "/src/assets/project3.mp4",
    bgColor: "#aaaaff",
    music: "/src/assets/music3.mp3"
  }
];

export default function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePlay = (index) => {
    setActiveIndex(index);
    const audio = document.getElementById(`audio-${index}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const handleClose = () => {
    const audio = document.getElementById(`audio-${activeIndex}`);
    if (audio) audio.pause();
    setActiveIndex(null);
  };

  return (
    <div className="relative py-10 bg-black bg-opacity-80 text-white">
      <h2 className="text-center text-4xl font-bold mb-8">My Projects</h2>

      <div className="flex gap-6 justify-center flex-wrap px-6">
        {projects.map((proj, index) => (
          <div
            key={proj.id}
            className="relative w-60 h-36 overflow-hidden rounded-xl shadow-lg cursor-pointer border border-white/20 backdrop-blur-sm bg-glass"
            onClick={() => handlePlay(index)}
          >
            <video
              src={proj.video}
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition"
              muted
            />
            <audio id={`audio-${index}`} src={proj.music} loop />
            <div className="absolute bottom-2 left-2 text-sm font-semibold">{proj.title}</div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fullscreen-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: projects[activeIndex].bgColor
            }}
          >
            <div className="modal-content">
              <video
                src={projects[activeIndex].video}
                autoPlay
                controls
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-6 text-white text-2xl bg-glass p-2 rounded-full hover:scale-110 transition"
              >
                ✖
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
