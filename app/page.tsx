"use client";

import FloatingNav from "@/components/FloatingNav";
import HeroStory from "@/components/HeroStory";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProductProcess from "@/components/ProductProcess";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import OtherProducts from "@/components/OtherProducts";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col">
      <FloatingNav />
      <HeroStory />
      <About />
      <FeaturedProjects />
      <ProductProcess />
      <ExperienceTimeline />
      <Skills />
      <OtherProducts />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

