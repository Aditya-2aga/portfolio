import React from "react";
import { MessageSquareQuote } from "lucide-react";

interface Insight {
  title: string;
  description: string;
}

interface UserResearchProps {
  insights: Insight[];
  quote: string;
  persona: string;
}

export default function UserResearch({ insights = [], quote, persona }: UserResearchProps) {
  return (
    <div className="my-12 p-6 md:p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl font-inter shadow-2xl">
      <div className="mb-8">
        <h4 className="text-slate-500 font-geist font-bold text-sm uppercase tracking-widest mb-4 m-0">Key Insights</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {insights.map((insight, idx) => (
            <div key={idx} className="p-4 bg-[#121212] border border-zinc-800 rounded-xl">
              <h5 className="font-bold text-white text-sm m-0 mb-2">{insight.title}</h5>
              <p className="text-sm text-slate-400 m-0">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl relative">
        <MessageSquareQuote className="absolute top-4 right-4 w-8 h-8 text-blue-500/20" />
        <p className="text-lg text-blue-100 font-medium italic m-0 mb-4 relative z-10 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <span className="text-sm font-bold text-blue-400 m-0 block">- {persona}</span>
      </div>
    </div>
  );
}
