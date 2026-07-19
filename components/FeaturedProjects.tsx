"use client";

import { motion } from "framer-motion";
import { featuredProducts } from "@/assets/data";
import { ArrowRight, Box, Users, Activity, Layers } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="products" ref={containerRef} className="bg-[#fcfcfc] relative z-10 py-32 border-t border-slate-100">
      <div className="px-6 max-w-[90rem] mx-auto mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-indigo-500 block"></span>
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase font-geist">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-geist text-slate-900 tracking-tight mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-slate-600 font-inter max-w-2xl">
            Deep dives into the problems, decisions, and business outcomes.
          </p>
        </motion.div>
      </div>

      <div className="space-y-32 md:space-y-48 max-w-[90rem] mx-auto px-6 pb-32">
        {featuredProducts.map((product, index) => {
          return (
            <div key={product.id} className="w-full relative flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Left Column (Sticky Content) */}
              <div className="lg:w-5/12 shrink-0">
                <div className="sticky top-32">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center gap-3 mb-8"
                  >
                    <span className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full text-xs font-inter border border-slate-200"><Box className="w-3.5 h-3.5 text-indigo-600" /> {product.domain}</span>
                    <span className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full text-xs font-inter border border-slate-200"><Layers className="w-3.5 h-3.5 text-indigo-600" /> {product.stage}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 font-geist tracking-tight mb-6 leading-[1.1]">
                      {product.title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-slate-600 font-inter font-light leading-relaxed mb-10">{product.tagline}</p>
                    
                    <div className="hidden lg:block pt-8 border-t border-slate-200">
                      <MagneticButton>
                        <Link 
                          href={`/case-studies/${product.slug}`}
                          className="inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-medium transition-colors font-inter text-sm shadow-md"
                        >
                          Full Product Study<ArrowRight className="w-4 h-4" />
                        </Link>
                      </MagneticButton>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column (Scrolling Content) */}
              <div className="lg:w-7/12 flex flex-col justify-center">
                <div className="space-y-8 lg:pt-12">
                  
                  {/* Stats Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4"
                  >
                    <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                       <span className="text-indigo-500 mb-1.5"><Users className="w-4 h-4"/></span>
                       <span className="text-slate-900 font-bold font-geist text-base">{product.teamSize}</span>
                       <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mt-1">Team</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                       <span className="text-indigo-500 mb-1.5"><Activity className="w-4 h-4"/></span>
                       <span className="text-slate-900 font-bold font-geist text-base truncate w-full" title={product.primaryKPI}>{product.primaryKPI.split(' ').slice(0, 2).join(' ')}</span>
                       <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mt-1">KPI</span>
                    </div>
                    {product.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                        <span className="text-xl font-bold text-slate-900 font-geist mb-1">{metric.value}</span>
                        <span className="text-slate-500 text-[10px] font-inter uppercase tracking-widest font-bold">{metric.label}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Narrative Blocks */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm"
                  >
                    <h4 className="text-slate-900 font-geist font-bold text-xl mb-4">The Context & Problem</h4>
                    <p className="text-slate-600 font-inter text-lg leading-relaxed">{product.problem}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] group-hover:bg-indigo-100 transition-colors pointer-events-none" />
                    <h4 className="text-slate-900 font-geist font-bold text-xl mb-4 relative z-10">Solution & Opportunity</h4>
                    <p className="text-slate-600 font-inter text-lg leading-relaxed relative z-10">{product.solution}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 md:p-12 shadow-sm"
                  >
                    <h4 className="text-indigo-700 font-geist font-bold text-xl mb-4">Business Impact</h4>
                    <p className="text-slate-700 font-inter text-lg leading-relaxed font-medium">{product.impact}</p>
                  </motion.div>
                  
                  {/* Mobile Button */}
                  <div className="block lg:hidden pt-8">
                    <MagneticButton>
                      <Link 
                        href={`/case-studies/${product.slug}`}
                        className="flex justify-center items-center gap-3 bg-slate-900 text-white hover:bg-slate-800 w-full py-5 rounded-full font-bold transition-colors font-inter text-sm shadow-md"
                      >
                        Read Product Review <ArrowRight className="w-4 h-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                  
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
