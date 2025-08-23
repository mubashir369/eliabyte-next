"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, ShoppingCart, Headphones, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Build powerful, responsive, and user-friendly websites that drive engagement and performance.",
    icon: <Code className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Develop intuitive and high-performing mobile apps for iOS and Android with seamless user experiences.",
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
  },
  {
    title: "UI/UX Design",
    description:
      "We design user-centric interfaces ensuring accessibility, ease of use, and delightful experiences.",
    icon: <Palette className="w-8 h-8 text-green-400" />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch and manage your online store with our end-to-end e-commerce services to boost sales.",
    icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Consulting & IT Support",
    description:
      "Expert guidance and ongoing IT support to ensure your systems are reliable and efficient.",
    icon: <Headphones className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Security Systems",
    description:
      "Protect your home and office with advanced security systems that safeguard your assets.",
    icon: <Shield className="w-8 h-8 text-green-400" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-green-400">Our</span> Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mb-16 text-gray-400"
        >
          Check our Services
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-green-500/20 transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
