import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Education.scss";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);

  if (!educationInfo.display) return null;

  const school = educationInfo.schools[0];

  return (
    <div className={`education-section ${isDark ? "dark-mode" : ""}`} id="education">
      <Fade bottom duration={1000} distance="20px">
        <div className="education-title-wrapper">
          <h1 className="education-heading">Education</h1>
        </div>
      </Fade>

      <Fade bottom duration={1200} distance="30px">
        <div className="edu-card-glow-wrapper">
          <div className={`edu-card ${isDark ? "edu-card-dark" : ""}`}>
            <div className="edu-card-top">
              {school.logo && (
                <div className="edu-logo-container">
                  <img
                    className="edu-logo"
                    src={school.logo}
                    alt={school.schoolName}
                  />
                </div>
              )}
              <div className="edu-cgpa-badge">
                <span className="edu-cgpa-number">{school.desc}</span>
              </div>
            </div>

            <div className="edu-card-body">
              <h2 className="edu-school-name">{school.schoolName}</h2>
              <h3 className="edu-degree">{school.subHeader}</h3>
              <p className="edu-duration">{school.duration}</p>
            </div>

            {school.highlights && (
              <div className="edu-highlights">
                {school.highlights.map((item, i) => (
                  <span key={i} className="edu-chip">
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div className="edu-card-shimmer"></div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
