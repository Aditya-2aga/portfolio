"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/assets/data";

export default function Skills() {
  return (
    <section className="relative bg-[#0f172a] py-32 text-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            The Toolkit
          </h2>
          <p className="text-slate-400 font-ovo max-w-2xl mx-auto">
            A blend of strategic product management frameworks and deep technical execution capabilities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-400 font-outfit">Product Management</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.product.map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-900 rounded-xl text-sm border border-slate-800 text-slate-300 shadow-inner">{skill}</span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-400 font-outfit">Engineering & Data</h3>
            <div className="flex flex-wrap gap-2">
              {[...skillsData.languages, ...skillsData.frameworks].map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-900 rounded-xl text-sm border border-slate-800 text-slate-300 shadow-inner">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-400 font-outfit">AI & Automation</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.aiAutomation.map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-900 rounded-xl text-sm border border-slate-800 text-slate-300 shadow-inner">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
