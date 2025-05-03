import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedCodeProps {
  lines?: string[];
  delay?: number;
  textColor?: string; // Tailwind className like 'text-gray-400'
}

export default function AnimatedCode({
  lines = [
    "function hello() {",
    "  console.log(\"Hello!\")",
    "}"
  ],
  delay = 0.5,
  textColor = "text-gray-800",
}: AnimatedCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".char");

    gsap.set(letters, { opacity: 0 });

    gsap.to(letters, {
      opacity: 1,
      stagger: 0.03,
      ease: "power1.out",
      delay,
    });
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={`font-mono text-xl md:text-6xl leading-relaxed whitespace-pre ${textColor}`}
    >
      {lines.map((line, i) => (
        <div key={i}>
          {line.split("").map((char, index) => (
            <span key={index} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {/* Add cursor to last line only */}
          {i === lines.length - 1 && (
            <span className="animate-pulse inline-block w-2 h-5 md:h-10 bg-gray-800 ml-1"></span>
          )}
        </div>
      ))}
    </div>
  );
}
