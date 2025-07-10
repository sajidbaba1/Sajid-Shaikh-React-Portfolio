import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectSlider.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    handleClose();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    handleClose();
  };

  return (
    <div id="projects" className="relative py-12 bg-[#0b0b0b] text-white">
      <h2 className="text-center text-4xl font-bold mb-10">My Projects</h2>
      <div className="container relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="glass-button absolute left-4 z-10"
        >
          <ChevronLeftIcon className="h-10 w-10 text-white" />
        </button>
        <div className="flex gap-8 overflow-hidden">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className={`project-card cursor-pointer ${index === currentIndex ? 'active' : 'hidden'}`}
              onClick={() => handlePlay(index)}
            >
              <video
                src={proj.video}
                className="project-video"
                muted
              />
              <audio id={`audio-${index}`} src={proj.music} loop />
              <div className="project-title">{proj.title}</div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="glass-button absolute right-4 z-10"
        >
          <ChevronRightIcon className="h-10 w-10 text-white" />
        </button>
      </div>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fullscreen-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="modal-content glass-border">
              <video
                src={projects[activeIndex].video}
                autoPlay
                controls
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <button
                onClick={handleClose}
                className="close-button absolute top-4 right-6 text-white text-2xl"
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