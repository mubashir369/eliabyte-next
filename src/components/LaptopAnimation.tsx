"use client";

import { motion } from "framer-motion";

export default function LaptopAnimation() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* Laptop body */}
      <div className="relative w-72 h-44">
        {/* Screen (animated opening) */}
        <motion.div
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-44 bg-gray-900 rounded-t-lg border-4 border-gray-700 flex justify-center items-center"
        >
          <p className="text-green-400 font-mono text-lg">
            Eliabyte 💻
          </p>
        </motion.div>

        {/* Keyboard base */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-80 h-6 bg-gray-800 rounded-b-lg shadow-lg"></div>
      </div>
    </div>
  );
}
