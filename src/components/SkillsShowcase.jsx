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
  const halfway = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, halfway);
  const rightSkills = skills.slice(halfway);

  return (
    <div id="skills" className="py-16 bg-[#090909] text-white text-center">
      <h2 className="text-4xl font-bold mb-12">🧠 My Skills</h2>
      <div className="container flex justify-center gap-8">
        <table className="glass-skill-table">
          <tbody>
            {leftSkills.map((skill, index) => (
              <tr key={index} className="glass-skill-card">
                <td className="p-4">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </td>
                <td className="p-4 text-left">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`skill-star ${i < skill.level ? "opacity-100 text-yellow-400" : "opacity-30"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="glass-skill-table">
          <tbody>
            {rightSkills.map((skill, index) => (
              <tr key={index} className="glass-skill-card">
                <td className="p-4">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </td>
                <td className="p-4 text-left">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`skill-star ${i < skill.level ? "opacity-100 text-yellow-400" : "opacity-30"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}