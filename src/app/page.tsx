import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedText from "@/components/AnimatedText";
import LaptopAnimation from "@/components/LaptopAnimation";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Animated heading */}
      <AnimatedText />

      {/* Laptop animation */}
      <LaptopAnimation />

      {/* Subtitle */}
      <p className="mt-6 text-lg text-gray-200">
        Software solutions for the future
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
        Get Started
      </button>
    </main>
  );
}
