import img from '../assets/bazraProject.png';
import smsKafka from '../assets/sms-kafka.png';
import shoplinker from '../assets/shoplinker.png';
import vacancy from '../assets/vacancy.png';
import dor from '../assets/dor.png';
import related from '../assets/related.png';
import website from '../assets/website.png';
import queuemanagementimage from '../assets/queuemanagementimage.png';
import micahguru from '../assets/micahguru.png';
import ecdms from '../assets/ecdms.png';

export const projectsData = [
  {
    title: "ShopLinker — Full-Stack E-Commerce Platform",
    category: "E-COMMERCE / FINTECH",
    image: shoplinker,
    liveLink: "https://shop-linker.vercel.app/",
    description: "Production-grade e-commerce platform built with Next.js 16 App Router and SSR. Implements Supabase Auth with secure session handling, persistent cart with real-time stock reconciliation, StarPay payment gateway integration with server-side HMAC-SHA256 webhook signature verification, and PostgreSQL Row-Level Security (RLS).",
    metrics: ["Next.js 16 SSR", "HMAC-SHA256 Webhooks", "PostgreSQL RLS"],
    highlights: [
      "Server-side StarPay payment processing with cryptographic HMAC-SHA256 webhook verification.",
      "Enforced PostgreSQL Row-Level Security (RLS) across all multi-tenant tables.",
      "Optimized query cache and optimistic UI mutations using TanStack Query and Zustand."
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "TanStack Query", "Zustand", "Tailwind CSS", "Formik", "Yup", "Axios", "Vercel"]
  },
  {
    title: "Vacancy & Recruitment Platform",
    category: "BANKING ENTERPRISE",
    image: vacancy,
    liveLink: "https://vacancy.wegagenbanksc.com.et/",
    description: "Full-stack job board and talent acquisition portal engineered for Wegagen Bank. Features role-based dashboards for candidates and HR admins, vacancy postings, resume attachments, candidate screening stages, and audit reporting.",
    metrics: ["HR Automation", "Role-Based Dashboards", "Radix UI"],
    highlights: [
      "Role-based dashboards for both applicants and HR recruitment committees.",
      "Built with reusable Radix UI / Tailwind primitives ensuring accessibility and responsiveness.",
      "Secure candidate record handling and document uploading."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "JWT", "Radix UI", "Node.js"]
  },
  {
    title: "Wegagen Bank Official Website",
    category: "BANKING PLATFORM",
    image: website,
    liveLink: "https://www.wegagen.com",
    description: "Public-facing corporate portal for Wegagen Bank providing customers seamless access to retail and corporate banking products, interactive branch & ATM locators, daily foreign exchange rates, and secure portal gateways.",
    metrics: ["High Traffic", "Optimized Core Web Vitals", "Responsive"],
    highlights: [
      "Engineered mobile-first, highly responsive layout with modern Framer Motion micro-interactions.",
      "Optimized Core Web Vitals and SEO for discoverability across banking services.",
      "Clean RESTful integration with real-time financial rate updates."
    ],
    technologies: ["JavaScript", "Tailwind CSS", "React.js", "NodeJS", "Express.js", "PostgreSQL", "Framer Motion"]
  },
  {
    title: "Micahguru Official Platform",
    category: "US SAAS PLATFORM",
    image: micahguru,
    liveLink: "https://micahguru.com",
    description: "All-in-one business formation and compliance platform supporting entrepreneurs across 175+ countries to incorporate U.S. entities (LLC, EIN, ITIN, corporate bank setup, registered agent, and tax compliance).",
    metrics: ["175+ Countries", "Global SaaS", "Payment Integration"],
    highlights: [
      "Modern UI built with Next.js, TypeScript, and shadcn/ui components.",
      "Automated document generation and compliance workflow management.",
      "Secure payment processing and encrypted customer data vaults."
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Banking Daily Operations Report Dashboard",
    category: "BANKING ENTERPRISE",
    image: dor,
    description: "Enterprise real-time financial operations dashboard serving 3.6M+ customers across 441+ branches of Wegagen Bank. Provides granular visibility across Retail Operations (deposits & accounts), Finance (capital & liquidity position), Credit Operations (daily disbursements, collections & non-performing loans), and Digital Operations (USSD, Mobile, ATM, and POS transactions).",
    metrics: ["3.6M+ Bank Customers", "441+ Branches", "Real-time Telemetry"],
    highlights: [
      "Real-time data synchronization across core banking systems and operational databases.",
      "Multi-dimensional slicing by region, district, branch, and financial product type.",
      "Executive level KPI telemetry enabling prompt data-driven liquidity and risk governance."
    ],
    technologies: ["React.js", "TypeScript", "Next.js", "Redux", "Chart.js", "D3.js", "Material UI", "NestJS", "PostgreSQL", "Oracle DB"]
  },
  {
    title: "FX Queue Management System (CEO Commendation Award)",
    category: "BANKING ENTERPRISE",
    image: queuemanagementimage,
    description: "Mission-critical foreign exchange queue and allocation management system built for Wegagen Bank. Awarded an Official Letter of Recognition from CEO Dr. Aklilu Wubet for significantly strengthening operational transparency, reducing allocation bottlenecks, and enforcing compliance with National Bank regulations.",
    metrics: ["CEO Awarded", "NBE Regulated", "High Security"],
    highlights: [
      "Awarded Official Recognition by the Chief Executive Officer for technical and operational impact.",
      "Strict role-based auditing, compliance workflows, and automated customer queue notifications.",
      "End-to-end audit logging for sensitive foreign currency allocations and executive approvals."
    ],
    technologies: ["React.js", "TypeScript", "Next.js", "Node.js", "NestJS", "PostgreSQL", "JWT", "Tailwind CSS"]
  },
  {
    title: "High-Throughput SMS Notification Pipeline",
    category: "EVENT-DRIVEN ARCHITECTURE",
    image: smsKafka,
    description: "Fault-tolerant, event-driven banking notification engine delivering 800+ messages per second. Captures real-time transaction events via Debezium CDC from Oracle Database, publishes to Apache Kafka topics, and dispatches formatted multilingual SMS notifications through containerized Node.js worker microservices connected to SMPP/Kannel telecom gateways.",
    metrics: ["800+ Messages / Sec", "Debezium CDC", "Apache Kafka"],
    highlights: [
      "Zero-data-loss Change Data Capture (CDC) from primary Oracle database directly to Kafka.",
      "Horizontally scalable containerized Node.js worker pools running in Docker.",
      "Low-latency SMPP telecom gateway routing with automated fallback queues and retry mechanisms."
    ],
    technologies: ["Apache Kafka", "Debezium CDC", "Node.js", "Docker", "Oracle DB", "Microservices", "SMPP Gateway"]
  },
  {
    title: "Customer Onboarding & KYC Platform",
    category: "BANKING ENTERPRISE",
    image: related,
    liveLink: "https://customeronboarding.wegagenbanksc.com.et/",
    description: "Digital banking customer onboarding and KYC verification system engineered for Wegagen Bank. Features self-service account registration, automated identity verification flows, document capture pipelines, and core banking system integration adhering strictly to KYC/AML regulatory standards.",
    metrics: ["KYC/AML Compliance", "Core Banking API", "RBAC Auth"],
    highlights: [
      "Streamlined candidate registration and identity document verification workflows.",
      "Enterprise authentication and authorization with NextAuth, JWT, and session encryption.",
      "Integrated with core banking data layers to accelerate account activation."
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn", "PostgreSQL", "Express.js", "Node.js"]
  },
  {
    title: "ECDMS (Enterprise Construction Document Management System)",
    category: "ENTERPRISE SAAS",
    image: ecdms,
    liveLink: "https://ecdms.onespace.et",
    description: "Robust construction and engineering document management platform. Streamlines project lifecycle oversight, stakeholder permissions, manpower/machinery tracking, multi-language internationalization (i18next), and dynamic analytics reporting.",
    metrics: ["Live Production", "Multi-Language", "Role-Based RBAC"],
    highlights: [
      "Comprehensive resource tracking (materials, machinery, manpower, budget allocations).",
      "Interactive data visualizations with Chart.js and state synchronization with TanStack Query.",
      "Full internationalization support and high-performance server-side rendering."
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Chart.js", "i18next", "NodeJS", "Express.js", "PostgreSQL"]
  },
  {
    title: "Bazra Logistics Tracker",
    category: "ENTERPRISE PLATFORM",
    image: img,
    githubLink: "https://github.com/BazraTech/bazraTech",
    liveLink: "http://bazralogistics.com",
    description: "Supply chain and fleet management platform providing real-time shipment status, multi-warehouse inventory tracking, dynamic route optimization, and interactive logistics node mapping.",
    metrics: ["Fleet Tracking", "Route Optimization", "React Flow"],
    highlights: [
      "Interactive routing and pipeline visualization utilizing React Flow.",
      "Robust state management and real-time shipment event tracking."
    ],
    technologies: ["React.js", "PostgreSQL", "Node.js", "Express.js", "Redux", "React Flow", "JWT"]
  }
];