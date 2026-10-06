import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  // Délai optionnel pour faire des effets de cascade (ex: 100ms, 200ms)
  delay?: number;
  // Direction de l'animation d'entrée
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  // Déclenche l'animation une seule fois (true) ou à chaque scroll (false)
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SÉCURITÉ & PERF : IntersectionObserver est asynchrone et ne bloque pas le Main Thread
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Si 'once' est true, on arrête d'observer pour économiser des ressources
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Déclenche quand 10% du composant est visible
        rootMargin: "50px", // Anticipe légèrement l'affichage avant qu'il ne rentre complètement
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [once]);

  // Configurations des directions de départ avec Tailwind
  const baseDirection = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "-translate-x-12",
    right: "translate-x-12",
    none: "",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      // A11Y (RGAA) : 'motion-reduce:transition-none' annule l'animation si l'utilisateur l'a désactivée sur son OS.
      className={`${className} transition-all duration-800 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${baseDirection[direction]}`
      }`}
    >
      {children}
    </div>
  );
}
