import React, {useContext} from "react";
import "./Contact.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {day: "2-digit", month: "short", year: "numeric"}).toUpperCase();
  const timeStr = today.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit", hour12: false});

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="boarding-section" id="contact">
        <h1 className="boarding-heading">Let's Connect</h1>
        <p className={isDark ? "dark-mode boarding-subtitle" : "boarding-subtitle"}>
          Grab your boarding pass and let's take off together
        </p>

        <div className={isDark ? "boarding-pass boarding-pass-dark" : "boarding-pass"}>
          <div className="boarding-left">
            <div className="boarding-airline">
              <span className="boarding-logo">✈</span>
              <span className="boarding-airline-name">APEKSHA GANGURDE</span>
            </div>

            <div className="boarding-route">
              <div className="boarding-city">
                <span className="boarding-code">YOU</span>
                <span className="boarding-city-name">Visitor</span>
              </div>
              <div className="boarding-flight-line">
                <span className="boarding-plane-icon">✈</span>
                <div className="boarding-dashed"></div>
              </div>
              <div className="boarding-city">
                <span className="boarding-code">APK</span>
                <span className="boarding-city-name">Apeksha</span>
              </div>
            </div>

            <div className="boarding-details">
              <div className="boarding-field">
                <span className="boarding-field-label">GATE</span>
                <a href={"mailto:" + contactInfo.email_address} className="boarding-field-value boarding-link">
                  Gmail
                </a>
              </div>
              <div className="boarding-field">
                <span className="boarding-field-label">SEAT</span>
                <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="boarding-field-value boarding-link">
                  LinkedIn
                </a>
              </div>
              <div className="boarding-field">
                <span className="boarding-field-label">DATE</span>
                <span className="boarding-field-value">{dateStr}</span>
              </div>
              <div className="boarding-field">
                <span className="boarding-field-label">BOARDING</span>
                <span className="boarding-field-value">{timeStr}</span>
              </div>
            </div>

            <div className="boarding-details boarding-details-bottom">
              <div className="boarding-field">
                <span className="boarding-field-label">PHONE</span>
                <a href={"tel:" + contactInfo.number} className="boarding-field-value boarding-link">
                  {contactInfo.number}
                </a>
              </div>
              <div className="boarding-field">
                <span className="boarding-field-label">EMAIL</span>
                <a href={"mailto:" + contactInfo.email_address} className="boarding-field-value boarding-link boarding-email-val">
                  {contactInfo.email_address}
                </a>
              </div>
              <div className="boarding-field">
                <span className="boarding-field-label">GITHUB</span>
                <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="boarding-field-value boarding-link">
                  apekshagangurde
                </a>
              </div>
            </div>
          </div>

          <div className="boarding-tear"></div>

          <div className="boarding-right">
            <span className="boarding-airline-name-sm">APEKSHA GANGURDE</span>
            <div className="boarding-right-route">
              <span className="boarding-code">YOU</span>
              <span className="boarding-plane-sm">✈</span>
              <span className="boarding-code">APK</span>
            </div>
            <div className="boarding-field">
              <span className="boarding-field-label">PASSENGER</span>
              <span className="boarding-field-value">You</span>
            </div>
            <div className="boarding-field">
              <span className="boarding-field-label">FLIGHT</span>
              <span className="boarding-field-value">AG-2025</span>
            </div>
            <div className="boarding-field">
              <span className="boarding-field-label">CLASS</span>
              <span className="boarding-field-value">Developer</span>
            </div>
            <div className="boarding-barcode">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="boarding-bar"
                  style={{height: `${15 + Math.random() * 20}px`}}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
