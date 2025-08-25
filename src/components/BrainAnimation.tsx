"use client";

import Lottie from "lottie-react";
import brainAnimation from "@/assets/brain.json";

export default function BrainAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie animationData={brainAnimation} loop={true} className="w-full h-full max-w-1xl" />
    </div>
  );
}
