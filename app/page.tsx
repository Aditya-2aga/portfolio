"use client";

import FloatingNav from "@/components/FloatingNav";
import HeroStory from "@/components/HeroStory";
import ProductThinking from "@/components/ProductThinking";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-50 relative">
      <FloatingNav />
      <HeroStory />
      {/* <ProductThinking /> */}
      <ExperienceTimeline />
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
