"use client";

import Lottie from "lottie-react";
import brainAnimation from "@/assets/brain.json";

export default function BrainAnimation() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Lottie 
        animationData={brainAnimation} 
        loop={true} 
        className="w-full h-full"
      />
    </div>
  );
}
