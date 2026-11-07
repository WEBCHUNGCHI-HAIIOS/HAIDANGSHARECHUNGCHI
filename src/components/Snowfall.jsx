
import { useEffect, useState } from "react";

export default function Snowfall() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const createFlakes = () => {
      const count = window.innerWidth < 768 ? 35 : 65;

      setFlakes(
        Array.from({ length: count }, (_, index) => ({
          id: index,
          left: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 7,
          delay: Math.random() * -15,
          opacity: Math.random() * 0.6 + 0.2,
          drift: Math.random() * 100 - 50,
        }))
      );
    };

    createFlakes();

    window.addEventListener("resize", createFlakes);

    return () => {
      window.removeEventListener("resize", createFlakes);
    };
  }, []);

  return (
    <div className="snowfall-container" aria-hidden="true">
      <style>{`
        .snowfall-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 999;
        }

        .snowflake {
          position: absolute;
          top: -15px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(120, 220, 255, 0.8);
          animation: snowFall linear infinite;
          will-change: transform;
        }

        @keyframes snowFall {
          0% {
            transform: translate3d(0, -10px, 0);
          }
          100% {
            transform: translate3d(var(--drift), 110vh, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .snowflake {
            animation: none;
            display: none;
          }
        }
      `}</style>

      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            "--drift": `${flake.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
