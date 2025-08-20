import AnimatedText from "@/components/AnimatedText";
import BrainAnimation from "@/components/BrainAnimation"; 
import LaptopAnimation from "@/components/LaptopAnimation";
import NeuronBackground from "@/components/NeuronBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <NeuronBackground />

      {/* Two-column layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* Left: Text + Laptop + Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mb-8 md:mb-0">
          <AnimatedText />

          {/* Laptop animation */}
          {/* <LaptopAnimation className="w-3/4 md:w-full" /> */}
          <LaptopAnimation  />

          <p className="text-lg md:text-xl text-gray-200">
        
          </p>

          <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Get Started
          </button>
        </div>

        {/* Right: Brain Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <BrainAnimation />
           {/* <BrainAnimation className="w-full h-full" /> */}
        </div>
      </div>
    </main>
  );
}
