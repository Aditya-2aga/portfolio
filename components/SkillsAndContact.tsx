"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/assets/data";
import { Mail } from "lucide-react";

export default function SkillsAndContact() {
  return (
    <section className="relative bg-[#0f172a] py-32 text-slate-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 relative z-10">
        
        {/* Skills Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-12">
            The Toolkit
          </h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Product Management</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.product.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Engineering & Data</h3>
              <div className="flex flex-wrap gap-2">
                {[...skillsData.languages, ...skillsData.frameworks].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400">AI & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.aiAutomation.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
            
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4 relative z-10">
              Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">impactful</span>.
            </h2>
            <p className="text-slate-400 font-ovo mb-8 relative z-10 text-sm md:text-base">
              Seeking early-stage product, growth, or AI-native PM roles. Reach out below or connect on socials.
            </p>

            <form className="relative z-10 flex flex-col gap-4 mb-8" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="flex-1 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="flex-1 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows={4}
                required
                className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>

            <div className="flex gap-4 relative z-10">
              <a href="mailto:aditya.2aga@gmail.com" className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-900 rounded-xl hover:bg-indigo-600 transition-colors group">
                <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
                <span className="font-medium text-sm">Email</span>
              </a>
              <a href="https://linkedin.com/in/aditya-modanwal" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-900 rounded-xl hover:bg-[#0077b5] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
              <a href="https://github.com/Aditya-2aga" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span className="font-medium text-sm">GitHub</span>
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700/50 text-center text-slate-500 text-xs">
              © {new Date().getFullYear()} Aditya Modanwal. Designed with vision.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
