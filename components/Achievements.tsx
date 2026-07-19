"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/assets/data";

export default function Achievements() {
  return (
    <section className="py-32 bg-[#0f1115] relative z-10 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-indigo-500 block"></span>
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase font-geist">Recognitions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-geist tracking-tight mb-4">
            Achievements
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical line (Mobile: left, Desktop: center or left. Let's do left for clean alignment) */}
          <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-indigo-500/50 via-zinc-800 to-transparent"></div>

          <div className="space-y-16">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-[-21px] top-1.5 w-4 h-4 rounded-full bg-[#0f1115] border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="text-indigo-400 font-bold font-geist tracking-widest uppercase shrink-0 text-sm">{achievement.year}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-geist leading-tight">{achievement.title}</h3>
                </div>
                
                <div className="md:pl-[84px]">
                  <p className="text-lg text-slate-400 font-inter leading-relaxed max-w-2xl">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
