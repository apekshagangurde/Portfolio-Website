import React, {useState, useEffect, useRef, useCallback} from "react";
import "./CommandPalette.scss";

const commands = [
  {label: "Home", icon: "fas fa-home", section: "#greeting"},
  {label: "Skills", icon: "fas fa-code", section: "#skills"},
  {label: "Experience", icon: "fas fa-briefcase", section: "#experience"},
  {label: "Education", icon: "fas fa-graduation-cap", section: "#education"},
  {label: "Achievements", icon: "fas fa-trophy", section: "#achievements"},
  {label: "Blogs", icon: "fas fa-pen", section: "#blogs"},
  {label: "Contact", icon: "fas fa-envelope", section: "#contact"},
  {label: "GitHub", icon: "fab fa-github", url: "https://github.com/apekshagangurde"},
  {label: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/apeksha-gangurde-924b4a230/"},
  {label: "Resume", icon: "fas fa-file-alt", url: "https://drive.google.com/file/d/1Co10jIUl5W1M3IbXRdLBgGTjPUvswT4X/view?usp=sharing"}
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(cmd => {
    setIsOpen(false);
    setQuery("");
    if (cmd.url) {
      window.open(cmd.url, "_blank");
    } else if (cmd.section) {
      const el = document.querySelector(cmd.section);
      if (el) el.scrollIntoView({behavior: "smooth"});
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyNav = e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      execute(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-overlay" onClick={() => setIsOpen(false)}>
      <div className="cmd-modal" onClick={e => e.stopPropagation()}>
        <div className="cmd-input-wrapper">
          <i className="fas fa-search cmd-search-icon"></i>
          <input
            ref={inputRef}
            className="cmd-input"
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyNav}
          />
          <span className="cmd-shortcut">ESC</span>
        </div>
        <div className="cmd-list">
          {filtered.length === 0 && (
            <div className="cmd-empty">No results found</div>
          )}
          {filtered.map((cmd, i) => (
            <div
              key={cmd.label}
              className={`cmd-item ${i === selectedIndex ? "cmd-item-active" : ""}`}
              onClick={() => execute(cmd)}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <i className={`${cmd.icon} cmd-item-icon`}></i>
              <span className="cmd-item-label">{cmd.label}</span>
              {cmd.url && <span className="cmd-item-badge">External</span>}
              {i === selectedIndex && <span className="cmd-item-hint">Enter ↵</span>}
            </div>
          ))}
        </div>
        <div className="cmd-footer">
          <span><kbd>↑↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Select</span>
          <span><kbd>Esc</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
