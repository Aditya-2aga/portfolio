import { caseStudies, ContentBlock } from '@/assets/caseStudies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Import V3 Components
import DecisionLog from '@/components/mdx/DecisionLog';
import Tradeoffs from '@/components/mdx/Tradeoffs';
import MVPScope from '@/components/mdx/MVPScope';
import ProductTimeline from '@/components/mdx/ProductTimeline';
import UserResearch from '@/components/mdx/UserResearch';
import ContextualMetric from '@/components/mdx/ContextualMetric';
import ExecutiveSummary from '@/components/mdx/ExecutiveSummary';
import Retrospective from '@/components/mdx/Retrospective';
import ResearchArtifact from '@/components/mdx/ResearchArtifact';

export async function generateStaticParams() {
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

// Block Renderer mapping
function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={index} className="text-lg text-slate-600 font-inter leading-relaxed mb-6 font-light">{block.text}</p>;
    case 'heading2':
      return <h2 key={index} className="text-3xl font-bold font-geist text-slate-900 mt-20 mb-8 scroll-mt-32 border-b border-slate-200 pb-4" id={block.text.toLowerCase().replace(/\s+/g, '-')}><span className="text-indigo-500 mr-3 opacity-50">#</span>{block.text}</h2>;
    case 'heading3':
      return <h3 key={index} className="text-xl font-bold font-geist text-slate-800 mt-12 mb-6 scroll-mt-32" id={block.text.toLowerCase().replace(/\s+/g, '-')}>{block.text}</h3>;
    case 'executiveSummary':
      return <ExecutiveSummary key={index} {...block.data} />;
    case 'contextualMetric':
      return <ContextualMetric key={index} {...block.data} />;
    case 'researchArtifact':
      return <ResearchArtifact key={index} {...block.data} />;
    case 'decisionLog':
      return <DecisionLog key={index} {...block.data} />;
    case 'mvpScope':
      return <MVPScope key={index} {...block.data} />;
    case 'tradeoffs':
      return <Tradeoffs key={index} {...block.data} />;
    case 'productTimeline':
      return <ProductTimeline key={index} {...block.data} />;
    case 'retrospective':
      return <Retrospective key={index} {...block.data} />;
    default:
      return null;
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = caseStudies.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Extract H2 headings for Table of Contents
  const headings = post.content
    .filter((block): block is Extract<ContentBlock, { type: 'heading2' }> => block.type === 'heading2')
    .map(block => block.text);

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-slate-900 selection:bg-indigo-500/30">
      {/* Top Bar Navigation */}
      <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="/#products" className="inline-flex items-center text-slate-500 hover:text-slate-900 font-medium transition-colors font-inter text-sm group">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 border border-slate-200 group-hover:bg-slate-200 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-slate-900 transition-colors" />
          </div>
          Back to Overview
        </Link>
        <span className="text-indigo-400 font-geist text-xs tracking-[0.2em] uppercase hidden sm:block font-bold">Product Review</span>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 pt-32 pb-32 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Main Content Area */}
        <article className="flex-1 max-w-3xl lg:pl-16">
          <header className="mb-24 pt-8">
            <div className="text-indigo-400 font-bold tracking-widest text-xs uppercase font-geist mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-indigo-500 block"></span> Case Study
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-geist mb-6 text-slate-900 tracking-tight leading-[1.1]">{post.title}</h1>
            <p className="text-2xl text-slate-600 font-inter font-light leading-relaxed">{post.tagline}</p>
          </header>

          <div className="prose prose-slate prose-indigo max-w-none font-inter">
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>
        </article>

        {/* Persistent Side Navigation (Table of Contents) */}
        <aside className="hidden lg:block w-72 shrink-0 relative">
          <div className="sticky top-32">
            
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-geist mb-6 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-slate-700 block"></span>
              Contents
            </h4>
            
            <nav className="flex flex-col space-y-3 border-l border-slate-200 relative">
              {headings.map((heading, idx) => (
                <a 
                  key={idx} 
                  href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                  className="pl-5 py-1 text-sm text-slate-500 font-inter hover:text-indigo-600 hover:border-l-2 hover:border-indigo-500 transition-all -ml-[1px]"
                >
                  {heading}
                </a>
              ))}
            </nav>

            <div className="mt-20 bg-[#18181b] border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[40px] pointer-events-none" />
              <h4 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase font-geist mb-6">Project Metadata</h4>
              <ul className="space-y-6 text-sm font-inter relative z-10">
                <li>
                  <span className="block text-[10px] tracking-widest uppercase text-slate-500 mb-1 font-bold">Role</span>
                  <span className="text-slate-200 font-medium">{post.role}</span>
                </li>
                <li>
                  <span className="block text-[10px] tracking-widest uppercase text-slate-500 mb-1 font-bold">Timeline</span>
                  <span className="text-slate-200 font-medium">{post.timeline}</span>
                </li>
                <li>
                   <span className="block text-[10px] tracking-widest uppercase text-slate-500 mb-1 font-bold">Published</span>
                   <span className="text-slate-200 font-medium">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
