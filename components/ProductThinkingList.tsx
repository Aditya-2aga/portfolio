"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { thinkingArticles } from "@/assets/thinking";

export default function ProductThinkingList() {
  // We'll use the articles from our thinking data
  const articles = thinkingArticles.map(article => ({
    title: article.title,
    category: "Product Philosophy",
    problem: "Product management is often misunderstood as simply defining features and managing timelines.",
    keyInsight: "The most valuable thing a PM can do is reduce uncertainty before the team invests months building the wrong solution.",
    date: article.date,
    readTime: "5 min read",
    slug: article.slug
  }));

  return (
    <section className="py-32 bg-[#fcfcfc] relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-geist tracking-tight mb-4">Product Thinking</h2>
          <p className="text-xl text-slate-600 font-inter max-w-2xl">A living library of insights, teardowns, and strategic frameworks.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                href={`/thinking/${article.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-3xl p-8 hover:border-slate-300 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] pointer-events-none group-hover:bg-indigo-100 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <span className="text-xs font-bold tracking-widest text-indigo-700 uppercase font-geist bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-slate-500 font-inter flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 font-geist mb-6 group-hover:text-indigo-600 transition-colors relative z-10">{article.title}</h3>
                
                <div className="space-y-4 mb-8 flex-grow relative z-10">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-geist block mb-1">The Problem</span>
                    <p className="text-sm text-slate-600 font-inter">{article.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-geist block mb-1">Key Insight</span>
                    <p className="text-sm text-slate-900 font-inter font-medium">{article.keyInsight}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto relative z-10">
                  <span className="text-slate-500 text-sm font-inter">{article.date}</span>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 group-hover:border-slate-300 transition-colors">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
