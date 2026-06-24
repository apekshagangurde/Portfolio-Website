import React, {useState, useEffect, useRef, useCallback} from "react";
import "./CustomCursor.scss";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onMouseMove = useCallback(e => {
    if (dotRef.current) {
      dotRef.current.style.left = e.clientX + "px";
      dotRef.current.style.top = e.clientY + "px";
    }
    if (circleRef.current) {
      circleRef.current.style.left = e.clientX + "px";
      circleRef.current.style.top = e.clientY + "px";
    }
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    document.addEventListener("mousemove", onMouseMove);

    const handleOver = e => {
      if (e.target.closest("a, button, .project-tag, .icon-button, .skill-link, .certificate-tag")) {
        setIsHovering(true);
      }
    };
    const handleOut = e => {
      if (e.target.closest("a, button, .project-tag, .icon-button, .skill-link, .certificate-tag")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [onMouseMove]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? "cursor-hover" : ""}`}
        style={{opacity: isVisible ? 1 : 0}}
      />
      <div
        ref={circleRef}
        className={`cursor-circle ${isHovering ? "cursor-hover" : ""}`}
        style={{opacity: isVisible ? 1 : 0}}
      />
    </>
  );
}
