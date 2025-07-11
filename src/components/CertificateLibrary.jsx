import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CertificateLibrary.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const certificates = [
  {
    id: 1,
    image: "/assets/certificate1.jpg",
    title: "Java 8 Programming",
    institute: "DurgaSoft",
    date: "Completed"
  },
  {
    id: 2,
    image: "/assets/certificate2.jpg",
    title: "Full Stack Web Development - Delta Batch",
    institute: "Apna College",
    date: "Completed"
  },
  {
    id: 3,
    image: "/assets/certificate3.jpg",
    title: "SQL Foundation Course",
    institute: "LinkedIn Learning",
    date: "Completed"
  },
  {
    id: 4,
    image: "/assets/certificate4.jpg",
    title: "Godrej FinTech Data Analytics",
    institute: "Godrej Infotech",
    date: "15 Nov 2024 - 02 Jan 2025"
  },
  {
    id: 5,
    image: "/assets/certificate5.jpg",
    title: "Web Design for Beginners",
    institute: "WebDev Academy",
    date: "03 Apr 2025 - 25 Apr 2025"
  },
  {
    id: 6,
    image: "/assets/certificate6.jpg",
    title: "Java Development Internship",
    institute: "Octanet Services PVT LTD",
    date: "03 Apr 2025 - 25 Apr 2025"
  },
  {
    id: 7,
    image: "/assets/certificate7.jpg",
    title: "Java Development Internship",
    institute: "CodeIt Solutions",
    date: "03 Apr 2025 - 25 Apr 2025"
  },
  {
    id: 8,
    image: "/assets/certificate8.jpg",
    title: "Java Certification Course",
    institute: "KG Coding",
    date: "03 Aug 2025 - 25 Sept 2024"
  },
  {
    id: 9,
    image: "/assets/certificate9.jpg",
    title: "JavaScript Certification Course",
    institute: "KG Coding",
    date: "28 Aug 2025 - 22 Sept 2025"
  },
  {
    id: 10,
    image: "/assets/certificate10.jpg",
    title: "Accenture iAspire Program",
    institute: "Accenture",
    date: "28 Nov 2024 - 20 Jan 2025"
  },
  {
    id: 11,
    image: "/assets/certificate11.jpg",
    title: "Git and GitHub for Devops Engineeers",
    institute: "Valaxy Technologies",
    date: "28 May 2025 - 07 June 2025"
  },
  {
    id: 12,
    image: "/assets/certificate12.jpg",
    title: "Vibe Coding from Scratch",
    institute: "Federico Garay",
    date: "02 May 2025 - 06 June 2025"
  }
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
    exit: { x: -100, opacity: 0 }
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
          <p className="certificate-institute text-sm text-gray-300">{certificates[currentIndex].institute}</p>
          <p className="certificate-date text-sm text-gray-300">{certificates[currentIndex].date}</p>
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