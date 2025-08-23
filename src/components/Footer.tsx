"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">Eliabyte</h3>
          <p className="mb-2">Mannarkkad</p>
          <p className="mb-2">Kerala, India</p>
          <p className="mb-2">Phone: <span className="text-green-300">+91 6282831369</span></p>
          <p>Email: <span className="text-green-300">eliabyte.sales@gmail.com</span></p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-400">Services</Link></li>
            <li><Link href="/terms" className="hover:text-green-400">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-green-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-green-400 font-semibold">Eliabyte</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
