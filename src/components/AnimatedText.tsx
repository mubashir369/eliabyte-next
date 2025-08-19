"use client";

import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";

const text = "Welcome to Eliabyte 🚀";
const splitter = new GraphemeSplitter();
const characters = splitter.splitGraphemes(text);

export default function AnimatedText() {
  return (
    <div className="flex justify-center items-center flex-wrap text-center">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
          }}
          className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
