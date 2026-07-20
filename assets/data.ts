export const heroMetrics = [
  { label: "Products Built", value: "4+" },
  { label: "Early Clients", value: "5+" },
  { label: "AI Features Delivered", value: "10+" },
  { label: "Marketplace Listings", value: "600+" },
];

export const featuredProducts = [
  {
    id: "nexflow",
    slug: "nexflow",
    title: "NexFlow",
    tagline: "Internal Product Management Platform",
    domain: "Internal Productivity",
    stage: "Internal Product",
    role: "Product Strategy & Product Management",
    teamSize: "Cross-functional",
    primaryKPI: "15+ Active Internal Users",
    usersImpacted: "Product, Engineering, QA, Design",
    problem: "Our growing product, engineering, QA, and design teams were managing work across multiple disconnected tools, resulting in poor visibility, inconsistent planning, and fragmented communication.",
    solution: "Led product discovery and roadmap planning for NexFlow-an internal platform that centralized project planning, sprint management, QA workflows, Kanban boards, role-based access, support ticketing, and AI-powered sprint effort prediction.",
    impact: "Adopted by 15+ internal users, managing 20+ projects, tracking 500+ tasks, and vastly improving cross-functional collaboration.",
    metrics: [
      { label: "Projects Managed", value: "20+" },
      { label: "Tasks Tracked", value: "500+" },
    ],
  },
  {
    id: "parth-hospital",
    slug: "parth-hospital",
    title: "Parth Hospital",
    tagline: "AI-powered Healthcare SaaS",
    domain: "Healthcare SaaS",
    stage: "Production",
    role: "Product Strategy & Product Development",
    teamSize: "Product, Engineering, Staff",
    primaryKPI: "-40% Documentation Effort",
    usersImpacted: "Doctors, Receptionists, Admins",
    problem: "Hospital staff relied on disconnected workflows, manual documentation, and repetitive communication, slowing patient operations and increasing administrative effort.",
    solution: "Designed and built an AI-enabled hospital ERP with appointment management, AI-generated clinical summaries, workflow automation, and centralized dashboards for doctors, staff, and administrators.",
    impact: "Reduced documentation effort by approximately 40%, automated patient follow-ups, and improved operational coordination across departments.",
    metrics: [
      { label: "Doc Effort", value: "-40%" },
      { label: "Follow-ups", value: "Automated" }
    ],
  },
  {
    id: "findfast",
    slug: "findfast",
    title: "FindFast",
    tagline: "Commercial Real Estate Marketplace",
    domain: "Commercial Real Estate",
    stage: "0→1 MVP",
    role: "Product Manager",
    teamSize: "Product, Engineering",
    primaryKPI: "600+ Verified Listings",
    usersImpacted: "Business Owners & Brokers",
    problem: "Commercial property discovery lacked structure, making it difficult for businesses to compare listings and connect with property owners efficiently.",
    solution: "Built a marketplace focused on structured listings, advanced search, lead generation, and streamlined property discovery.",
    impact: "Successfully launched the marketplace, acquiring 600+ verified listings, 200+ registered users, and 50+ paying customers to validate demand.",
    metrics: [
      { label: "Registered Users", value: "200+" },
      { label: "Paying Customers", value: "50+" },
    ],
  }
];

