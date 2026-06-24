import React, {useContext, useState, useEffect, useRef} from "react";
import "./Achievement.scss";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const rarities = ["LEGENDARY", "EPIC", "RARE", "MYTHIC"];
const xpValues = [500, 400, 350, 300];
const stars = [3, 2, 2, 1];

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {threshold: 0.2}
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (unlockedCount >= achievementSection.achievementsCards.length) return;
    const timer = setTimeout(() => {
      setUnlockedCount(prev => prev + 1);
    }, 800);
    return () => clearTimeout(timer);
  }, [started, unlockedCount]);

  if (!achievementSection.display) return null;

  return (
    <div className="unlock-section" id="achievements" ref={ref}>
      <Fade bottom duration={1000} distance="20px">
        <div className="unlock-header">
          <h1 className="unlock-heading">Achievements</h1>
          <div className="unlock-xp-total">
            <span className="unlock-xp-icon">⚡</span>
            <span className="unlock-xp-label">
              {achievementSection.achievementsCards.reduce((sum, _, i) => sum + (xpValues[i] || 300), 0)} XP EARNED
            </span>
          </div>
        </div>
      </Fade>

      <div className="unlock-list">
        {achievementSection.achievementsCards.map((card, i) => {
          const isUnlocked = i < unlockedCount;
          const rarity = rarities[i] || "RARE";
          const xp = xpValues[i] || 300;
          const starCount = stars[i] || 1;

          return (
            <div
              key={i}
              className={`unlock-card ${isUnlocked ? "unlock-card-visible" : ""} ${isDark ? "unlock-card-dark" : ""}`}
            >
              <div className="unlock-card-glow"></div>

              <div className="unlock-top-bar">
                <div className="unlock-badge-area">
                  <span className="unlock-lock-icon">{isUnlocked ? "🔓" : "🔒"}</span>
                  <span className="unlock-badge-text">ACHIEVEMENT UNLOCKED</span>
                </div>
              </div>

              <div className="unlock-content">
                <div className="unlock-image-wrap">
                  <img className="unlock-image" src={card.image} alt={card.imageAlt} />
                </div>
                <div className="unlock-info">
                  <div className="unlock-title-row">
                    <h3 className="unlock-title">{card.title}</h3>
                    <span className={`unlock-rarity unlock-rarity-${rarity.toLowerCase()}`}>
                      {rarity}
                    </span>
                  </div>
                  <p className="unlock-desc">{card.subtitle}</p>
                  {card.footerLink && card.footerLink[0] && (
                    <a
                      href={card.footerLink[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="unlock-link"
                    >
                      {card.footerLink[0].name} →
                    </a>
                  )}
                </div>
              </div>

              <div className="unlock-progress-bar">
                <div className={`unlock-progress-fill ${isUnlocked ? "unlock-progress-complete" : ""}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
