import React from "react";
import {Fade} from "react-reveal";
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
                className="software-skill-inline"
                name={skills.skillName}
                style={{"--skill-index": i}}
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

            const wrapped = skills.docLink ? (
              <a
                href={skills.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-link"
              >
                {content}
              </a>
            ) : (
              content
            );

            return (
              <Fade bottom duration={800} delay={i * 80} key={i}>
                {wrapped}
              </Fade>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
