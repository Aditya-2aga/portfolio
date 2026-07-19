import { thinkingArticles, ThinkingBlock } from '@/assets/thinking';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return thinkingArticles.map((post) => ({
    slug: post.slug,
  }));
}

function renderBlock(block: ThinkingBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={index} className="text-lg text-slate-300 font-inter leading-relaxed mb-6 font-light">{block.text}</p>;
    case 'heading2':
      return <h2 key={index} className="text-2xl font-bold font-geist text-white mt-16 mb-6 scroll-mt-32">{block.text}</h2>;
    case 'heading3':
      return <h3 key={index} className="text-xl font-bold font-geist text-white mt-12 mb-4 scroll-mt-32">{block.text}</h3>;
    default:
      return null;
  }
}

export default async function ThinkingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = thinkingArticles.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-slate-900 py-32 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-geist mb-4 text-slate-900 tracking-tight">{post.title}</h1>
          <p className="text-slate-500 font-inter">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>
        <div className="prose max-w-none font-inter prose-headings:font-geist prose-headings:font-bold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
          {post.content.map((block, index) => renderBlock(block, index))}
        </div>
      </article>
    </main>
  );
}
