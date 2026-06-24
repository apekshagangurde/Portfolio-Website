import React, {useContext, useState, useEffect} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [activeSection, setActiveSection] = useState("");

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  useEffect(() => {
    const sections = [
      "skills",
      "experience",
      "opensource",
      "achievements",
      "blogs",
      "talks",
      "contact"
    ];

    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" className={activeSection === "skills" ? "active-nav" : ""}>Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" className={activeSection === "experience" ? "active-nav" : ""}>Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" className={activeSection === "opensource" ? "active-nav" : ""}>Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" className={activeSection === "achievements" ? "active-nav" : ""}>Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" className={activeSection === "blogs" ? "active-nav" : ""}>Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" className={activeSection === "talks" ? "active-nav" : ""}>Talks</a>
            </li>
          )}
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active-nav" : ""}>Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
