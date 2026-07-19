import React from "react";

interface TimelineEvent {
  phase: string;
  duration: string;
  detail: string;
}

interface ProductTimelineProps {
  events: TimelineEvent[];
}

export default function ProductTimeline({ events = [] }: ProductTimelineProps) {
  return (
    <div className="my-12 overflow-x-auto pb-6 bg-[#0a0a0a] border border-zinc-800 p-8 rounded-3xl shadow-2xl">
      <div className="flex min-w-max gap-4 font-inter px-2">
        {events.map((event, idx) => (
          <div key={idx} className="flex flex-col relative w-48 shrink-0">
            {/* Connection Line */}
            {idx !== events.length - 1 && (
              <div className="absolute top-3 left-6 w-full h-0.5 bg-slate-800" />
            )}
            
            {/* Node */}
            <div className="w-6 h-6 rounded-full border-[4px] border-[#0a0a0a] bg-blue-500 relative z-10 shadow-[0_0_8px_#3b82f6]" />
            
            <div className="mt-4 pr-6">
              <h4 className="font-geist font-bold text-white text-sm m-0 mb-1">{event.phase}</h4>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-2">{event.duration}</span>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">{event.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
