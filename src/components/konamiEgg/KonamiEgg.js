import React, {useState, useEffect, useRef} from "react";
import "./KonamiEgg.scss";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a"
];

function createConfetti(count) {
  const colors = ["#55198b", "#645beb", "#8c43ce", "#22c55e", "#ffbd2e", "#ff5f57", "#a78bfa"];
  const pieces = [];
  for (let i = 0; i < count; i++) {
    pieces.push({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 1.5 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      size: 6 + Math.random() * 8
    });
  }
  return pieces;
}

export default function KonamiEgg() {
  const [triggered, setTriggered] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const sequenceRef = useRef([]);

  useEffect(() => {
    const handleKey = e => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const seq = [...sequenceRef.current, key].slice(-10);
      sequenceRef.current = seq;

      if (seq.length === 10 && seq.every((k, i) => k === KONAMI[i])) {
        sequenceRef.current = [];
        setConfetti(createConfetti(120));
        setTriggered(true);
        setTimeout(() => setTriggered(false), 5000);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!triggered) return null;

  return (
    <div className="konami-overlay" onClick={() => setTriggered(false)}>
      <div className="konami-confetti-layer">
        {confetti.map(p => (
          <div
            key={p.id}
            className="konami-piece"
            style={{
              left: `${p.x}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              background: p.color,
              width: `${p.size}px`,
              height: `${p.size}px`,
              transform: `rotate(${p.rotation}deg)`
            }}
          />
        ))}
      </div>
      <div className="konami-message">
        <span className="konami-emoji">🎉</span>
        <h2 className="konami-title">You found the easter egg!</h2>
        <p className="konami-text">
          You're clearly a developer who knows the classics.<br />
          Here's a secret: I debug with console.log and I'm not ashamed.
        </p>
        <span className="konami-hint">click anywhere to close</span>
      </div>
    </div>
  );
}
