"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Fix hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-600 dark:text-green-400"
        >
          Eliabyte
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500"
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 text-sm"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500"
              >
                Contact
              </Link>
            </li>
            <li>
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 text-sm"
              >
                {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
