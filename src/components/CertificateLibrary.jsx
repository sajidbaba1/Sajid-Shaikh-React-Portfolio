// src/components/CertificateLibrary.jsx
import React, { useState } from "react";
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

  return (
    <div className="py-12 bg-[#0b0b0b] text-white text-center relative">
      <h2 className="text-4xl font-bold mb-10">🗂️ My Certificates</h2>

      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="glass-button absolute left-0 p-2 z-10 hover:scale-110 transition"
        >
          <ChevronLeftIcon className="h-8 w-8 text-white" />
        </button>

        {/* Certificate Frame */}
        <div className="certificate-glass-frame p-4 rounded-xl shadow-md w-[300px] md:w-[450px] h-[320px] md:h-[400px] flex flex-col justify-center items-center">
          <img
            src={certificates[currentIndex].image}
            alt={certificates[currentIndex].title}
            className="object-contain rounded-lg shadow-md max-h-full transition duration-500 hover:scale-105"
          />
          <p className="mt-4 font-semibold text-lg">{certificates[currentIndex].title}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="glass-button absolute right-0 p-2 z-10 hover:scale-110 transition"
        >
          <ChevronRightIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
}
