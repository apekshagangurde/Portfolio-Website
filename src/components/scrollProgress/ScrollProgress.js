import React, {useState, useEffect} from "react";
import "./ScrollProgress.scss";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.pageYOffset / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div
        className="scroll-progress-fill"
        style={{width: `${progress}%`}}
      />
    </div>
  );
}
