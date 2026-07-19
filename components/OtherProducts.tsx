"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { otherProducts } from "@/assets/data";
import { ArrowUpRight } from "lucide-react";

export default function OtherProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="other-projects" className="relative bg-slate-50 border-t border-slate-100">
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-geist text-slate-900 mb-4 tracking-tight">
            More Projects
          </h2>
          <p className="text-xl text-slate-600 font-inter font-light">
            Other notable products, experiments, and consulting work.
          </p>
        </div>
      </div>

      <div className="relative">
        {otherProducts.map((project, index) => {
          return (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              progress={scrollYProgress}
              total={otherProducts.length}
            />
          );
        })}
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project, index, progress, total }: { project: any, index: number, progress: any, total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate stacking effect
  const yOffset = index * 30; // Each card sticks slightly lower
  const scale = useTransform(progress, [index / total, 1], [1, 0.95]);

  return (
    <div className="w-full flex justify-center relative md:sticky top-auto md:top-32 px-4 md:px-6 mb-12 md:mb-24">
      <style>{`
        @media (min-width: 768px) {
          .project-card-offset-${index} {
            padding-top: ${yOffset}px !important;
          }
        }
      `}</style>
      <motion.div 
        ref={cardRef}
        style={{ scale, backgroundColor: project.color }}
        className={`w-full max-w-6xl min-h-[70vh] h-auto md:h-[70vh] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden project-card-offset-${index}`}
      >
        {/* Decorative elements based on theme */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="md:w-1/2 flex flex-col justify-center relative z-10">
          <div className="text-sm font-bold tracking-widest uppercase mb-2 text-slate-500">
            {project.tagline}
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-geist tracking-tight mb-6 text-slate-900">
            {project.title}
          </h3>
          <p className="text-lg md:text-xl font-inter font-light mb-8 text-slate-600">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium border font-geist border-slate-300 bg-white/50 text-slate-700">
                {t}
              </span>
            ))}
          </div>

          <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold w-max group font-inter text-slate-900">
            <span className="border-b border-transparent group-hover:border-slate-900 transition-colors">View Project</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        
        <div className="md:w-1/2 flex items-center justify-center relative z-10 h-64 md:h-auto">
          {project.image ? (
            <div className="w-full aspect-video rounded-2xl overflow-hidden relative shadow-2xl">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          ) : (
            <div className="w-full aspect-video rounded-2xl bg-black/5 shadow-inner border border-white/10 flex items-center justify-center overflow-hidden relative">
              <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"
              />
              <span className="text-4xl opacity-20 font-bold tracking-widest font-geist">{project.title.substring(0, 3).toUpperCase()}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
