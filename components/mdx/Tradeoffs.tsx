import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

interface TradeoffsProps {
  didNotBuild: string;
  reason: string;
  impactOnMVP: string;
}

export default function Tradeoffs({ didNotBuild, reason, impactOnMVP }: TradeoffsProps) {
  return (
    <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4 font-inter">
      <div className="bg-[#0a0a0a] border border-red-500/20 rounded-2xl p-6 col-span-1 md:col-span-1 shadow-xl">
        <div className="flex items-center gap-2 mb-3 text-red-400">
          <XCircle className="w-5 h-5" />
          <h4 className="font-geist font-bold m-0 text-sm uppercase tracking-widest">Did Not Build</h4>
        </div>
        <p className="text-sm text-slate-300 m-0 leading-relaxed">{didNotBuild}</p>
      </div>

      <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 col-span-1 md:col-span-1 shadow-xl">
        <h4 className="text-slate-500 font-geist font-bold m-0 text-sm uppercase tracking-widest mb-3">Why?</h4>
        <p className="text-sm text-slate-300 m-0 leading-relaxed">{reason}</p>
      </div>

      <div className="bg-[#0a0a0a] border border-green-500/20 rounded-2xl p-6 col-span-1 md:col-span-1 shadow-xl">
        <div className="flex items-center gap-2 mb-3 text-green-400">
          <CheckCircle2 className="w-5 h-5" />
          <h4 className="font-geist font-bold m-0 text-sm uppercase tracking-widest">MVP Impact</h4>
        </div>
        <p className="text-sm text-slate-300 m-0 leading-relaxed">{impactOnMVP}</p>
      </div>
    </div>
  );
}
