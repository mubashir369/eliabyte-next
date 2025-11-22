"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function SplashScreenCom() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { box, radius } =
    screenWidth === null
      ? { box: 240, radius: 120 }
      : screenWidth < 500
      ? { box: 240, radius: 120 }
      : screenWidth < 900
      ? { box: 300, radius: 150 }
      : { box: 360, radius: 180 };

  const labels = [9, 1, 2, 3, 4, 5, 6, 7, 8];

  const dots = useMemo(() => {
    return Array.from({ length: 9 }, (_, i) => {
      const angle = (i / 9) * 2 * Math.PI - Math.PI / 2;
      return {
        id: i,
        label: labels[i],
        x: box / 2 + Math.cos(angle) * radius,
        y: box / 2 + Math.sin(angle) * radius,
      };
    });
  }, [box, radius]);

  const line = (a: number, b: number) => {
    const A = dots.find((d) => d.label === a);
    const B = dots.find((d) => d.label === b);
    return A && B ? `M ${A.x},${A.y} L ${B.x},${B.y}` : "";
  };

  const loopOrder = [1, 2, 4, 8, 7, 5, 1];
  const loopPath = loopOrder
    .map((label, i) => {
      const dot = dots.find((d) => d.label === label);
      return dot ? `${i === 0 ? "M" : "L"} ${dot.x},${dot.y}` : "";
    })
    .join(" ");

  const loopDuration = 1.8;
  const delay36 = loopDuration + 0.2;
  const delayBothFrom9 = delay36 + 0.8;

  return (
    <div className="relative flex items-center justify-center" style={{ width: box, height: box }}>
      {screenWidth !== null && (
        <motion.svg width={box} height={box} className="absolute top-0 left-0">
          <motion.path
            d={loopPath}
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: loopDuration }}
          />
          <motion.path
            d={line(3, 6)}
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delay36 }}
          />
          <motion.path
            d={line(9, 6)}
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delayBothFrom9 }}
          />
          <motion.path
            d={line(9, 3)}
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delayBothFrom9 }}
          />
        </motion.svg>
      )}
      {dots.map((dot) => {
        let bg = "#00FF00"; // default green

        if (dot.label === 9) bg = "#7CFC00"; // light green
        if (dot.label === 3) bg = "#006400"; // dark green
        if (dot.label === 6) bg = "#006400"; // dark green

        return (
          <motion.div
            key={dot.id}
            className="rounded-full absolute flex items-center justify-center text-black font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: dot.id * 0.06 }}
            style={{
              backgroundColor: bg,
              width: box * 0.08,
              height: box * 0.08,
              fontSize: box * 0.07,
              left: dot.x - box * 0.04,
              top: dot.y - box * 0.04,
            }}
          />
        );
      })}
    </div>
  );
}
