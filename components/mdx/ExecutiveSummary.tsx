import React from "react";

interface ExecutiveSummaryProps {
  role: string;
  team: string;
  timeline: string;
  stage: string;
  users: string;
  goal: string;
  northStar: string;
  outcome: string;
}

export default function ExecutiveSummary({ role, team, timeline, stage, users, goal, northStar, outcome }: ExecutiveSummaryProps) {
  return (
    <div className="my-16 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl font-inter">
      <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-geist mb-8 border-b border-zinc-800 pb-4">Executive Summary</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Core Metadata */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Role</span>
            <span className="text-sm text-slate-200 font-medium">{role}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Timeline</span>
            <span className="text-sm text-slate-200 font-medium">{timeline}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Team</span>
            <span className="text-sm text-slate-200 font-medium">{team}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Stage</span>
            <span className="text-sm text-slate-200 font-medium">{stage}</span>
          </div>
          <div className="col-span-2 mt-2 pt-6 border-t border-zinc-800">
            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Primary Users</span>
            <span className="text-sm text-slate-200 font-medium">{users}</span>
          </div>
        </div>

        {/* Strategic Alignment */}
        <div className="flex flex-col gap-6 bg-[#121212] p-6 rounded-2xl border border-zinc-800">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Business Goal</span>
            <span className="text-sm text-slate-300 leading-relaxed">{goal}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-2">North Star Metric</span>
            <span className="text-lg text-white font-geist font-bold">{northStar}</span>
          </div>
          <div className="mt-auto pt-6 border-t border-zinc-800">
            <span className="block text-[10px] uppercase tracking-widest text-green-500 font-bold mb-2">Outcome</span>
            <span className="text-sm text-green-400 font-medium leading-relaxed">{outcome}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
