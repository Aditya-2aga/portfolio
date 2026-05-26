"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { ArrowUpRight, CodeXml } from "lucide-react";

export default function HeroStory() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 text-slate-900 pt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-start justify-center pt-10 md:pt-0"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-sm md:text-base font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase flex items-center gap-4"
          >
            <span className="w-12 h-[2px] bg-slate-300 block"></span>
            Product manager
          </motion.h3>
          
          <h1 className="flex flex-wrap font-black tracking-tighter mb-6 font-outfit uppercase leading-[1.05]">
            <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-slate-800 mr-4">Aditya</span>
            <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modanwal</span>
          </h1>
          
          <p className="text-[15px] md:text-lg text-slate-600 font-ovo font-light max-w-[480px] leading-relaxed mb-10">
            Strategic and creative Product Manager dedicated to building impactful solutions that solve real problems. With a strong engineering background, I transform complex challenges into intuitive, scalable digital experiences.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 mb-14">
            <a 
              href="/Resume-job.pdf"
              download
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] text-[11px] tracking-[0.2em] font-bold"
            >
              RESUME <CodeXml className="w-4 h-4 ml-1" />
            </a>
            <a 
              href="#contact" 
              className="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 px-8 py-4 rounded-full flex items-center gap-2 transition-all text-[11px] tracking-[0.2em] font-bold shadow-sm"
            >
              CONTACT ME <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex justify-end items-center h-full mt-10 md:mt-0"
        >
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src={assets.user_image} 
              alt="Aditya Modanwal" 
              fill
              className="object-cover object-center" 
              priority
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
