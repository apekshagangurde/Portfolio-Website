import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-timeline">
                {workExperiences.experience.map((card, i) => (
                  <Fade bottom duration={1000} distance="30px" delay={i * 200} key={i}>
                    <div className={`timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
                      <div className="timeline-dot"></div>
                      <ExperienceCard
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          companyUrl: card.companyUrl,
                          role: card.role,
                          descBullets: card.descBullets
                        }}
                      />
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
