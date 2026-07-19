export interface ThinkingBlock {
  type: "paragraph" | "heading2" | "heading3";
  text: string;
}

export interface ThinkingArticle {
  slug: string;
  title: string;
  date: string;
  content: ThinkingBlock[];
}

export const thinkingArticles: ThinkingArticle[] = [
  {
    slug: "about-product-management",
    title: "How I think, make decisions, and build products",
    date: "2026-07-20",
    content: [
      { type: "heading2", text: "I enjoy turning ambiguity into products people actually use." },
      { type: "paragraph", text: "My journey into product management didn't begin with a Product Manager title-it began with curiosity. While building products during college, I realized I was naturally drawn toward understanding why products succeed or fail rather than only focusing on how they were built." },
      { type: "paragraph", text: "Whether I was working on healthcare platforms, internal productivity tools, or marketplaces, I found myself asking the same questions: Who are we solving this for? Is this actually the biggest problem? How should we prioritize what comes next? What should we intentionally not build? Those questions eventually became my approach to product management." },
      { type: "paragraph", text: "Today, I enjoy working at the intersection of users, business, and technology-bringing clarity to complex problems and helping teams build products that create measurable value." },
      { type: "heading2", text: "What Drives Me" },
      { type: "paragraph", text: "I believe product management is less about having the right answers and more about asking the right questions. Great products rarely come from assumptions. They come from curiosity. The most valuable thing a Product Manager can do is reduce uncertainty before the team invests months building the wrong solution. That means listening more than speaking, validating ideas early, and making decisions based on evidence rather than intuition alone." },
      { type: "heading2", text: "My Product Philosophy" },
      { type: "heading3", text: "Start With The Problem" },
      { type: "paragraph", text: "It's easy to fall in love with features. It's much harder-and much more valuable-to deeply understand the underlying problem. Before discussing solutions, I prefer understanding user behavior, workflow friction, and business context. Products become simpler when the problem becomes clearer." },
      { type: "heading3", text: "Build Small, Learn Fast" },
      { type: "paragraph", text: "Shipping an MVP isn't about releasing unfinished software. It's about creating the smallest possible solution that helps validate an important assumption. Every release should answer a question. If a feature doesn't help us learn something meaningful, it probably isn't the next thing we should build." },
      { type: "heading3", text: "Prioritize Ruthlessly" },
      { type: "paragraph", text: "Every roadmap is a list of trade-offs. Engineering time is limited. Customer expectations continue to grow. The role of a Product Manager isn't simply deciding what gets built. It's deciding what shouldn't. Clear priorities create better products than larger backlogs." },
      { type: "heading3", text: "Measure Outcomes, Not Features" },
      { type: "paragraph", text: "A completed feature is only a milestone. Real success comes from the impact it creates. I prefer asking: Did this reduce friction? Did this improve user experience? Did this move an important business metric? Shipping is only valuable if it creates measurable change." },
      { type: "heading2", text: "How I Work" },
      { type: "paragraph", text: "I enjoy working closely with cross-functional teams throughout the entire product lifecycle. Rather than treating product management as documentation, I see it as continuous collaboration. I like participating in customer conversations, defining product strategy, reviewing designs, refining roadmaps, discussing implementation trade-offs with engineering, and learning from post-launch feedback. The best ideas usually emerge through collaboration rather than individual ownership." },
      { type: "heading2", text: "My Process" },
      { type: "heading3", text: "1. What problem are we solving?" },
      { type: "paragraph", text: "Before discussing features, I want to understand who experiences the problem, how often it occurs, and why existing solutions aren't enough." },
      { type: "heading3", text: "2. Is this worth solving now?" },
      { type: "paragraph", text: "Not every problem deserves immediate attention. I evaluate business impact, customer value, engineering effort, and strategic alignment before prioritizing work." },
      { type: "heading3", text: "3. What is the smallest valuable solution?" },
      { type: "paragraph", text: "Instead of building complete systems immediately, I focus on identifying the smallest version capable of validating assumptions. This reduces risk while accelerating learning." },
      { type: "heading3", text: "4. How will we measure success?" },
      { type: "paragraph", text: "Every feature should have a clear outcome. Success isn't defined by deployment-it is defined by user adoption, business impact, or improved workflows." },
      { type: "heading3", text: "5. What happens next?" },
      { type: "paragraph", text: "Launching a product isn't the finish line. Every release creates new insights that shape the roadmap. Continuous improvement is part of the product itself." },
      { type: "heading2", text: "Areas That Interest Me" },
      { type: "paragraph", text: "I enjoy building products in spaces where technology meaningfully improves how people work. Current interests include: AI-powered products, Healthcare technology, Internal productivity platforms, Workflow automation, SaaS, B2B software, Marketplace products." },
      { type: "paragraph", text: "I'm particularly interested in products that reduce repetitive work, improve decision-making, or simplify complex operational workflows." },
      { type: "heading2", text: "Beyond Work" },
      { type: "paragraph", text: "Outside product management, I enjoy studying successful products, reading about startup strategy, exploring AI tools, and analyzing why certain products achieve product-market fit while others struggle. I'm constantly experimenting with new ideas, documenting product observations, and learning from builders across different industries. I believe great Product Managers remain curious long after products are shipped." },
      { type: "heading2", text: "Looking Ahead" },
      { type: "paragraph", text: "I'm excited to work with teams building products that solve meaningful problems at scale. My goal is to continue growing as a Product Manager by working closely with talented engineers, designers, founders, and customers-learning from every product, every experiment, and every iteration. For me, product management isn't just about shipping features. It's about building products that people genuinely find useful." }
    ]
  }
];
