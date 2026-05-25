"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/assets/data";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="experience" className="relative w-full py-32 bg-[#0f172a] text-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
            The Journey
          </h2>
          <p className="text-xl text-slate-400 font-ovo max-w-2xl mx-auto">
            From building the foundations as a developer to driving product vision and strategy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] hidden md:block" />

              <div className="md:w-1/2 flex flex-col justify-start">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"} mb-4`}>
                  <h3 className="text-2xl font-bold font-outfit text-white">{exp.role}</h3>
                  <div className="text-indigo-400 font-medium text-lg mt-1">{exp.company}</div>
                  <div className="text-slate-400 text-sm mt-1">{exp.period} | {exp.location}</div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/80 transition-colors duration-300">
                  <ul className="space-y-3">
                    {exp.points.map((point, ptIndex) => (
                      <li key={ptIndex} className="text-slate-300 font-ovo flex gap-3">
                        <span className="text-indigo-400 mt-1 flex-shrink-0">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
