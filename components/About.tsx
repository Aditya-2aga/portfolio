"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#0f1115] text-slate-200 overflow-hidden z-10">
      
      {/* Subtle Dark Background Element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-geist tracking-tight text-white mb-8">
              Building products starts with <br className="hidden md:block"/> understanding people.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-400 font-inter font-light leading-relaxed">
              <p>
                Great products aren't built on brilliant ideas—they're built on deeply understanding a problem. My engineering background helps me collaborate closely with developers to ship fast and iterate, but I believe the best decisions always begin with customer insight. My goal is simple: validate early, ship small, and build products that create measurable business impact.
              </p>
            </div>

            <div className="mt-12">
              <MagneticButton>
                <Link href="#products" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium font-inter group">
                  <span className="border-b border-indigo-400/30 group-hover:border-indigo-300 transition-colors pb-0.5">View my vision</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Guiding Principles Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Customer First",
                description: "Every roadmap should begin with understanding user pain—not assumptions."
              },
              {
                title: "Build to Learn",
                description: "Shipping an MVP is the beginning of learning, not the end of building."
              },
              {
                title: "Prioritize Ruthlessly",
                description: "Every feature competes for limited engineering time. Good product managers decide what not to build."
              },
              {
                title: "Measure Outcomes",
                description: "Features don't matter unless they improve customer experience or business results."
              }
            ].map((principle, index) => (
              <div key={index} className="bg-[#18181b] border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold font-geist text-sm mb-6">
                  0{index + 1}
                </div>
                <h3 className="text-white font-bold font-geist mb-3 text-lg">{principle.title}</h3>
                <p className="text-slate-400 font-inter text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
