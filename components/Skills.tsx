"use client";

import { motion } from "framer-motion";
import { skillsGroups } from "@/assets/data";

export default function Skills() {
  return (
    <section className="py-32 bg-[#0f1115] relative z-10 border-t border-zinc-900">
      <div className="max-w-[90rem] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-indigo-500 block"></span>
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase font-geist">Competencies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-geist tracking-tight">
            Core Skills & Tools
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-zinc-800">
          {skillsGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-start py-8 md:py-12 border-b border-zinc-800 group hover:bg-[#15171c] transition-colors"
            >
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-12">
                <h3 className="text-xl md:text-2xl font-bold text-white font-geist group-hover:text-indigo-400 transition-colors">
                  {group.title}
                </h3>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-[#18181b] text-slate-300 font-inter text-sm md:text-base rounded-full border border-zinc-800/80 group-hover:border-zinc-700 hover:!border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
