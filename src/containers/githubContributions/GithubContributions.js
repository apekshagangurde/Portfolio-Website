import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./GithubContributions.scss";
import {socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function GithubContributions() {
  const {isDark} = useContext(StyleContext);

  const githubUsername = socialMediaLinks.github
    ? socialMediaLinks.github.split("/").filter(Boolean).pop()
    : null;

  if (!githubUsername) return null;

  const chartColor = isDark ? "40c463" : "216e39";
  const chartUrl = `https://ghchart.rshah.org/${chartColor}/${githubUsername}`;

  return (
    <Fade bottom duration={1000} distance="30px">
      <div className="github-contributions-section">
        <h2 className="github-contributions-title">GitHub Contributions</h2>
        <p className={isDark ? "dark-mode github-contributions-subtitle" : "github-contributions-subtitle"}>
          My coding activity over the past year
        </p>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-chart-link"
        >
          <img
            className={isDark ? "github-chart github-chart-dark" : "github-chart"}
            src={chartUrl}
            alt={`${githubUsername}'s GitHub contribution graph`}
          />
        </a>
      </div>
    </Fade>
  );
}
