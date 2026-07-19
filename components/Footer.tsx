"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] border-t border-slate-200 py-8 relative z-10">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-inter text-slate-500">
          <p>© {new Date().getFullYear()} Aditya Modanwal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/aditya-modanwal-2aga" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-3 h-3"/>
            </a>
            <a href="mailto:aditya.2aga@gmail.com" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              Email <ArrowUpRight className="w-3 h-3"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
