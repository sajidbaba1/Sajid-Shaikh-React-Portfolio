// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="py-12 bg-[#0b0b0b] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="footer-section"
            variants={contactVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="flex items-center gap-2">
              <FaEnvelope /> ss27273030@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhone /> +91-9600269493
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt /> Sant Tukaram Nagar, Pimpri Chinchwad, Pune, Maharashtra, India, 413126
            </p>
          </motion.div>
          <motion.div
            className="footer-section"
            variants={contactVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-4">Co-Curricular Activities</h3>
            <ul className="list-disc list-inside">
              <li>Coding Competitions</li>
              <li>Hackathons</li>
              <li>Technical Workshops</li>
              <li>Member of RISE Club</li>
            </ul>
          </motion.div>
          <motion.div
            className="footer-section"
            variants={contactVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-4">Hobbies</h3>
            <ul className="list-disc list-inside">
              <li>Problem Solving</li>
              <li>Reading</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}