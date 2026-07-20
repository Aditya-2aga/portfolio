"use client";

import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/assets/data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-32 bg-[#fcfcfc] relative z-10 border-t border-slate-100">
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
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase font-geist">Career History</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-geist tracking-tight mb-4">Experience</h2>
          <p className="text-xl text-slate-600 font-inter max-w-2xl">A track record of building and scaling products.</p>
        </motion.div>

        {/* Desktop Horizontal Accordion & Mobile Vertical Stacking */}
        <div className="flex flex-col xl:flex-row xl:h-[600px] gap-4 w-full">
          {experienceData.map((exp, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                layout
                onClick={() => setActiveIndex(index)}
                className={`group cursor-pointer rounded-3xl overflow-hidden relative flex flex-col xl:flex-row shrink-0 bg-white border border-slate-200 transition-colors hover:border-slate-300 shadow-sm
                  ${isActive ? 'xl:flex-[3]' : 'xl:flex-[0.5] xl:max-w-[120px]'} 
                `}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                
                {/* Background ambient gradient for active item */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent pointer-events-none z-0"
                    />
                  )}
                </AnimatePresence>

                {/* Vertical Strip for Desktop Inactive State */}
                <div className={`hidden xl:flex flex-col items-center justify-between py-12 px-6 h-full shrink-0 border-r border-slate-100 ${isActive ? 'w-24' : 'w-full'}`}>
                   <div className="flex flex-col items-center gap-4">
                     <span className="text-xs font-bold tracking-widest text-slate-500 uppercase font-geist rotate-180" style={{ writingMode: 'vertical-rl' }}>{exp.period}</span>
                   </div>
                   <div className="flex flex-col items-center gap-6 mt-auto">
                     <span className={`text-xl font-bold font-geist whitespace-nowrap rotate-180 transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} style={{ writingMode: 'vertical-rl' }}>{exp.company}</span>
                   </div>
                </div>
                
                {/* Mobile Header (Always visible on mobile) */}
                <div className="xl:hidden p-6 flex justify-between items-center border-b border-slate-100 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs font-bold font-geist tracking-widest uppercase mb-1">{exp.period}</span>
                    <span className={`text-xl font-bold font-geist ${isActive ? 'text-indigo-600' : 'text-slate-900'}`}>{exp.company}</span>
                  </div>
                  {isActive ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>

                {/* Content Area (Visible when active) */}
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="p-6 md:p-10 xl:p-12 flex flex-col h-full relative z-10 w-full"
                    >
                      <div className="flex flex-col mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-geist mb-3">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="bg-slate-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-geist border border-slate-200">{exp.domain}</span>
                          <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-inter border border-slate-200">{exp.stage}</span>
                          <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-inter border border-slate-200">Team: {exp.teamSize}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 font-geist">Business Context</h4>
                            <p className="text-slate-600 font-inter text-sm md:text-base leading-relaxed">{exp.businessContext}</p>
                          </div>
                          <div>
                            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 font-geist">Product Ownership</h4>
                            <p className="text-slate-600 font-inter text-sm md:text-base leading-relaxed">{exp.ownership}</p>
                          </div>
                          <div>
                            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 font-geist">Cross-Functional Collaboration</h4>
                            <p className="text-slate-600 font-inter text-sm md:text-base leading-relaxed">{exp.collaboration}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-3 font-geist">Customer Impact</h4>
                            <p className="text-slate-900 font-inter font-medium leading-relaxed mb-6">{exp.customerImpact}</p>
                            
                            <div className="space-y-4">
                              {exp.metrics.map((m, i) => (
                                <div key={i} className="flex items-center gap-3 border-t border-slate-200 pt-3 first:border-0 first:pt-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                                  <span className="text-slate-600 font-geist text-sm">{m}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 font-geist">Personal Growth</h4>
                            <p className="text-slate-500 font-inter text-sm leading-relaxed italic border-l-2 border-slate-300 pl-4 py-1">
                              &ldquo;{exp.growth}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
