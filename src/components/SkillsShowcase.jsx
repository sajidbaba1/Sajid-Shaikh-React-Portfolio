// src/components/SkillsShowcase.jsx
import React from "react";
import "./SkillsShowcase.css";

const skills = [
  {
    name: "Java",
    icon: "/src/assets/icons/java.png",
    level: 5,
  },
  {
    name: "Spring Boot",
    icon: "/src/assets/icons/spring.png",
    level: 4,
  },
  {
    name: "React",
    icon: "/src/assets/icons/react.png",
    level: 5,
  },
  {
    name: "Tailwind CSS",
    icon: "/src/assets/icons/tailwind.png",
    level: 4,
  },
  {
    name: "JavaScript",
    icon: "/src/assets/icons/javascript.png",
    level: 5,
  },
  {
    name: "MySQL",
    icon: "/src/assets/icons/mysql.png",
    level: 4,
  },
  {
    name: "WordPress",
    icon: "/src/assets/icons/wordpress.png",
    level: 3,
  },
  {
    name: "Figma",
    icon: "/src/assets/icons/figma.png",
    level: 4,
  },
];

export default function SkillsShowcase() {
  return (
    <div className="py-16 bg-[#090909] text-white text-center">
      <h2 className="text-4xl font-bold mb-12">🧠 My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="glass-skill-card p-5 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition duration-300">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 text-lg ${
                    i < skill.level ? "opacity-100" : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
