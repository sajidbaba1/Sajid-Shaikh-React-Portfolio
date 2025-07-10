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
    <div id="certificates" className="py-12 bg-[#0b0b0b] text-white text-center section">
      <h2 className="text-4xl font-bold mb-10">🗂️ My Certificates</h2>
      <div className="container relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="glass-button absolute left-8 z-20"
          aria-label="Previous Certificate"
        >
          <ChevronLeftIcon className="h-12 w-12 text-white" />
        </button>
        <div className="flex flex-row gap-6 overflow-x-auto scroll-smooth">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`certificate-glass-frame ${index === currentIndex ? "active" : "hidden"}`}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
              <p className="certificate-title">{certificate.title}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="glass-button absolute right-8 z-20"
          aria-label="Next Certificate"
        >
          <ChevronRightIcon className="h-12 w-12 text-white" />
        </button>
      </div>
    </div>
  );
}