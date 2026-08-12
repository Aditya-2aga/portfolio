export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { 
      type: "executiveSummary"; 
      data: { role: string; team: string; timeline: string; stage: string; users: string; goal: string; northStar: string; outcome: string; }
    }
  | { 
      type: "contextualMetric"; 
      data: { label: string; value: string; why: string; how: string; change: string; }
    }
  | {
      type: "researchArtifact";
      data: { 
        jtbd: string; 
        assumptions: { text: string; validated: boolean }[]; 
        clusters: { theme: string; insights: string[] }[]; 
      }
    }
  | {
      type: "decisionLog";
      data: { context: string; constraint: string; alternatives: string[]; decision: string; expectedImpact: string; actualOutcome: string; }
    }
  | {
      type: "mvpScope";
      data: { ideas: string[]; prioritized: string[]; mvp: string[]; }
    }
  | {
      type: "tradeoffs";
      data: { didNotBuild: string; reason: string; impactOnMVP: string; }
    }
  | {
      type: "productTimeline";
      data: { events: { phase: string; duration: string; detail: string; }[]; }
    }
  | {
      type: "retrospective";
      data: { mistakes: string[]; techDebt: string; lessons: string[]; }
    };

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  date: string;
  content: ContentBlock[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aureeture",
    title: "AureetureAI",
    tagline: "AI Native Hiring & Talent Discovery Platform",
    role: "Product Lead",
    timeline: "Mar 2026 – Present",
    date: "2026-08-12",
    content: [
      {
        type: "executiveSummary",
        data: {
          role: "Product Lead",
          team: "Product & Engineering",
          timeline: "Mar 2026 – Present",
          stage: "0 → 1 MVP to V2",
          users: "Recruiters & Fresher Candidates",
          goal: "Simplify and enhance fresher hiring by building a two-sided marketplace that leverages an AI Digital Twin, Agentic ATS Execution, and continuous candidate calibration.",
          northStar: "Agent-Driven Application Success",
          outcome: "Scaled platform to 1,000+ talents, secured early recruiter adoption, and deployed a 4-node microservices architecture powering CARO AI."
        }
      },
      { type: "heading2", text: "Executive Overview" },
      { type: "paragraph", text: "Traditional hiring platforms rely heavily on keyword-based searches, which often fail to capture the true potential of fresher candidates who lack extensive work history. AureetureAI was built to bridge this gap by offering a deeply technical, AI-native talent discovery platform. Rather than just matching keywords, AureetureAI builds a continuously evolving 'Digital Twin' of each candidate, evaluating skills, intent, and fit more effectively through AI Calibration Interviews and real-world project performance." },
      { type: "heading2", text: "Talent-Side Platform & Digital Twin" },
      { type: "paragraph", text: "The candidate experience shifts from manual resume uploading to continuous capability building. The platform centers around the Digital Twin—an evidence-based representation of a candidate built from skills, experience, verified project performance, and AI Interview results. Key features include:" },
      { type: "paragraph", text: "• AI Calibration Interview: Generated from actual profile data to test technical depth and problem-solving, triggering delta-focused follow-ups on profile changes.\n• Dynamic Profile Score: A continuously responsive CIBIL-style score grading candidates into Tiered bands (<600, 600-700, >700).\n• AI-Tailored Resume: Generates a per-opportunity resume from the Digital Twin and Target JD without inventing information.\n• ATS Execution Agent: An agentic system that opens ATS portals (Greenhouse, Lever, Workday), fills fields, uploads the resume, and manages application status via a queued worker model (HITL approved)." },
      { type: "heading2", text: "Enterprise-Side Platform (CARO AI)" },
      { type: "paragraph", text: "For recruiters, the platform provides deep analytical tooling via CARO AI. Instead of presenting a bare score, CARO ranks candidates with explained reasoning and proactively recommends next actions (e.g., technical assessment, human interview). It also operates an Interview Marketplace to identify appropriate human interviewers and folds post-interview feedback back into the candidate's Digital Twin." },
      { type: "heading2", text: "Microservices Topology & Architecture" },
      { type: "paragraph", text: "The platform operates on a four-node, event-driven microservice ecosystem designed for scale and agentic reliability:" },
      { type: "paragraph", text: "1. Client Layer: Next.js 15 Frontend (App Router, SSR + Client).\n2. API & Orchestration Layer: Node.js / Express API acting as the central orchestrator.\n3. AI Intelligence Layer: Python / FastAPI AI Engine housing CARO and the Digital Twin generation logic, interfacing with OpenRouter (LLM Gateway) and Celery Workers for heavy ML tasks.\n4. Data Layer: PostgreSQL (Prisma ORM) for relational data and Redis (BullMQ + Celery Broker) for caching and asynchronous queue management." },
      { type: "heading2", text: "Product Strategy & Decisions" },
      { type: "paragraph", text: "The strategy was to build a sophisticated two-sided marketplace. A core challenge was ensuring the reliability of the AI Application Execution Agent while navigating complex CAPTCHA/MFA environments." },
      {
        type: "decisionLog",
        data: {
          context: "Agentic applications face significant friction from ATS security measures (CAPTCHA/OTP).",
          constraint: "Silent failures degrade trust; false reporting ruins the user experience.",
          alternatives: ["Attempt to aggressively bypass all security", "Limit supported ATS platforms completely", "Implement a 'Further Action Required' state"],
          decision: "Treated CAPTCHA/MFA as expected environment limitations. Applications enter a controlled 'further action required' state rather than silently failing.",
          expectedImpact: "Maintains absolute transparency with the candidate regarding their application status pipeline.",
          actualOutcome: "High trust and reliability in the Application Pipeline (discovery → review → approval → submission → outcome)."
        }
      },
      { type: "heading2", text: "Scope and Tradeoffs" },
      { type: "paragraph", text: "The MVP and V2 focused on robust architecture and agentic execution mechanics rather than broad platform coverage." },
      {
        type: "mvpScope",
        data: {
          ideas: ["Support all 50+ ATS platforms", "Digital Twin", "Agentic Apply", "CARO AI Ranking", "Video Interviews", "Skill Assessments"],
          prioritized: ["Digital Twin", "Agentic Apply (Greenhouse, Lever, Workday)", "CARO AI Ranking", "AI Calibration Interview"],
          mvp: ["Digital Twin", "Agentic Apply (Top 3 ATS)", "CARO AI Ranking", "AI Calibration Interview"]
        }
      },
      {
        type: "tradeoffs",
        data: {
          didNotBuild: "Broad ATS site coverage",
          reason: "An 'ATS-first automation strategy' prioritized Greenhouse, Lever, and Workday for reliability and scale over attempting to support every obscure career portal.",
          impactOnMVP: "Allowed the engineering team to stabilize the agentic worker queue and ensure high success rates on the most critical platforms."
        }
      },
      { type: "heading2", text: "Retrospective" },
      { type: "paragraph", text: "Building AureetureAI reinforced the importance of creating evidence-based talent systems. The feedback loop (Profile → Digital Twin → Validation → Projects → Score → Opportunities → Application → Real-World Outcome → Digital Twin) proved to be the core flywheel." },
      {
        type: "retrospective",
        data: {
          mistakes: [
             "Underestimated the initial complexity of tuning OpenRouter AI models for precise Resume tailoring without hallucinations."
          ],
          techDebt: "Need to continually upgrade the execution agent to handle dynamically changing ATS DOM structures.",
          lessons: [
            "Human-in-the-loop (HITL) approval before auto-apply execution is mandatory for trust.",
            "AI is most effective when it augments a recruiter's workflow (e.g., CARO explaining reasoning) rather than operating as a black box."
          ]
        }
      }
    ]
  },
  {
    slug: "nexflow",
    title: "NexFlow",
    tagline: "AI-powered Project Management Platform",
    role: "Founding Team - Product",
    timeline: "Dec 2025 – Jul 2026",
    date: "2026-07-20",
    content: [
      {
        type: "executiveSummary",
        data: {
          role: "Founding Team - Product",
          team: "Cross-functional (Engineering, Product, QA, Design)",
          timeline: "Dec 2025 – Jul 2026",
          stage: "0 → 1 MVP",
          users: "Internal Product, Engineering, QA, and Design Teams",
          goal: "Enable modern software teams to manage projects, collaborate effectively, and deliver work faster through an AI-native project management platform.",
          northStar: "Weekly Active Teams",
          outcome: "15+ active internal users, 20+ projects managed, 500+ tasks tracked, and cross-functional adoption."
        }
      },
      { type: "heading2", text: "Executive Overview" },
      { type: "paragraph", text: "Most growing startups begin with simple project management tools. As teams scale, work becomes fragmented across multiple platforms such as Slack, Notion, Jira, Google Docs, GitHub, and spreadsheets. This fragmentation creates several challenges: Teams lose visibility into project health, sprint planning becomes manual, work estimation is inconsistent, team members struggle to prioritize, and managers spend significant time tracking progress instead of enabling delivery." },
      { type: "paragraph", text: "NexFlow was built to centralize these workflows while using AI to assist with planning, task creation, sprint estimation, and project insights. The objective wasn't to compete feature-for-feature with enterprise products like Jira. Instead, the goal was to create a lightweight, AI-first platform that startups could adopt quickly without extensive onboarding." },
      { type: "heading2", text: "Business Context" },
      { type: "paragraph", text: "Software teams increasingly rely on multiple disconnected tools throughout the product development lifecycle. While each tool performs well individually, switching between platforms creates friction that reduces overall productivity." },
      {
        type: "contextualMetric",
        data: {
          label: "Planning Overhead",
          value: "High Friction",
          why: "Managing work often feels like another full-time job. Planning sprints, writing tasks, estimating effort, updating project status, and creating reports consumed valuable engineering time.",
          how: "Discussions with startup founders, developers, and project leads.",
          change: "Reduced planning overhead through intelligent automation."
        }
      },
      { type: "heading2", text: "User Research & Discovery" },
      { type: "paragraph", text: "The research phase focused on understanding where teams spend the most time managing projects, which repetitive activities could be automated, what causes projects to lose momentum, and which existing workflows should remain familiar to reduce adoption friction." },
      {
        type: "researchArtifact",
        data: {
          jtbd: "When planning a new sprint, I want AI to recommend task priorities and estimate workload, so that sprint planning becomes faster and more consistent.",
          assumptions: [
            { text: "Teams don't struggle because they lack tools, but because information is fragmented.", validated: true },
            { text: "Sprint planning consumes more time than expected.", validated: true },
            { text: "AI should generate complete content without review.", validated: false }
          ],
          clusters: [
            { theme: "Developer Pain Points", insights: ["Unclear task priorities", "Frequent context switching", "Manual status updates"] },
            { theme: "Manager Needs", insights: ["Are we on track?", "Which sprint is at risk?", "What is blocked?"] }
          ]
        }
      },
      { type: "heading2", text: "Product Strategy & Decisions" },
      { type: "paragraph", text: "Instead of competing with established enterprise project management platforms on the number of features, NexFlow differentiated by reducing operational effort through intelligent automation." },
      {
        type: "decisionLog",
        data: {
          context: "Users wanted AI features but did not want to lose control over their workflows.",
          constraint: "AI-generated recommendations may not always align with project context.",
          alternatives: ["Fully autonomous task planning", "No AI assistance", "AI as a collaborator"],
          decision: "Integrate AI as a collaborator (AI Sprint Planning, AI Task Breakdown). Allow users to review and edit all AI-generated outputs before applying changes.",
          expectedImpact: "Teams spend less time planning sprints while retaining full control over project execution.",
          actualOutcome: "The strongest feedback came from features that removed repetitive work, such as drafting task descriptions or assisting with sprint planning."
        }
      },
      { type: "heading2", text: "Scope and Tradeoffs" },
      { type: "paragraph", text: "The MVP prioritized simplicity, collaboration, and AI-assisted productivity over feature breadth." },
      {
        type: "mvpScope",
        data: {
          ideas: ["Kanban", "AI Sprint Suggestions", "Time Tracking", "GitHub Integration", "Mobile App"],
          prioritized: ["Organizations", "Projects", "Kanban", "Sprint Planning", "AI Sprint Suggestions", "Notifications", "Analytics Dashboard"],
          mvp: ["Organizations", "Projects", "Kanban", "Sprint Planning", "AI Sprint Suggestions", "Notifications", "Analytics Dashboard"]
        }
      },
      {
        type: "tradeoffs",
        data: {
          didNotBuild: "GitHub and Slack Integrations",
          reason: "Deferred to Phase 4 (Integrations & Scale) to focus first on enabling teams to manage projects end-to-end within a single workspace.",
          impactOnMVP: "Initial users had to update task status manually, but the core workflow visibility was achieved."
        }
      },
      { type: "heading2", text: "Retrospective" },
      { type: "paragraph", text: "Building NexFlow reinforced several product management principles. Simplicity wins-users consistently valued clarity over extensive feature sets. AI should support, not replace. Product visibility matters." },
      {
        type: "retrospective",
        data: {
          mistakes: [
            "Users may continue using existing tools due to familiarity if onboarding isn't seamless.",
            "AI recommendations sometimes lacked context initially."
          ],
          techDebt: "Need to invest earlier in analytics and workflow insights rather than treating them as future enhancements.",
          lessons: [
            "The best products don't succeed because they have the most features-they succeed because they solve the right problems with clarity and simplicity.",
            "AI features create value only when they remove meaningful friction."
          ]
        }
      }
    ]
  },
  {
    slug: "parth-hospital",
    title: "Parth Hospital ERP",
    tagline: "AI-powered Hospital Management System",
    role: "Founding Team - Product",
    timeline: "2025 – Present",
    date: "2026-07-20",
    content: [
      {
        type: "executiveSummary",
        data: {
          role: "Founding Team - Product",
          team: "Product, Engineering, Hospital Staff",
          timeline: "2025 – Present",
          stage: "Production",
          users: "Doctors, Receptionists, Administrators, Patients",
          goal: "Digitize hospital operations through an AI-powered platform that simplifies administrative workflows and improves clinical efficiency.",
          northStar: "Daily Active Hospital Staff",
          outcome: "Reduced documentation effort by ~40%, automated patient follow-ups, and improved coordination across hospital staff."
        }
      },
      { type: "heading2", text: "Executive Overview" },
      { type: "paragraph", text: "Many small and mid-sized hospitals continue to rely on fragmented software, spreadsheets, and paper-based processes. Departments such as reception, doctors, billing, pharmacy, administration, and HR often operate independently, resulting in duplicated work, operational delays, and poor visibility across the organization." },
      { type: "paragraph", text: "Parth Hospital ERP was designed to unify these workflows into a centralized platform while introducing AI capabilities to reduce repetitive administrative tasks. The primary objective was to simplify hospital operations without disrupting existing clinical workflows." },
      { type: "heading2", text: "Business Context & Problems" },
      { type: "paragraph", text: "Healthcare institutions manage hundreds of operational processes every day. Most hospitals use multiple disconnected systems or manual processes, which creates several operational challenges: duplicate patient records, long waiting times, administrative overload, and poor reporting." },
      {
        type: "contextualMetric",
        data: {
          label: "Documentation Effort",
          value: "High",
          why: "Doctors spend valuable consultation time documenting cases manually.",
          how: "Interviews with doctors and workflow observation.",
          change: "Reduced documentation effort by approximately 40% using AI Clinical Summaries."
        }
      },
      { type: "heading2", text: "User Research & Discovery" },
      { type: "paragraph", text: "Rather than beginning with feature ideas, I focused on understanding how different hospital roles interacted with the system every day." },
      {
        type: "researchArtifact",
        data: {
          jtbd: "When treating patients, I want AI to assist with documentation, so that I spend more time providing care.",
          assumptions: [
            { text: "Doctors will trust AI entirely to write medical notes.", validated: false },
            { text: "Receptionists need faster patient registration and appointment scheduling.", validated: true }
          ],
          clusters: [
            { theme: "Doctor Needs", insights: ["Reduce paperwork", "Access patient history instantly", "Time-consuming documentation"] },
            { theme: "Reception Needs", insights: ["Faster registration", "Queue management", "Duplicate data entry"] }
          ]
        }
      },
      { type: "heading2", text: "Product Strategy & Decisions" },
      { type: "paragraph", text: "Instead of digitizing existing paperwork, the opportunity was to redesign workflows around automation and AI. Rather than asking 'How do we digitize this form?', we asked 'Should this task exist at all?'" },
      {
        type: "decisionLog",
        data: {
          context: "Doctors still spent considerable time writing clinical notes, but full automation could disrupt clinical trust.",
          constraint: "Integrating AI without disrupting clinical trust and maintaining medical accuracy.",
          alternatives: ["Manual typing forms", "Dictation software", "AI-generated clinical summaries using Gemini API"],
          decision: "Introduce AI-generated clinical summaries. Generate summary, doctor reviews, edits if required, and saves to EMR.",
          expectedImpact: "Reduce documentation time while maintaining doctor oversight.",
          actualOutcome: "Documentation effort reduced by approximately 40%."
        }
      },
      { type: "heading2", text: "Scope and Tradeoffs" },
      { type: "paragraph", text: "Product decisions balanced Clinical Value, Operational Impact, and Engineering Complexity. Features reducing repetitive work received higher priority than reporting or analytics." },
      {
        type: "mvpScope",
        data: {
          ideas: ["Patient Management", "Appointments", "EMR", "Billing", "AI Clinical Summary", "Telemedicine", "Pharmacy"],
          prioritized: ["Patient Management", "Appointments", "EMR", "Billing", "Staff Management", "AI Clinical Summary", "Dashboard"],
          mvp: ["Patient Management", "Appointments", "EMR", "Billing", "Staff Management", "AI Clinical Summary", "Dashboard"]
        }
      },
      {
        type: "tradeoffs",
        data: {
          didNotBuild: "Telemedicine and Insurance Claims",
          reason: "Deferred to Phase 3 to focus on core operational workflows and ease the transition for staff.",
          impactOnMVP: "Allowed faster launch of the core ERP, validating the AI summarization workflow first."
        }
      },
      { type: "heading2", text: "Retrospective" },
      { type: "paragraph", text: "Building Parth Hospital ERP demonstrated that enterprise software succeeds through workflow understanding rather than feature count." },
      {
        type: "retrospective",
        data: {
          mistakes: [
            "Initial resistance to workflow change from staff.",
            "Data migration complexity was underestimated."
          ],
          techDebt: "Need to invest earlier in analytics and operational insights to help administrators make faster decisions.",
          lessons: [
            "Healthcare products succeed when they simplify workflows rather than digitize complexity.",
            "AI delivers the most value when it removes repetitive work instead of replacing human judgment.",
            "The best enterprise products adapt to existing workflows before attempting to transform them."
          ]
        }
      }
    ]
  },
  {
    slug: "findfast",
    title: "FindFast",
    tagline: "Commercial Real Estate Marketplace",
    role: "Founding Team - Product",
    timeline: "2025",
    date: "2026-07-20",
    content: [
      {
        type: "executiveSummary",
        data: {
          role: "Founding Team - Product",
          team: "Product, Engineering",
          timeline: "2025",
          stage: "0 → 1 MVP",
          users: "Business Owners, Property Owners, Commercial Brokers",
          goal: "Simplify commercial property discovery by creating a transparent, searchable, and data-driven marketplace.",
          northStar: "Qualified Property Inquiries",
          outcome: "600+ verified commercial property listings, 200+ registered users, 50+ paying customers."
        }
      },
      { type: "heading2", text: "Executive Overview" },
      { type: "paragraph", text: "Businesses searching for commercial spaces often rely on fragmented sources such as brokers, classified websites, WhatsApp groups, and personal networks. This makes discovering suitable properties slow, inconsistent, and highly dependent on intermediaries. FindFast was designed to centralize commercial property discovery through verified listings, advanced search, lead management, and broker collaboration." },
      { type: "heading2", text: "Business Context" },
      { type: "paragraph", text: "Commercial real estate transactions involve multiple stakeholders and complex considerations like lease terms, accessibility, and business requirements. The existing market lacked platforms focused specifically on commercial properties, resulting in fragmented discovery experiences and limited transparency." },
      {
        type: "contextualMetric",
        data: {
          label: "Listing Quality",
          value: "Poor",
          why: "Unrestricted property submissions led to poor listing quality, significantly reducing marketplace trust.",
          how: "User research and listing analysis.",
          change: "Introduced structured listing requirements and verification, reaching 600+ verified listings."
        }
      },
      { type: "heading2", text: "User Research & Discovery" },
      { type: "paragraph", text: "Research focused on understanding how businesses currently searched for office spaces and where they experienced the most friction." },
      {
        type: "researchArtifact",
        data: {
          jtbd: "When searching for commercial space, I want accurate filters, so that I only see properties relevant to my business.",
          assumptions: [
            { text: "Users want to browse thousands of listings.", validated: false },
            { text: "Brokers value centralized lead management.", validated: true }
          ],
          clusters: [
            { theme: "Business Buyers", insights: ["Faster ways to compare multiple properties", "Avoid contacting several brokers"] },
            { theme: "Property Owners", insights: ["Better visibility", "Qualified leads over large quantities of low-intent inquiries"] }
          ]
        }
      },
      { type: "heading2", text: "Product Strategy & Decisions" },
      { type: "paragraph", text: "Instead of maximizing the number of listings, FindFast focused on improving property discovery. The product focused on helping users quickly compare structured property information and directly connect with property owners." },
      {
        type: "decisionLog",
        data: {
          context: "Without supply, demand could not be sustained. Focus equally on buyers and property owners?",
          constraint: "Limited engineering resources and the need to validate demand quickly.",
          alternatives: ["Focus equally on buyers and owners", "Focus heavily on buyers first", "Prioritize onboarding property owners before scaling demand"],
          decision: "Prioritize onboarding property owners before investing heavily in user acquisition.",
          expectedImpact: "Ensure there is high-quality inventory before driving buyer traffic.",
          actualOutcome: "Successfully reached over 600 verified listings before scaling customer acquisition efforts."
        }
      },
      { type: "heading2", text: "Scope and Tradeoffs" },
      { type: "paragraph", text: "Every feature was evaluated against one question: 'Does this improve discovery or help users reach the right property faster?'" },
      {
        type: "mvpScope",
        data: {
          ideas: ["Commercial Listings", "Search", "Filters", "AI Property Recommendations", "Virtual Tours", "Broker Dashboard", "In-App Messaging"],
          prioritized: ["Commercial Listings", "Search", "Filters", "Property Pages", "Broker Dashboard", "Inquiry Management"],
          mvp: ["Commercial Listings", "Search", "Filters", "Property Pages", "Broker Dashboard", "User Dashboard", "Inquiry Management"]
        }
      },
      {
        type: "tradeoffs",
        data: {
          didNotBuild: "AI Recommendations and Virtual Tours",
          reason: "Deferred to later phases to focus first on search quality, structured listings, and lead generation.",
          impactOnMVP: "The simpler MVP allowed faster launch while validating marketplace interest."
        }
      },
      { type: "heading2", text: "Retrospective" },
      { type: "paragraph", text: "Building FindFast highlighted one of the biggest challenges in marketplace products: A marketplace only succeeds when both sides continuously receive value. Adding thousands of listings without buyers creates an inactive marketplace." },
      {
        type: "retrospective",
        data: {
          mistakes: [
            "Initially considered focusing on buyers before solving the cold-start supply problem."
          ],
          techDebt: "Need to invest earlier in marketplace analytics to understand search patterns and abandoned discovery journeys.",
          lessons: [
            "Discovery is more valuable than inventory size.",
            "Supply quality is often more important than supply quantity during early-stage growth.",
            "Successful marketplaces are built by solving matching problems-not simply aggregating listings."
          ]
        }
      }
    ]
  }
];
