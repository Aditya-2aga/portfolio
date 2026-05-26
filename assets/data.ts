import { assets } from "./assets";

export const experienceData = [
  {
    company: "Nexerve",
    role: "Founding Team - Product",
    period: "Dec 2025 - Present",
    location: "Lucknow, IN",
    points: [
      "Owned end-to-end product strategy for an AI-powered healthcare SaaS, driving 0→1 MVP from concept to early revenue in under 3 months.",
      "Conducted 10+ user research and client discovery sessions to validate product-market fit and continuously prioritize the feature roadmap.",
      "Onboarded 5+ early clients by aligning product capabilities with real business workflows, directly contributing to initial revenue."
    ],
  },
  {
    company: "Wingify (VWO)",
    role: "Frontend Intern",
    period: "Jul 2025 - Dec 2025",
    location: "Remote",
    points: [
      "Collaborated with product and experimentation teams to improve internal A/B testing workflows and dashboard usability across multiple product squads.",
      "Built reusable UI systems and component libraries improving dashboard consistency and reducing experimentation setup time.",
      "Contributed to localization workflows using i18next, enabling international product accessibility across multiple markets."
    ]
  },
  {
    company: "DiGiLABS",
    role: "Product Intern",
    period: "Mar 2025 - Jun 2025",
    location: "Lucknow, IN (Hybrid)",
    points: [
      "Built and shipped a School ERP platform addressing operational inefficiencies across student, teacher, and admin workflows for a real institutional client.",
      "Translated stakeholder requirements into product features - designing data flows, role-based access, and real-time dashboards across user personas.",
      "Delivered scalable backend APIs and database-connected interfaces enabling live operational data across all user roles."
    ]
  },
  {
    company: "IBM SkillsBuild - CSRBOX",
    role: "Frontend Developer Intern",
    period: "Jun 2024 - Aug 2024",
    location: "Virtual",
    points: [
      "Gained expertise in HTML, CSS, JavaScript, and React.js through industry-led training.",
      "Developed a frontend project aligned with UN Sustainable Development Goals using custom Bootstrap and JS.",
      "Project Link: SeekhLo"
    ]
  }
];

export const projectsData = [
  {
    title: "Zerohm",
    tagline: "Innovative tech ecommerce platform",
    description: "Detailed description of Zerohm coming soon. Designed to solve complex challenges with an intuitive user experience.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    link: "https://www.zerohm.in",
    color: "#E2E8F0", // Light theme
    image: "/work-1.png"
  },
  {
    title: "Terrarex",
    tagline: "Sustainable energy solutions",
    description: "Detailed description of Terrarex coming soon. Focused on creating impactful, scalable infrastructure for a greener future.",
    tech: ["React", "Firebase", "Motion"],
    link: "https://terrarex-test.vercel.app",
    color: "#1E293B", // Dark theme
    image: "/work-2.png"
  },
  {
    title: "Parth Hospital",
    tagline: "Healthcare SaaS ERP",
    description: "Defined and built a hospital ERP streamlining appointment management, clinical workflows, and internal coordination across multiple staff roles. Integrated AI-powered transcription and clinical summaries via Gemini API, reducing staff documentation time by ~40%. Automated patient follow-up and notification workflows via n8n.",
    tech: ["Next.js", "Fastify", "PostgreSQL", "Gemini API", "n8n"],
    link: "https://parthhospital.co.in/",
    color: "#F3F4F6",
    image: "/work-3.png"
  },
  {
    title: "FindFast",
    tagline: "Commercial Real Estate Platform",
    description: "Identified gap in commercial property discovery; designed structured listing flows and search UX to improve match quality between businesses and commercial spaces. Shipped end-to-end platform covering listings, search filters, and lead capture. Implemented Firebase authentication and real-time data sync.",
    tech: ["Next.js", "Node.js", "MongoDB", "Firebase"],
    link: "https://findfast.space",
    color: "#0F172A",
    image: "/work-4.png"
  },
  {
    title: "Customer Churn Predictor",
    tagline: "Analytics Dashboard",
    description: "Trained and evaluated Logistic Regression, Random Forest, and XGBoost models on a 7,000-row telecom dataset; XGBoost achieved 82% accuracy and 0.86 AUC-ROC. Applied SHAP explainability to surface top churn drivers. Deployed a Streamlit dashboard enabling non-technical teams to query real-time churn probability.",
    tech: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    link: "https://churn-app-calci.streamlit.app/",
    color: "#E5E7EB",
    image: "/work-5.png"
  }
];

export const skillsData = {
  product: ["Strategy", "Roadmapping", "User Research", "Prioritization", "MVP Definition", "Stakeholder Management", "A/B Testing", "Product Analytics"],
  languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  frameworks: ["Next.js", "Node.js", "Express.js", "FastAPI", "Pandas", "NumPy", "Streamlit", "Supabase", "Firebase"],
  devTools: ["Git", "Jira", "Postman", "Cursor", "Figma", "Power BI", "Google Studio"],
  aiAutomation: ["Prompt Engineering", "Gemini API", "n8n", "Gen AI integration"]
};
