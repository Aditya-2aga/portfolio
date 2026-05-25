"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

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
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? "w-[90%] md:w-[600px] bg-white/80 backdrop-blur-xl shadow-lg rounded-full py-3" 
          : "w-full max-w-7xl bg-transparent py-6"
      }`}
    >
      <div className={`px-6 lg:px-8 flex justify-between items-center w-full ${isScrolled ? '' : 'mx-auto'}`}>
        {/* Logo */}
        <div className={`font-outfit font-extrabold tracking-tight flex items-center transition-all ${isScrolled ? 'text-lg text-slate-900' : 'text-2xl text-slate-900'}`}>
          AM<span className="text-indigo-600">.</span>
        </div>
        
        {/* Links */}
        <div className={`hidden md:flex gap-8 text-[13px] font-medium transition-all text-slate-600`}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
        </div>

        {/* Action Button */}
        <a href="#contact" className={`hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-[12px] font-bold tracking-widest transition-all ${isScrolled ? 'bg-indigo-600 shadow-md' : 'bg-indigo-600 shadow-lg'}`}>
          LET&apos;S CONNECT
        </a>
      </div>
    </motion.nav>
  );
}
