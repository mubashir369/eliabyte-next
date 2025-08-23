"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          <span className="text-green-400">Our</span>{" "}
          <span className="text-white">Core Values</span>
        </motion.h2>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-10 bg-gray-800/90 rounded-3xl shadow-lg hover:shadow-green-500/30 transition mb-16"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg">
            🚀
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-4">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            To empower businesses and individuals by delivering comprehensive IT 
            solutions that are innovative, reliable, and scalable.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-10 bg-gray-800/90 rounded-3xl shadow-lg hover:shadow-green-500/30 transition"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg">
            🌍
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-4">
            Our Vision
          </h3>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            To be a global leader in IT services, transforming businesses with 
            technology and driving innovation at every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
