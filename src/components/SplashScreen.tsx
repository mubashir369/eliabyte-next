"use client";

import { useEffect, useState } from "react";
import SplashScreenCom from "./splash/SplashScreenCom";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-black/40 backdrop-blur-lg transition-opacity duration-700"
    >
      <SplashScreenCom />
    </div>
  );
}
