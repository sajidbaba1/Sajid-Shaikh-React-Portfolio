import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CertificateLibrary from "./components/CertificateLibrary";
import ProjectSlider from "./components/ProjectSlider";
import ResumeSection from "./components/ResumeSection";
import SkillsShowcase from "./components/SkillsShowcase";
import useScrollFade from "./components/ScrollFade";
import "./index.css";

export default function App() {
  useScrollFade();

  return (
    <div id="root">
      <Navbar />
      <div className="section"><Hero /></div>
      <div className="section"><CertificateLibrary /></div>
      <div className="section"><ProjectSlider /></div>
      <div className="section"><ResumeSection /></div>
      <div className="section"><SkillsShowcase /></div>
    </div>
  );
}