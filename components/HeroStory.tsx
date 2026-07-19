"use client";

import { motion } from "framer-motion";
import { heroMetrics } from "@/assets/data";
import { TrendingUp } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import Image from "next/image";
import userImage from "@/assets/user-image.png";

export default function HeroStory() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#fcfcfc] overflow-hidden pt-20">
      
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Narrative */}
        <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-widest uppercase mb-8 font-geist">
              Product Manager • AI Products • 0→1 Builder
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-geist tracking-tight text-slate-900 leading-[1.05] mb-8">
              Aditya <span className="text-indigo-600">Modanwal</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-inter font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Building AI-powered experiences from idea to launch. Bridging the gap between user needs, business goals, and engineering execution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <MagneticButton>
                <Link href="#products" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-medium transition-colors font-inter flex items-center gap-2 shadow-lg">
                  View Products <TrendingUp className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a download href="/resume-job.pdf" target="_blank" className="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-full font-medium transition-colors font-inter flex items-center gap-2 shadow-sm">
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src={userImage} 
              alt="Aditya Modanwal" 
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
