"use client";

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

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu after clicking
    }
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-bold text-green-600 dark:text-green-400 cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Eliabyte
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 text-sm transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
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
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 text-sm transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
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
