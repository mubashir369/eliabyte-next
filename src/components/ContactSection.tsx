"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          <span className="text-green-400">Contact</span> Us
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-300">Address</h3>
                <p className="text-gray-400">Kerala, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-300">Call Us</h3>
                <p className="text-gray-400">+91 6283831369</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-300">Email Us</h3>
                <p className="text-gray-400">eliabyte.sales@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full p-3 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full p-3 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="mt-2 w-full p-3 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
