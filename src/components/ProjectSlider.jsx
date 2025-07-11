import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectSlider.css";

const projects = [
  {
    id: 1,
    title: "B2B Multivendor Web Application",
    description: "A full-stack B2B e-commerce platform with vendor management, product listings, and secure transactions using Java, Spring Boot, MySQL, and REST APIs.",
    image: "/public/assets/certificate1.jpg",
    bgColor: "#ffaaaa",
    music: "/public/assets/music1.mp3",
    github: "https://github.com/sajibbabu/B2B-Ecommerce-Multivendor-Web-Application"
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A web application for managing student records with CRUD operations, built using Java, Spring Boot, MySQL, CSS, HTML, and Bootstrap.",
    video: "/public/assets/project2.mp4",
    bgColor: "#aaffaa",
    music: "/public/assets/music2.mp3",
    github: "https://github.com/sajibbabu/Student-Management-system-plus"
  },
  {
    id: 3,
    title: "Online Bookstore",
    description: "A full-stack application with user registration, book catalog browsing, and purchase functionality, developed with Java, Spring Boot, MySQL, and REST APIs.",
    video: "/public/assets/project3.mp4",
    bgColor: "#aaaaff",
    music: "/public/assets/music3.mp3"
  }
];

export default function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRef = useRef(null);

  const handlePlay = (index) => {
    setActiveIndex(index);
    const audio = document.getElementById(`audio-${index}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    if (videoRef.current) {
      videoRef.current.requestFullscreen().catch((error) => {
        console.warn("Fullscreen request failed:", error);
      });
    }
  };

  const handleClose = () => {
    const audio = document.getElementById(`audio-${activeIndex}`);
    if (audio) audio.pause();
    if (videoRef.current && document.fullscreenElement) {
      document.exitFullscreen();
    }
    setActiveIndex(null);
  };

  return (
    <div className="relative py-12 bg-[#0b0b0b] text-white">
      <h2 className="text-center text-4xl font-bold mb-10">My Projects</h2>
      <div className="container flex gap-8 justify-center flex-wrap">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="project-card cursor-pointer"
            onClick={() => handlePlay(index)}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <video
              src={proj.video}
              className="project-video"
              muted
            />
            <audio id={`audio-${index}`} src={proj.music} loop />
            <div className="project-title">{proj.title}</div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fullscreen-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ backgroundColor: projects[activeIndex].bgColor }}
          >
            <div className="modal-content">
              <motion.video
                ref={videoRef}
                src={projects[activeIndex].video}
                autoPlay
                controls
                className="w-full h-auto rounded-2xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold">{projects[activeIndex].title}</h3>
                <p className="mt-2">{projects[activeIndex].description}</p>
                {projects[activeIndex].github && (
                  <motion.a
                    href={projects[activeIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View on GitHub
                  </motion.a>
                )}
              </div>
              <motion.button
                onClick={handleClose}
                className="close-button absolute top-4 right-6 text-white text-2xl"
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                ✖
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}