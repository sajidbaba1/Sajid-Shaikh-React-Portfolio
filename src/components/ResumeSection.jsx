import React from "react";
import "./ResumeSection.css";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function ResumeSection() {
  return (
    <div id="resume" className="py-16 bg-[#0b0b0b] text-white section">
      <div className="container flex justify-center">
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
            aria-label="Download Resume PDF"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}