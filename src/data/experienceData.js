import idezzaLogo from '../assets/idezza-logo.svg';
import bazra from '../assets/bazra.png';
import wegagen from '../assets/wegagen.png';

export const experienceData = [
  {
    role: "Frontend Developer (Remote)",
    company: "IDEEZA",
    companyLogo: idezzaLogo,
    date: "Jun 2025 - May 2026",
    description: "Architected and delivered high-performance frontend features for a live Generative AI platform using React.js, Next.js 14, and TypeScript, optimizing rendering strategies to achieve fast load times on complex data-heavy views.",
    achievements: [
      "Engineered reusable, accessible UI component library using Shadcn and Tailwind CSS, reducing UI development cycle time by ~30% across sprints.",
      "Implemented advanced performance optimizations including code splitting, lazy loading, and intelligent server state caching via React Query.",
      "Integrated RESTful APIs with end-to-end TypeScript type safety across data contracts, eliminating runtime type exceptions.",
      "Collaborated on AI-driven blueprint generation features and NFT minting workflows in a high-velocity remote startup environment."
    ],
    skills: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Shadcn", "React Query", "NestJS", "Node.js", "PostgreSQL", "MongoDB"]
  },
  {
    role: "Full-Stack Developer",
    company: "Wegagen Bank",
    companyLogo: wegagen,
    date: "Jun 2022 - Nov 2025",
    description: "Delivered mission-critical digital banking and enterprise operations platforms in a highly regulated financial environment serving 3.6M+ customers and 5,400+ bank staff across 441+ branches.",
    achievements: [
      "Led development of real-time Banking Operations Dashboard tracking retail, credit, foreign exchange, and digital channels.",
      "Received Official Recognition & Commendation from CEO Dr. Aklilu Wubet for outstanding contribution to the FX Queue Management System.",
      "Designed and deployed an event-driven SMS notification pipeline delivering 800+ messages/sec using Apache Kafka, Debezium CDC from Oracle DB, and containerized Node.js microservices to SMPP/Kannel telecom gateways.",
      "Engineered Customer Onboarding & KYC platform with digital registration, document verification, and compliance-driven workflows.",
      "Implemented enterprise RBAC with NextAuth and JWT, enforcing robust security protocols against XSS/CSRF, SQLi, and sensitive financial data leaks."
    ],
    skills: ["Next.js", "React", "TypeScript", "NestJS", "Node.js", "Apache Kafka", "Debezium CDC", "PostgreSQL", "Oracle DB", "Docker", "Tailwind CSS", "JWT"]
  },
  {
    role: "Frontend Developer",
    company: "Bazra Technology Group",
    companyLogo: bazra,
    date: "Jan 2022 - Aug 2022",
    description: "Engineered responsive, performant user interfaces and built modular client-side architectures for enterprise applications.",
    achievements: [
      "Developed responsive client features using React and TypeScript, boosting cross-device usability.",
      "Built clean, modular state-management structures with Redux, accelerating team feature delivery."
    ],
    skills: ["React", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3"]
  }
];