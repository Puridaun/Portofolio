import { useState } from "react";
import { techicalSkills } from "./projects-data";

export const TechnicalSkill = () => {
  const [isSkillsOpen, setIsSkillOpen] = useState(false);
  const handleSkillsShow = () => {
    console.log(isSkillsOpen, "isSkillOpen");
    setIsSkillOpen(!isSkillsOpen);
  };
  return (
    <div className="std-section technical-skills">
      <button className="skills-button" onClick={() => handleSkillsShow()}>
        Technical Skills
      </button>

      <div className="skills-container">
        <div
          id="skillsGrid"
          className={`${isSkillsOpen ? "skills-grid-show" : "skills-grid"}`}
        >
          {techicalSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img className="skill-icon" src={`/images/${skill}.png`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
