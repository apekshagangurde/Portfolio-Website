import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const content = (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.imageSrc ? (
                  <img
                    className="skill-image"
                    src={skills.imageSrc}
                    alt={skills.skillName}
                  />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );

            if (skills.docLink) {
              return (
                <a
                  key={i}
                  href={skills.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-link"
                >
                  {content}
                </a>
              );
            }
            return content;
          })}
        </ul>
      </div>
    </div>
  );
}
