import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CertificateLibrary.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const certificates = [
  {
    id: 1,
    image: "/src/assets/certificate1.jpg",
    title: "React Developer",
  },
  {
    id: 2,
    image: "/src/assets/certificate2.jpg",
    title: "WordPress Expert",
  },
  {
    id: 3,
    image: "/src/assets/certificate3.jpg",
    title: "DSA & Problem Solving",
  },
  {
    id: 4,
    image: "/src/assets/certificate4.jpg",
    title: "UI/UX Design",
  },
  {
    id: 5,
    image: "/src/assets/certificate5.jpg",
    title: "DevOps Engineer",
  },
];

export default function CertificateLibrary() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const variants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <div className="py-12 bg-[#0b0b0b] text-white text-center">
      <h2 className="text-4xl font-bold mb-10">🗂️ My Certificates</h2>
      <div className="container relative flex items-center justify-center">
        <motion.button
          onClick={handlePrev}
          className="glass-button absolute left-4 z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeftIcon className="h-10 w-10 text-white" />
        </motion.button>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="certificate-glass-frame"
        >
          <img
            src={certificates[currentIndex].image}
            alt={certificates[currentIndex].title}
            className="certificate-image"
          />
          <p className="certificate-title">{certificates[currentIndex].title}</p>
        </motion.div>
        <motion.button
          onClick={handleNext}
          className="glass-button absolute right-4 z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRightIcon className="h-10 w-10 text-white" />
        </motion.button>
      </div>
    </div>
  );
}