export const experienceData = [
  {
    role: "Founding Team – Product",
    company: "Nexerve",
    period: "Dec 2025 – Jul 2026",
    domain: "AI SaaS",
    stage: "0 → 1 MVP",
    teamSize: "Founding (Product)",
    businessContext: "Nexerve functioned as a product and technology partner for various businesses. While we developed an AI-powered healthcare platform for one client, we also built tailored technology solutions for other clients.",
    ownership: "Led product discovery from concept to MVP across multiple client projects. Conducted 10+ customer sessions, prioritized roadmaps, and wrote PRDs.",
    collaboration: "Worked closely with founders, engineers, and clients across different industries to continuously validate assumptions.",
    customerImpact: "Successfully built and launched multiple MVPs, solving real operational problems and accelerating time-to-market for our early clients.",
    growth: "Customer conversations often changed our priorities more than internal discussions. The faster we validated assumptions, the faster we built meaningful features.",
    impact: "Onboarded 5+ early clients and contributed to early revenue generation within 3 months.",
    metrics: ["10+ Discovery Sessions", "5+ Early Clients", "MVP in <3 months"],
    technologies: ["Figma", "Jira", "Notion", "Mixpanel"]
  },
  {
    role: "Engineer Intern",
    company: "Wingify (VWO)",
    period: "Jul 2025 – Dec 2025",
    domain: "B2B Product",
    stage: "Growth Product",
    teamSize: "App-Tech-Improvement",
    businessContext: "Wingify builds experimentation and optimization products used by businesses worldwide.",
    ownership: "Built reusable UI components, improved experimentation dashboards, and supported localization workflows.",
    collaboration: "Collaborated with product and experimentation teams to improve internal A/B testing workflows and dashboard usability.",
    customerImpact: "Improved dashboard consistency and reduced duplication through reusable component systems.",
    growth: "Learned the importance of experimentation, reusable systems, and maintaining product quality while shipping continuously.",
    impact: "Contributed to localization across multiple markets, enabling international product accessibility.",
    metrics: ["Reusable UI Systems", "Localization/i18next", "Dashboard Usability"],
    technologies: ["React", "TypeScript", "i18next", "Analytics"]
  },
  {
    role: "Product Intern",
    company: "DiGiLABS",
    period: "Mar 2025 – Jun 2025",
    domain: "Education Technology",
    stage: "Client Product",
    teamSize: "Cross-functional",
    businessContext: "Educational institutions often relied on fragmented administrative systems that created unnecessary operational complexity.",
    ownership: "Gathered stakeholder requirements, designed workflows, defined product functionality, and built role-based dashboards.",
    collaboration: "Worked directly with institutional stakeholders, engineering, and product leadership to ensure the product reflected real operational workflows.",
    customerImpact: "Digitized multiple institutional workflows, addressing operational inefficiencies across student, teacher, and admin personas.",
    growth: "Every organization has unique workflows. Successful products gradually improve existing processes while minimizing friction.",
    impact: "Delivered a scalable backend API and functional School ERP to digitize institutional workflows.",
    metrics: ["Role-based Access", "Workflow Digitization", "Scalable APIs"],
    technologies: ["Node.js", "APIs", "Dashboards", "SQL"]
  }
];

export const productProcess = [
  {
    stage: "Discover",
    description: "Understanding customers through interviews, observations, and problem validation.",
    details: {
      frameworks: ["User Interviews", "Problem Statements", "Opportunity Mapping"],
      deliverables: ["User Interviews", "Personas", "Opportunity Mapping"],
      example: "Every roadmap should begin with understanding user pain, not assumptions."
    },
    tools: ["Figma", "Notion", "Zoom"]
  },
  {
    stage: "Research",
    description: "Analyze competitors, existing workflows, and market opportunities before defining the product.",
    details: {
      frameworks: ["JTBD", "Competitive Analysis", "User Journey Maps"],
      deliverables: ["JTBD", "Competitive Analysis", "Journey Maps"],
      example: "Products become simpler when the problem becomes clearer."
    },
    tools: ["Miro", "PostHog", "Mixpanel"]
  },
  {
    stage: "Prioritize",
    description: "Convert ideas into a realistic roadmap using business value, user impact, and engineering effort.",
    details: {
      frameworks: ["RICE Prioritization", "MVP Definition"],
      deliverables: ["PRDs", "MVP Definition", "RICE Scores"],
      example: "Every feature competes for limited engineering time. Good product managers decide what not to build."
    },
    tools: ["Jira", "Linear", "Notion"]
  },
  {
    stage: "Build",
    description: "Collaborate with engineering, design, and stakeholders throughout development.",
    details: {
      frameworks: ["Sprint Planning", "Product Reviews", "QA Feedback"],
      deliverables: ["Sprint Planning", "Product Reviews", "QA Feedback"],
      example: "Shipping an MVP is the beginning of learning, not the end of building."
    },
    tools: ["Cursor", "GitHub", "Vercel"]
  },
  {
    stage: "Measure",
    description: "Track adoption, usage, and business outcomes after launch.",
    details: {
      frameworks: ["Product Analytics", "User Feedback", "KPI Tracking"],
      deliverables: ["Product Analytics", "Feedback Surveys", "KPI Dashboards"],
      example: "Features don't matter unless they improve customer experience or business results."
    },
    tools: ["Mixpanel", "Google Analytics", "Amplitude"]
  },
  {
    stage: "Iterate",
    description: "Use customer feedback and product metrics to continuously improve the experience.",
    details: {
      frameworks: ["Feature Improvements", "Roadmap Updates", "Product Retrospectives"],
      deliverables: ["Feature Improvements", "Roadmap Updates", "Retrospectives"],
      example: "Continuous improvement is part of the product itself."
    },
    tools: ["Notion", "Slack", "Jira"]
  }
];

