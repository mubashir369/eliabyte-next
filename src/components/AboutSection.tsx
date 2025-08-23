"use client";

import { motion, Variants } from "framer-motion";

const boxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
          About <span className="text-white">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Software Development",
              desc: "Crafting custom software, web applications, and mobile apps tailored to your needs.",
            },
            {
              title: "Security Solutions",
              desc: "Providing advanced security systems for offices and homes, ensuring safety and peace of mind.",
            },
            {
              title: "IT Infrastructure",
              desc: "Supplying high-quality computers and setting up servers for seamless business operations.",
            },
            {
              title: "Networking Solutions",
              desc: "Designing and implementing reliable and secure networks for businesses of all sizes.",
            },
            {
              title: "Maintenance & Support",
              desc: "Offering ongoing IT support to keep your systems running smoothly.",
            },
            {
              title: "Cloud Solutions",
              desc: "Helping businesses move to the cloud for enhanced flexibility, scalability, and cost-efficiency.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-green-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
