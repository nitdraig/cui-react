import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursorColor?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
  delay = 1000,
  loop = false,
  cursorColor = "black",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval: ReturnType<typeof setInterval>;

    if (!isDeleting) {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed);
    }

    if (!isDeleting && index === text.length) {
      clearInterval(typingInterval);
      if (loop) {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }

    if (isDeleting && index === 0) {
      clearInterval(typingInterval);
      setIsDeleting(false);
      if (loop) {
        setTimeout(() => setIndex(0), delay);
      }
    }

    return () => clearInterval(typingInterval);
  }, [text, speed, delay, loop, isDeleting, index]);

  return (
    <span style={{ display: "inline-block" }}>
      {displayedText}
      <span
        style={{
          borderRight: `2px solid ${cursorColor}`,
          animation: "blink-cursor 1s step-end infinite",
        }}
      ></span>
      <style>{`
        @keyframes blink-cursor {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: ${cursorColor};
          }
        }
      `}</style>
    </span>
  );
};

export default TypingEffect;
