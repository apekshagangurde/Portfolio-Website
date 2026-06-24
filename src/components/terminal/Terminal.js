import React, {useState, useEffect} from "react";
import "./Terminal.scss";

const commands = [
  {cmd: "whoami", output: "Apeksha Gangurde"},
  {cmd: "cat role.txt", output: "Full Stack Developer"},
  {cmd: "cat passion.txt", output: "I don't just use AI — I build with it, ship with it, and push its limits every day."},
  {cmd: "ls skills/", output: "Svelte  SvelteKit  Python  FastAPI  TypeScript  Docker  LangChain  Pytest  Vitest"},
  {cmd: "cat status.txt", output: "🟢 Currently building Sashakt @ Project Tech4Dev"}
];

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [phase, setPhase] = useState("typing-cmd");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentCmd >= commands.length) return;

    const {cmd, output} = commands[currentCmd];

    if (phase === "typing-cmd") {
      if (charIndex < cmd.length) {
        const timer = setTimeout(() => {
          setTypingText(prev => prev + cmd[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setLines(prev => [
            ...prev,
            {type: "cmd", text: cmd},
            {type: "output", text: output}
          ]);
          setTypingText("");
          setCharIndex(0);
          setPhase("pause");
        }, 300);
        return () => clearTimeout(timer);
      }
    }

    if (phase === "pause") {
      const timer = setTimeout(() => {
        setCurrentCmd(prev => prev + 1);
        setPhase("typing-cmd");
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentCmd, phase, charIndex]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn terminal-btn-red"></span>
          <span className="terminal-btn terminal-btn-yellow"></span>
          <span className="terminal-btn terminal-btn-green"></span>
        </div>
        <span className="terminal-title">apeksha@portfolio ~ </span>
        <div className="terminal-spacer"></div>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className={`terminal-line terminal-${line.type}`}>
            {line.type === "cmd" && <span className="terminal-prompt">$ </span>}
            {line.text}
          </div>
        ))}
        {currentCmd < commands.length && (
          <div className="terminal-line terminal-cmd">
            <span className="terminal-prompt">$ </span>
            {typingText}
            <span className="terminal-cursor">▋</span>
          </div>
        )}
        {currentCmd >= commands.length && (
          <div className="terminal-line terminal-cmd">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cursor">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
