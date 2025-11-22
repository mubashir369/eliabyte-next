// src/components/AnimatedVortexLogo.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedVortexLogo
 * - React + Framer Motion SVG animation
 * - Vortex Math (1-9) layout with exact control links
 * - White dotted inner triangles + smooth green outer loops
 * - Uses local uploaded image as faint backdrop (path referenced below)
 *
 * Note: the uploaded file path (developer-provided) is used as:
 * "/mnt/data/WhatsApp Image 2025-11-21 at 9.41.32 AM.jpeg"
 * Replace with your hosted/public URL (e.g., /public/...) in production.
 */

const SIZE = 420;

type Point = { x: number; y: number };

export default function AnimatedVortexLogo() {
  // Node positions (tuned to form triangle with 9 top, 3 bottom-right, 6 bottom-left)
  const nodes: Record<string, Point> = {
    "9": { x: SIZE / 2, y: 60 },
    "1": { x: SIZE / 2 + 46, y: 128 },
    "2": { x: SIZE - 62, y: 150 },
    "3": { x: SIZE - 86, y: 238 },
    "4": { x: SIZE / 2 + 50, y: 266 },
    "5": { x: SIZE / 2, y: 218 },
    "6": { x: 86, y: 238 },
    "7": { x: SIZE / 2 - 50, y: 266 },
    "8": { x: 62, y: 150 },
  };

  // control relationships (source -> targets)
  const controlLinks: Record<string, string[]> = {
    "3": ["1", "2", "4"],
    "6": ["5", "7", "8"],
    "9": ["3", "6"],
  };

  // helper to create a smooth cubic curve between two points
  const cubic = (a: Point, b: Point) => {
    const dx = (b.x - a.x) * 0.4;
    const dy = (b.y - a.y) * 0.12;
    const c1x = a.x + dx;
    const c1y = a.y + dy;
    const c2x = b.x - dx;
    const c2y = b.y - dy;
    return `M ${a.x} ${a.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;
  };

  // Outer energy loop paths (three lobes)
  const outerLoops = [
    // top lobe (smooth)
    `M ${SIZE / 2} 30 
     C ${SIZE - 10} 24, ${SIZE - 36} 170, ${SIZE / 2 + 6} 232
     C ${SIZE / 2 - 40} 268, ${SIZE / 2 - 110} 248, ${SIZE / 2 - 126} 200
     C ${SIZE / 2 - 104} 120, ${SIZE / 2 - 44} 36, ${SIZE / 2} 30 Z`,
    // right lobe
    `M ${SIZE - 48} 120
     C ${SIZE - 8} 76, ${SIZE - 120} 12, ${SIZE / 2 + 14} 36
     C ${SIZE / 2 - 4} 60, ${SIZE - 10} 150, ${SIZE - 48} 120 Z`,
    // bottom lobe
    `M 48 120
     C 12 76, ${SIZE / 2 - 120} 12, ${SIZE / 2 - 14} 36
     C ${SIZE / 2 + 14} 60, 36 150, 48 120 Z`,
  ];

  // Variants for drawing strokes
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay, duration: 1.6, ease: "easeInOut" },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label="ELIABYTE Vortex Math animated logo"
      >
        <defs>
          {/* neon glow filter */}
          <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* soft halo */}
          <filter id="halo" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* green gradient for outer loops */}
          <linearGradient id="gGreen" x1="0" x2="1">
            <stop offset="0%" stopColor="#7CFF9A" />
            <stop offset="50%" stopColor="#00FF88" />
            <stop offset="100%" stopColor="#00C86B" />
          </linearGradient>

          {/* dotted stroke style for inner geometry */}
          <style>
            {`
              .dotted { stroke-dasharray: 4 6; stroke-linecap: round; }
            `}
          </style>
        </defs>

        {/* faint background raster from user's upload (faint, subtle) */}
        <image
          href="/mnt/data/WhatsApp Image 2025-11-21 at 9.41.32 AM.jpeg"
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          preserveAspectRatio="xMidYMid slice"
          opacity="0.08"
        />

        {/* Outer energy loops (glowing, drawn in) */}
        <g filter="url(#neon)">
          {outerLoops.map((d, i) => (
            <motion.path
              key={`loop-${i}`}
              d={d}
              fill="none"
              stroke="url(#gGreen)"
              strokeWidth={4.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial="hidden"
              animate="visible"
              variants={draw as any}
              custom={0.1 + i * 0.14}
              style={{ transformOrigin: "center center" }}
            />
          ))}
        </g>

        {/* central soft shadow for depth */}
        <ellipse cx={SIZE / 2} cy={SIZE / 2 + 22} rx="120" ry="22" fill="#000" opacity="0.34" />

        {/* White dotted inner triangles (vortex geometry) */}
        <g className="dotted" stroke="white" strokeWidth={1.2} fill="none" opacity={0.95}>
          {/* outer dotted triangle (9-2-6) */}
          <motion.path
            d={`M ${nodes["9"].x} ${nodes["9"].y + 12} L ${nodes["2"].x - 12} ${nodes["2"].y - 10} L ${
              nodes["6"].x + 12
            } ${nodes["6"].y - 10} Z`}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 0.45, duration: 1.1 }}
          />
          {/* inner dotted triangle (5-3-7) */}
          <motion.path
            d={`M ${nodes["5"].x} ${nodes["5"].y - 28} L ${nodes["3"].x - 8} ${nodes["3"].y - 12} L ${
              nodes["7"].x + 8
            } ${nodes["7"].y - 12} Z`}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 0.75, duration: 1.1 }}
          />
          {/* small center dotted star lines to show vortex geometry */}
          <motion.path
            d={`M ${nodes["9"].x - 14} ${nodes["9"].y + 40} L ${nodes["2"].x - 38} ${nodes["2"].y - 2} M ${
              nodes["9"].x + 14
            } ${nodes["9"].y + 40} L ${nodes["6"].x + 38} ${nodes["6"].y - 2}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          />
        </g>

        {/* Primary control triangle (9-3-6) - bright green solid lines */}
        <g stroke="#9eff9a" strokeWidth={3.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d={cubic(nodes["9"], nodes["3"])}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 1.1, ease: "easeInOut" }}
            style={{ filter: "url(#neon)" }}
          />
          <motion.path
            d={cubic(nodes["3"], nodes["6"])}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.75, duration: 1.1, ease: "easeInOut" }}
            style={{ filter: "url(#neon)" }}
          />
          <motion.path
            d={cubic(nodes["6"], nodes["9"])}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 1.1, ease: "easeInOut" }}
            style={{ filter: "url(#neon)" }}
          />
        </g>

        {/* Control links (animated dashed glowing paths) */}
        <g>
          {Object.entries(controlLinks).map(([src, targets], sIdx) =>
            targets.map((t, tIdx) => {
              const path = cubic(nodes[src], nodes[t]);
              const delay = 1.05 + sIdx * 0.08 + tIdx * 0.06;
              return (
                <g key={`${src}->${t}`}>
                  {/* faint base dashed */}
                  <path d={path} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.2} strokeDasharray="6 6" />
                  {/* animated glowing dash (flows along path) */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#00ff88"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeDasharray="12 80"
                    initial={{ strokeDashoffset: 0, opacity: 0.95 }}
                    animate={{
                      strokeDashoffset: [-60, -160],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{ delay, duration: 1.8 + tIdx * 0.15, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "url(#neon)", mixBlendMode: "screen" }}
                  />
                  {/* pulsing dot traveling (small pulse to emphasize control flow) */}
                  <motion.circle
                    cx={nodes[src].x}
                    cy={nodes[src].y}
                    r={3.6}
                    fill="#b7ffd3"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      // we'll fake travel by animating along path via a motionPath-like sequence approximated by delays:
                    }}
                    transition={{ delay: delay + 0.15, duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </g>
              );
            })
          )}
        </g>

        {/* Node circles (white core + thin green ring) */}
        <g>
          {Object.entries(nodes).map(([id, p], idx) => (
            <g key={`node-${id}`}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={14}
                fill="#0e1111"
                stroke="#000"
                strokeWidth={2}
                initial={{ r: 6, opacity: 0 }}
                animate={{ r: 14, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.03, duration: 0.6 }}
              />
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={6}
                fill="#fff"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.03, duration: 0.45 }}
              />
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={20}
                fill="none"
                stroke="#00ff88"
                strokeWidth={1}
                opacity={0.12}
                style={{ filter: "url(#halo)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.12 }}
                transition={{ delay: 0.75 + idx * 0.03, duration: 0.9 }}
              />
            </g>
          ))}
        </g>

        {/* Number labels above white centers (visible and readable) */}
        <g fontFamily="Inter, Arial, sans-serif" fontSize={12} fontWeight={700} textAnchor="middle">
          {Object.entries(nodes).map(([id, p], i) => (
            <motion.text
              key={`label-${id}`}
              x={p.x}
              y={p.y + 4}
              fill="#000"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + i * 0.02, duration: 0.35 }}
            >
              {id}
            </motion.text>
          ))}
        </g>
      </svg>

      {/* Text block */}
      <div className="text-center mt-3 select-none">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 0.6 }}>
          <div style={{ fontFamily: "Inter, Arial, sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", letterSpacing: 1 }}>
            <span style={{ color: "#7CFF9A" }}>ELI</span>
            <span style={{ color: "#ffffff" }}>BYTE</span>
          </div>
          <div style={{ fontFamily: "Inter, Arial, sans-serif", fontWeight: 600, fontSize: 11, color: "#00ff88", marginTop: 6, letterSpacing: 3 }}>
            SOFTWARE SOLUTIONS
          </div>
        </motion.div>
      </div>
    </div>
  );
}
