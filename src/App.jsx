import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ProjectSlider from "./components/ProjectSlider";
import CertificateLibrary from "./components/CertificateLibrary";
import SkillsShowcase from "./components/SkillsShowcase";
import ResumeSection from "./components/ResumeSection";
import useScrollFade from "./components/useScrollFade.js";

function App() {
  useEffect(() => {
    useScrollFade();
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero" className="section">
        <HeroSection />
      </div>
      <div id="projects" className="section">
        <ProjectSlider />
      </div>
      <div id="certificates" className="section">
        <CertificateLibrary />
      </div>
      <div id="skills" className="section">
        <SkillsShowcase />
      </div>
      <div id="resume" className="section">
        <ResumeSection />
      </div>
    </>
  );
}

export default App;