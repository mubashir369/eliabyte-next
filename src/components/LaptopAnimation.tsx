"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LaptopAnimationProps = {
  alt?: string; // optional alt/description
};

export default function LaptopAnimation({ alt }: LaptopAnimationProps) {
  const words = [
    "E-Commerce",
    "Servers",
    "Security Systems",
    "Web Apps",
    "Mobile Apps",
  ];

  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = words[currentWord];

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
        timeout = setTimeout(handleTyping, 60);
      } else {
        if (displayedText !== fullText) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
          timeout = setTimeout(handleTyping, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1200);
        }
      }
    };

    timeout = setTimeout(handleTyping, 200);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWord]);

  return (
    <div className="flex justify-center items-center mt-10">
      {/* Screen Reader / SEO description */}
      {alt && (
        <span className="sr-only" role="img" aria-label={alt}>
          {alt}
        </span>
      )}

      {/* Laptop body */}
      <div className="relative w-72 h-44">
        {/* Screen */}
        <motion.div
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-44 bg-gray-900 rounded-t-lg border-4 border-gray-700 flex flex-col justify-center items-center p-3 text-center"
        >
          <span className="text-green-300 font-mono text-xs md:text-sm">
            We Build Innovative Digital Solutions for
          </span>

          <span className="text-green-400 font-mono text-sm md:text-base">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Keyboard base */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-80 h-6 bg-gray-800 rounded-b-lg shadow-lg"></div>
      </div>
    </div>
  );
}
