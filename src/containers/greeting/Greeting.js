import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Terminal from "../../components/terminal/Terminal";

import {illustration, greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className="terminal-wrapper">
                <Terminal />
              </div>
              {greeting.currentlyWorkingOn && (
                <a
                  href={greeting.currentlyWorkingOnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="currently-working-on-link"
                >
                  <div className="currently-working-on">
                    <span className="status-dot"></span>
                    <span className="status-text">{greeting.currentlyWorkingOn}</span>
                  </div>
                </a>
              )}
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
