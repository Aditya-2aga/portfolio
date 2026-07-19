import React from "react";
import { AlertCircle } from "lucide-react";

interface RetrospectiveProps {
  mistakes: string[];
  techDebt: string;
  lessons: string[];
}

export default function Retrospective({ mistakes = [], techDebt, lessons = [] }: RetrospectiveProps) {
  return (
    <div className="my-16 bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden font-inter shadow-2xl">
      <div className="bg-[#121212] px-8 py-5 border-b border-zinc-800 flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-amber-500" />
        <h3 className="text-sm font-bold tracking-widest text-white uppercase font-geist m-0">What I Would Do Differently</h3>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-geist mb-4 border-b border-zinc-800 pb-2">Mistakes Made</h4>
            <ul className="space-y-3 m-0 p-0 list-none">
              {mistakes.map((m, i) => (
                <li key={i} className="text-sm text-slate-300 leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-geist mb-4 border-b border-zinc-800 pb-2">Technical & Product Debt</h4>
            <p className="text-sm text-slate-300 leading-relaxed m-0 italic bg-[#121212] p-4 rounded-xl border border-zinc-800">
              {techDebt}
            </p>
          </div>
        </div>

        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
          <h4 className="text-xs font-bold tracking-widest text-blue-400 uppercase font-geist mb-6">Key Lessons Learned</h4>
          <ul className="space-y-4 m-0 p-0 list-none">
            {lessons.map((l, i) => (
              <li key={i} className="text-sm text-blue-100 leading-relaxed flex items-start gap-3">
                <span className="font-geist font-bold text-blue-500 mt-0.5">0{i+1}.</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
