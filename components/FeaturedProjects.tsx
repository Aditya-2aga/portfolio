"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/assets/data";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="projects" className="relative bg-slate-50">
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 font-ovo">
            Products built, scaled, and delivered.
          </p>
        </div>
      </div>

      <div className="relative">
        {projectsData.map((project, index) => {
          return (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              progress={scrollYProgress}
              total={projectsData.length}
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
    <div className="w-full flex justify-center sticky top-32 px-6 mb-24" style={{ paddingTop: yOffset }}>
      <motion.div 
        ref={cardRef}
        style={{ scale, backgroundColor: project.color }}
        className="w-full max-w-6xl h-[70vh] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative elements based on theme */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="md:w-1/2 flex flex-col justify-center relative z-10">
          <div className="text-sm font-bold tracking-widest uppercase mb-2 opacity-70" style={{ color: index % 2 !== 0 ? '#fff' : '#000' }}>
            {project.tagline}
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-outfit mb-6" style={{ color: index % 2 !== 0 ? '#fff' : '#0f172a' }}>
            {project.title}
          </h3>
          <p className="text-lg md:text-xl font-ovo mb-8 opacity-80" style={{ color: index % 2 !== 0 ? '#e2e8f0' : '#334155' }}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium border" 
                style={{ 
                  borderColor: index % 2 !== 0 ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                  backgroundColor: index % 2 !== 0 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  color: index % 2 !== 0 ? '#fff' : '#000'
                }}>
                {t}
              </span>
            ))}
          </div>

          <a href={project.link} className="inline-flex items-center gap-2 font-bold w-max group" style={{ color: index % 2 !== 0 ? '#fff' : '#0f172a' }}>
            <span className="border-b border-transparent group-hover:border-current transition-colors">View Project</span>
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
              <span className="text-4xl opacity-20 font-bold tracking-widest">{project.title.substring(0, 3).toUpperCase()}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
