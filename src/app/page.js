'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import More from "./components/More";
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
    <main className="flex min-h-screen flex-col bg-white px-10 py-12">
      <Navbar />
      <Hero />
      <About />
      <More />
      <Footer />

    </main>
  );
}
