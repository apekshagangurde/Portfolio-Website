import React, {useContext, useState} from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [expandedStation, setExpandedStation] = useState(0);

  if (!workExperiences.display) return null;

  const experiences = workExperiences.experience;

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="metro-section">
          <div className="metro-header">
            <h1 className="metro-heading">Experience</h1>
            <div className="metro-line-badge">
              <span className="metro-line-icon">●</span>
              <span className="metro-line-name">Career Line</span>
            </div>
          </div>

          <div className="metro-map">
            <div className="metro-track"></div>

            {experiences.map((exp, i) => {
              const isCurrent = i === 0;
              const isExpanded = expandedStation === i;

              return (
                <Fade bottom duration={1000} distance="30px" delay={i * 200} key={i}>
                  <div
                    className={`metro-station ${isExpanded ? "metro-station-expanded" : ""}`}
                    onClick={() => setExpandedStation(isExpanded ? -1 : i)}
                  >
                    <div className="metro-station-dot-area">
                      <div className={`metro-station-dot ${isCurrent ? "metro-station-current" : ""}`}>
                        {isCurrent && <div className="metro-pulse"></div>}
                      </div>
                      {isCurrent && <span className="metro-you-are-here">YOU ARE HERE</span>}
                    </div>

                    <div className={isDark ? "metro-card metro-card-dark" : "metro-card"}>
                      <div className="metro-card-header">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="metro-logo-link"
                            onClick={e => e.stopPropagation()}
                          >
                            <img className="metro-logo" src={exp.companylogo} alt={exp.company} />
                          </a>
                        ) : (
                          <img className="metro-logo" src={exp.companylogo} alt={exp.company} />
                        )}
                        <div className="metro-card-info">
                          <h3 className="metro-role">{exp.role}</h3>
                          <span className="metro-company">{exp.company}</span>
                          <span className="metro-date">{exp.date}</span>
                        </div>
                        <span className={`metro-expand-icon ${isExpanded ? "metro-expand-open" : ""}`}>
                          ▾
                        </span>
                      </div>

                      {isExpanded && exp.descBullets && (
                        <div className="metro-card-details">
                          {exp.descBullets.map((bullet, j) => (
                            <div key={j} className="metro-bullet">
                              <span className="metro-bullet-dot">→</span>
                              <span className="metro-bullet-text">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Fade>
              );
            })}

            <div className="metro-terminus">
              <div className="metro-station-dot metro-terminus-dot"></div>
              <span className="metro-terminus-label">More stations coming...</span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
