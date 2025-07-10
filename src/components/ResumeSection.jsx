// src/components/ResumeSection.jsx
import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function ResumeSection() {
  return (
    <div className="py-16 bg-[#0b0b0b] text-white flex justify-center">
      <div className="resume-glass-card p-8 rounded-xl shadow-md text-center max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-4">📄 My Resume</h2>
        <p className="mb-6 text-gray-300">
          Download my detailed resume to learn more about my education,
          experience, and projects.
        </p>
        <a
          href="/Sajid_Shaikh_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition"
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          Download Resume
        </a>
      </div>
    </div>
  );
}
