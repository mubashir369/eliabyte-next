import AboutSection from "@/components/AboutSection";
import AnimatedText from "@/components/AnimatedText";
import BrainAnimation from "@/components/BrainAnimation";
import LaptopAnimation from "@/components/LaptopAnimation";
import NeuronBackground from "@/components/NeuronBackground";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Eliabyte | Innovative Software Solutions</title>
        <meta
          name="description"
          content="Eliabyte provides innovative digital solutions including web apps, mobile apps, servers, and security systems. Empowering ideas into technology."
        />
        <meta
          name="keywords"
          content="Eliabyte, software development, web apps, mobile apps, servers, security systems, IT solutions, Kerala software company"
        />
        <meta name="author" content="Eliabyte" />
        <meta property="og:title" content="Eliabyte | Innovative Software Solutions" />
        <meta
          property="og:description"
          content="Transforming ideas into innovative digital solutions that shape the future."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eliabyte.com" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main className="relative overflow-hidden">
        {/* Background */}
        <NeuronBackground />

        {/* Hero Section */}
        <header
          id="hero"
          className="relative z-10 min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 text-center"
        >
          {/* Brain Animation Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
            <BrainAnimation />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center space-y-6">
            <AnimatedText />
            <h1 className="sr-only">
              Innovative Digital Solutions for <span className="text-green-400">Future</span>
            </h1>

            <LaptopAnimation alt="Laptop animation showing Eliabyte technology" />

            <p className="sr-only">
              At Eliabyte, we build <strong>web apps, mobile apps, security systems, and cloud servers</strong>
              that help businesses grow and innovate.
            </p>

            <button className="px-6 py-3 mt-6 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Get Started
            </button>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="relative z-10 py-20 bg-gray-950">
          <h2 className="text-3xl font-bold text-center text-white mb-10">About Us</h2>
          <AboutSection />
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="relative z-10 py-20 bg-gray-900">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Our Mission & Vision</h2>
          <MissionVisionSection />
        </section>

        {/* Services */}
        <section id="services" className="relative z-10 py-20 bg-gray-950">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Our Services</h2>
          <ServicesSection />
        </section>

        {/* Contact */}
        <footer id="contact" className="relative z-10 py-20 bg-gray-900">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Get in Touch</h2>
          <ContactSection />
        </footer>
      </main>
    </>
  );
}
