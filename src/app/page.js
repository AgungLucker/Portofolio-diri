'use client';

import { useEffect } from "react";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const handleBeforeUnload = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white pb-12 font-playfair">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experiences />
      <Footer />

    </main>
  );
}
