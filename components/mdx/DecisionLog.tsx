import React from "react";
import { Info, Scale, CheckCircle } from "lucide-react";

interface DecisionLogProps {
  context: string;
  constraint: string;
  alternatives: string[];
  decision: string;
  expectedImpact: string;
  actualOutcome: string;
}

export default function DecisionLog({ context, constraint, alternatives = [], decision, expectedImpact, actualOutcome }: DecisionLogProps) {
  return (
    <div className="my-16 bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden font-inter shadow-2xl">
      <div className="bg-[#121212] px-8 py-5 border-b border-zinc-800 flex items-center gap-3">
        <Scale className="w-5 h-5 text-purple-500" />
        <h3 className="text-sm font-bold tracking-widest text-white uppercase font-geist m-0">Product Decision Log</h3>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-3">Context</h4>
            <p className="text-sm text-slate-300 m-0 leading-relaxed">{context}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-amber-500 uppercase font-geist mb-3">Primary Constraint</h4>
            <p className="text-sm text-amber-500/80 bg-amber-500/5 p-4 rounded-xl border border-amber-500/20 m-0 leading-relaxed font-medium">{constraint}</p>
          </div>
        </div>

        <div className="mb-12">
          <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-4">Alternatives Considered</h4>
          <div className="flex flex-wrap gap-3">
            {alternatives.map((alt, i) => (
              <span key={i} className="text-xs text-slate-400 bg-[#121212] border border-zinc-800 px-4 py-2 rounded-lg line-through decoration-slate-600">{alt}</span>
            ))}
          </div>
        </div>

        <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none" />
          <h4 className="text-[10px] font-bold tracking-widest text-purple-400 uppercase font-geist mb-4">The Decision</h4>
          <p className="text-lg md:text-xl text-white font-medium m-0 leading-relaxed relative z-10">{decision}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-2">Expected Impact</h4>
            <p className="text-sm text-slate-500 m-0 leading-relaxed italic">&ldquo;{expectedImpact}&rdquo;</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-green-500 uppercase font-geist mb-2 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5" /> Actual Outcome
            </h4>
            <p className="text-sm text-slate-200 m-0 leading-relaxed font-medium">{actualOutcome}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
