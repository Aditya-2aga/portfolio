import React from "react";
import { ArrowRight } from "lucide-react";

interface MVPScopeProps {
  ideas: string[];
  prioritized: string[];
  mvp: string[];
}

export default function MVPScope({ ideas = [], prioritized = [], mvp = [] }: MVPScopeProps) {
  return (
    <div className="my-12 p-6 md:p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl font-inter flex flex-col md:flex-row items-stretch gap-4 md:gap-0 shadow-2xl">
      
      {/* Ideas */}
      <div className="flex-1 p-4 border border-zinc-800 bg-[#121212] rounded-xl flex flex-col">
        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 font-geist text-center">Initial Ideas</h4>
        <ul className="space-y-2 m-0 p-0 list-none flex-grow">
          {ideas.map((item, i) => (
            <li key={i} className="text-xs text-slate-400 bg-[#1a1a1a] px-3 py-2 rounded text-center">{item}</li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center px-2">
        <ArrowRight className="w-5 h-5 text-slate-500" />
      </div>

      {/* Prioritized */}
      <div className="flex-1 p-4 border border-blue-500/20 bg-blue-500/5 rounded-xl flex flex-col scale-[1.02] shadow-lg z-10">
        <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 font-geist text-center">Prioritized</h4>
        <ul className="space-y-2 m-0 p-0 list-none flex-grow flex flex-col justify-center">
          {prioritized.map((item, i) => (
            <li key={i} className="text-xs text-slate-900 bg-indigo-100 text-indigo-900 px-3 py-2 rounded text-center font-medium">{item}</li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center px-2">
        <ArrowRight className="w-5 h-5 text-slate-500" />
      </div>

      {/* MVP */}
      <div className="flex-1 p-4 border border-green-500/30 bg-green-500/10 rounded-xl flex flex-col scale-[1.05] shadow-xl z-20">
        <h4 className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4 font-geist text-center">MVP Scope</h4>
        <ul className="space-y-2 m-0 p-0 list-none flex-grow flex flex-col justify-center">
          {mvp.map((item, i) => (
            <li key={i} className="text-sm text-white bg-green-500/20 px-3 py-3 rounded text-center font-bold">{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
