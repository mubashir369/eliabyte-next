import AboutSection from "@/components/AboutSection";
import AnimatedText from "@/components/AnimatedText";
import BrainAnimation from "@/components/BrainAnimation"; 
import LaptopAnimation from "@/components/LaptopAnimation";
import NeuronBackground from "@/components/NeuronBackground";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <NeuronBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4">
        {/* Left: Text + Laptop + Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mb-8 md:mb-0">
          <AnimatedText />
          <LaptopAnimation />
          <p className="text-lg md:text-xl text-gray-200"></p>
          <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Get Started
          </button>
        </div>

        {/* Right: Brain Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <BrainAnimation />
        </div>
      </section>

      {/* About Section (directly below hero) */}
      <section id="about" className="relative z-10 py-20 bg-gray-950">
        <AboutSection />
      </section>
      <MissionVisionSection/>
      <ServicesSection/>
      <ContactSection/>
    </main>
  );
}