export const skillsGroups = [
  {
    title: "Product Management",
    skills: ["Product Strategy", "Product Discovery", "Roadmapping", "PRD Writing", "MVP Definition", "Prioritization (RICE/MoSCoW)", "User Research", "Stakeholder Management"]
  },
  {
    title: "Analytics & Experimentation",
    skills: ["Product Analytics", "A/B Testing", "KPI Definition", "Funnel Analysis", "Market Research", "User Feedback Analysis"]
  },
  {
    title: "Tools",
    skills: ["Jira", "Cursor", "Figma", "Google Analytics", "PostHog", "Mixpanel", "Notion"]
  },
  {
    title: "AI",
    skills: ["Prompt Engineering", "LLM Integration", "Gemini API", "AI Feature Design", "n8n Automation"]
  },
  {
    title: "Technical",
    skills: ["SQL", "Python", "TypeScript", "Next.js", "Node.js", "Django"]
  }
];

export const otherProducts = [
  {
    title: "Zerohm",
    tagline: "Innovative tech ecommerce platform",
    description: "Designed to solve complex challenges with an intuitive user experience. Modernized the storefront experience in the electrical products market with scalable backend architecture.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    link: "https://www.zerohm.in",
    color: "#E2E8F0",
    image: "/work-1.png"
  },
  {
    title: "Terrarex",
    tagline: "Sustainable energy solutions",
    description: "Focused on creating impactful, scalable infrastructure for a greener future. Developed a sustainability-focused digital platform for enterprise solar services.",
    tech: ["React", "Firebase", "Motion"],
    link: "https://www.terrarexenergy.com/",
    color: "#F1F5F9",
    image: "/work-2.png"
  },
  {
    title: "Motilal Vishunchand",
    tagline: "100+ year old legacy sweet shop",
    description: "Digitized a century-old legacy brand with a modern online presence. Built a business website focused on honoring tradition while driving customer engagement and digital brand identity.",
    tech: ["Web Development", "SEO", "UI/UX"],
    link: "https://www.motilalvishunchand.in",
    color: "#F8FAFC",
    image: "/work-3.png"
  },
  {
    title: "Customer Churn Predictor",
    tagline: "Analytics Dashboard",
    description: "Trained XGBoost models on a telecom dataset achieving 82% accuracy. Applied SHAP to surface top drivers, and deployed a Streamlit dashboard enabling teams to query real-time churn probability.",
    tech: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    link: "https://churn-app-calci.streamlit.app/",
    color: "#E5E7EB",
    image: "/work-5.png"
  }
];

export const achievementsData = [
  {
    year: "2025",
    title: "AJVC Pre-Seed Funding Evaluation",
    description: "Selected for multiple rounds of AJVC's pre-seed funding evaluation process, strengthening understanding of product positioning and market opportunity."
  },
  {
    year: "2024",
    title: "Joint Secretary - E-Cell MMMUT",
    description: "Helped organize entrepreneurship initiatives, startup events, and workshops for 500+ students."
  },
  {
    year: "2024",
    title: "Technical Head - ECES MMMUT",
    description: "Led technical initiatives and coordinated a team of 15+ student volunteers across multiple events and activities."
  },
  {
    year: "2022",
    title: "Smart India Hackathon 2022",
    description: "Qualified for the State Round of Smart India Hackathon, reinforcing the importance of rapid problem-solving and iterative thinking."
  }
];
