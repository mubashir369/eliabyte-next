"use client";

import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";

const text = "Welcome to Eliabyte";
const splitter = new GraphemeSplitter();
const characters = splitter.splitGraphemes(text);

export default function AnimatedText() {
  return (
    <div className="flex mb-16 flex-col items-center text-center px-4 md:px-0">
      {/* Main animated heading */}
      <div className="flex justify-center items-center flex-wrap">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
            }}
            className="
              text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold text-green-400 drop-shadow-lg
            "
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Subtitle / tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: characters.length * 0.05 + 0.3, duration: 0.6 }}
        className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl"
      >
      Crafting innovation through <span className="text-green-400 font-semibold">next-gen technology</span> that shapes tomorrow.


      </motion.p>
    </div>
  );
}
