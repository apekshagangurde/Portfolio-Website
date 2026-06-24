import React, {useState, useEffect, useRef, useContext} from "react";
import {Fade} from "react-reveal";
import "./StatsCounter.scss";
import {statsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function CountUpNumber({target, suffix, duration = 2000}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {threshold: 0.5}
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const {isDark} = useContext(StyleContext);
  if (!statsSection.display) return null;
  return (
    <Fade bottom duration={1000} distance="30px">
      <div className={isDark ? "dark-mode stats-section" : "stats-section"}>
        <h2 className="stats-title">{statsSection.title}</h2>
        <div className="stats-grid">
          {statsSection.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">
                <CountUpNumber
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
