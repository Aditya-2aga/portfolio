"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? "w-[95%] sm:w-[90%] md:w-[600px] bg-[#0f1115]/90 backdrop-blur-xl border border-zinc-800 shadow-2xl rounded-full py-2 sm:py-3" 
          : "w-full max-w-7xl bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className={`px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full ${isScrolled ? '' : 'mx-auto'}`}>
        {/* Logo */}
        <Link href="/" className={`font-geist font-extrabold tracking-tight flex items-center transition-all ${isScrolled ? 'text-lg text-white' : 'text-xl sm:text-2xl text-slate-900'}`}>
          AM<span className="text-indigo-600">.</span>
        </Link>
        
        {/* Links */}
        <div className={`hidden md:flex gap-8 text-[13px] font-medium transition-all ${isScrolled ? 'text-slate-400' : 'text-slate-600'} font-inter`}>
          <a href="#about" className={`transition-colors ${isScrolled ? 'hover:text-white' : 'hover:text-indigo-600'}`}>About</a>
          <a href="#products" className={`transition-colors ${isScrolled ? 'hover:text-white' : 'hover:text-indigo-600'}`}>Products</a>
          <a href="#experience" className={`transition-colors ${isScrolled ? 'hover:text-white' : 'hover:text-indigo-600'}`}>Experience</a>
        </div>

        {/* Action Button */}
        <a href="#contact" className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-[12px] font-bold tracking-widest transition-all font-geist ${
          isScrolled 
            ? 'bg-white text-slate-900 hover:bg-slate-200 shadow-lg' 
            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
        }`}>
          LET&apos;S CONNECT
        </a>
      </div>
    </motion.nav>
  );
}
