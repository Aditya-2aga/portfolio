import React from "react";
import { Compass, CheckCircle2, Circle } from "lucide-react";

interface ResearchArtifactProps {
  jtbd: string;
  assumptions: { text: string; validated: boolean }[];
  clusters: { theme: string; insights: string[] }[];
}

export default function ResearchArtifact({ jtbd, assumptions = [], clusters = [] }: ResearchArtifactProps) {
  return (
    <div className="my-16 font-inter bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

      <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-geist mb-10 border-b border-zinc-800 pb-4">Research Synthesis</h3>

      <div className="mb-12">
        <h4 className="text-[10px] font-bold tracking-widest text-blue-500 uppercase font-geist mb-3">Job To Be Done (JTBD)</h4>
        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed m-0 border-l-2 border-blue-500 pl-6">
          &ldquo;{jtbd}&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Assumptions */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-6">Key Assumptions & Validation</h4>
          <ul className="space-y-4 m-0 p-0 list-none">
            {assumptions.map((a, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-[#121212] rounded-xl border border-zinc-800">
                {a.validated ? 
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> : 
                  <Circle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                }
                <div>
                  <p className="text-sm text-slate-300 m-0 leading-snug">{a.text}</p>
                  <span className={`text-[10px] font-bold uppercase tracking-widest mt-2 block ${a.validated ? 'text-green-500' : 'text-slate-500'}`}>
                    {a.validated ? 'Validated' : 'Invalidated / Pending'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Affinity Clusters */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-6">Affinity Mapping Themes</h4>
          <div className="space-y-6">
            {clusters.map((cluster, i) => (
              <div key={i}>
                <h5 className="text-sm font-bold text-white font-geist mb-3 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-purple-400" /> {cluster.theme}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {cluster.insights.map((insight, j) => (
                    <span key={j} className="text-xs bg-[#121212] border border-zinc-800 text-slate-400 px-3 py-2 rounded-lg leading-tight max-w-full">
                      {insight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
