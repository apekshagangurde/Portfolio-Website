import React, {useState, useEffect} from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <button
      onClick={scrollToTop}
      className={`top-button ${isVisible ? "top-button-visible" : ""}`}
      title="Go to top"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
