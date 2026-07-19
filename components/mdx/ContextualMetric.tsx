import React from "react";
import { TrendingUp } from "lucide-react";

interface ContextualMetricProps {
  label: string;
  value: string;
  why: string;
  how: string;
  change: string;
}

export default function ContextualMetric({ label, value, why, how, change }: ContextualMetricProps) {
  return (
    <div className="my-12 p-8 bg-[#0a0a0a] border border-zinc-800 rounded-3xl font-inter flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden shadow-2xl">
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none" />
      
      <div className="w-full md:w-1/2 relative z-10">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 font-geist">{label}</span>
        <span className="text-5xl md:text-6xl font-bold text-blue-400 font-geist block leading-none">{value}</span>
        <div className="mt-4 flex items-start gap-2 text-xs font-bold uppercase tracking-widest text-green-400 leading-relaxed">
          <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" /> 
          <span className="break-words break-all sm:break-normal">{change}</span>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6 md:border-l md:border-zinc-800 md:pl-8 relative z-10">
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-1">Why this metric?</h4>
          <p className="text-sm text-slate-300 m-0 leading-relaxed">{why}</p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-1">How was it measured?</h4>
          <p className="text-sm text-slate-400 m-0 leading-relaxed font-light">{how}</p>
        </div>
      </div>
    </div>
  );
}
