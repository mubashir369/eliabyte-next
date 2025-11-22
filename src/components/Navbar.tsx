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
<svg
  className="h-8 w-auto cursor-pointer transition-opacity hover:opacity-90"
  viewBox="0 0 170 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  onClick={() => handleScroll("hero")}
  aria-label="Eliabyte Logo"
>
  <style>{`
    .eli-byte-letter {
      animation: floatLetter 3s ease-in-out infinite;
    }
    @keyframes floatLetter {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-1.5px); }
      100% { transform: translateY(0px); }
    }

    .arrow-path {
      animation: arrowWave 2.2s ease-in-out infinite;
      transform-origin: center;
    }
    @keyframes arrowWave {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-2px); }
      100% { transform: translateY(0px); }
    }

    .glow:hover {
      filter: drop-shadow(0 0 6px #00ff66);
    }
  `}</style>

  {/* "ELI" */}
  <text
    x="0"
    y="20"
    className="eli-byte-letter text-2xl font-bold fill-current text-gray-900 dark:text-white font-sans glow"
    style={{ fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}
  >
    ELI
  </text>

  {/* Green Arrow */}
  <path
    d="M54 21 L65 0 L76 21 H69 L65 11 L61 21 H54Z"
    className="arrow-path fill-green-500 dark:fill-green-400 glow"
  />

  {/* "BYTE" */}
  <text
    x="86"
    y="20"
    className="eli-byte-letter text-2xl font-bold fill-current text-gray-900 dark:text-white font-sans glow"
    style={{ fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}
  >
    BYTE
  </text>
</svg>


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
