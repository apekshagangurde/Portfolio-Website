import React, {useState, useEffect} from "react";
import "./TypingAnimation.scss";

export default function TypingAnimation({text, speed = 30, delay = 800}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const cursorTimer = setTimeout(() => setShowCursor(false), 3000);
      return () => clearTimeout(cursorTimer);
    }
  }, [started, currentIndex, text, speed]);

  return (
    <span className="typing-animation">
      {displayedText}
      {showCursor && <span className="typing-cursor">|</span>}
    </span>
  );
}
