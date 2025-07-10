import React from "react";
import "./ResumeSection.css";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function ResumeSection() {
  return (
    <div className="py-16 bg-[#0b0b0b] text-white flex justify-center">
      <div className="resume-glass-card text-center">
        <h2 className="resume-title">📄 My Resume</h2>
        <p className="resume-text">
          Download my detailed resume to learn more about my education,
          experience, and projects.
        </p>
        <a
          href="/Sajid_Shaikh_Resume.pdf"
          download
          className="resume-button"
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          Download Resume
        </a>
      </div>
    </div>
  );
}