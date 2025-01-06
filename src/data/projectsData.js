import img from '../assets/bazraProject.png'
import pmt from '../assets/pmt.png'
import fraud from '../assets/fraud.png'
import clinic from '../assets/clinic.png'
import dor from '../assets/dor.png'
import related from '../assets/related.png'
import website from '../assets/website.png'
import eifdda from '../assets/eifdda.png'
import ceo from '../assets/ceo.png'

export const projectsData = [
  {
    title: "Talk To The CEO",
    description: "The 'Talk To The CEO' project aims to create a platform where customers can communicate directly with the CEO of the bank. This project includes both frontend and backend development, API integrations, and OTP validation for secure user authentication.",
    image: ceo,
    category: "MACHINE LEARNING",
    technologies: ["React.JS", "TypeScript", "Next.JS", "Node.JS", "MongoDB", "Express.JS","JWT","Material-UI", "Email.JS", "Socket.IO" ]
  },
  {
    title: "Wegagen Bank Official Website",
    description: "The Wegagen Bank Official Website is a user-friendly, responsive platform designed to provide customers with access to all the bank’s services, products, and information. The website allows users to explore various banking services such as personal accounts, loans, credit cards, and investment options. It also provides up-to-date information on branch locations, ATMs, and online banking services. The site is optimized for both desktop and mobile views, offering a seamless user experience across different devices. The website includes secure login functionalities for customers to access online banking features and perform transactions.",
    image: website, 
    category: "BANKING WEBSITE", 
    liveLink: "http://www.wegagen.com/", 
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Strapi", "Framer Motion"]
  },
  {
    title: "EIFDDA Official Website",
    description: "EIFDDA.org is a platform for the Ethiopian Interfaith Forum for Development, Dialogue, and Action. It promotes peace and collaboration among diverse religious communities. The website features a user-friendly interface with an event calendar, news updates, and interactive forms for community engagement. It is responsive, optimized for performance, and includes robust security measures to protect user data. The site effectively communicates EIFDDA’s mission of fostering interfaith dialogue and development.",
    image: eifdda, 
    category: "NGO WEBSITE",
    githubLink: "https://github.com/YourRepo/eifdda-website", 
    liveLink: "http://eifdda.org", 
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Framer Motion"]
  },
  {
    title: "Banking Daily Operations Report Dashboard",
    description: "Our Banking Daily Operations Report Dashboard is a comprehensive solution designed to provide an in-depth analysis of various banking operations in real-time. It features detailed tabs for Retail Operations, Finance, Credit Operations, and Digital Operations, each offering critical insights into the bank's performance. The Retail Operations tab tracks deposit growth and total deposits, segmented by region, district, and product type, with flexible time filtering options (weekly, monthly, quarterly, and yearly). The Finance tab monitors key financial metrics, including the number of shareholders, paid-up capital, and cash position, with detailed breakdowns by region, district, and product type. The Credit Operations tab focuses on daily loan disbursements, collections, and outstanding loans. The Digital Operations tab provides transaction data for USSD, mobile, ATM, and POS operations. Additionally, the dashboard includes sections to display the total number of customers, employees, branches, ATMs, agents, and POS terminals, with a button to display the daily exchange rate. This dashboard ensures bank management has all the operational data they need at their fingertips, enabling quick, data-driven decision-making.",
    image: dor, 
    category: "BANKING SOLUTIONS",
    technologies: ["React.js", "TypeScript", "Next.JS", "Node.js", "Express.js", "Chart.js", "D3.js", "MongoDB", "Redux", "Material-UI", "Oracle DB"]
  },
  {
    title: "Related Party System",
    description: "The Related Party System is a comprehensive solution designed to ensure compliance with the National Bank of Ethiopia (NBE) directives, specifically Dir. No. SBB 053/12. The system identifies loans and advances that have been approved exceptionally by the approving committee for related parties of the bank. It helps track these transactions, ensuring they are properly recorded and reported. The system generates real-time reports to provide visibility on related party transactions and loans, which are critical for the bank's executive leadership team. This information is used for strategic planning, risk management, and decision-making, ensuring the bank operates transparently and in alignment with regulatory requirements.",
    image: related, 
    category: "BANKING COMPLIANCE SYSTEMS",
    technologies: ["React.js", "TypeScript", "Next.JS",  "Node.js", "Express.js", "MongoDB", "Redux", "Material-UI"]
  },
  {
    title: "Clinic Management System",
    description: "Our Clinic Management System is an all-in-one solution designed to streamline and automate the day-to-day operations of clinics and healthcare facilities. It enables clinics to manage patient appointments, medical records, billing, and staff efficiently. The system allows patients to book appointments online, while the clinic staff can track patient history, treatments, and prescriptions in a secure, digital environment. Key features include a patient portal for easy access to medical records, automated reminders for upcoming appointments, and real-time updates for both doctors and patients. The system integrates with laboratory and pharmacy management tools, ensuring seamless coordination for lab tests and medication prescriptions. Additionally, the platform provides advanced reporting features for clinic management, helping track financials, inventory, and operational performance. With a focus on security, the system ensures compliance with healthcare data protection regulations, providing a secure platform for managing sensitive patient information.",
    image: clinic ,
    category: "HEALTHCARE SOLUTIONS",
    technologies: ["React.JS", "Node.JS", "MongoDB", "Express.JS", "JWT", "Material-UI", "MySQL"]
  },
  {
    title: "Project Management Tool",
    description: "Our Project Management Tool is designed to streamline the process of managing tasks, teams, and projects. It offers comprehensive features such as task tracking, progress monitoring, team collaboration, and deadline management. The tool provides customizable workflows to fit different project types, enabling teams to work efficiently and meet deadlines. It includes a powerful dashboard for tracking the status of ongoing tasks, setting priorities, and ensuring that all team members stay on the same page. With real-time updates and notifications, the tool ensures that every change and decision is communicated instantly. Additionally, it integrates with various third-party tools such as Slack, Google Calendar, and GitHub, making it a one-stop solution for project management needs. The platform also includes analytics to track team performance and project outcomes, allowing managers to identify bottlenecks and optimize workflows for better productivity.",
    image: pmt,
    category: "WEB APP'S", 
    githubLink: "https://github.com/Anduamlakalehegne/Project-Management-tool",  
    technologies: ["React.JS", "Node.JS", "MongoDB", "Express.JS", "Redux", "Material-UI","JWT",]
  },
  {
    title: "Fraud Management System",
    description: "Our Banking Fraud Management System is a comprehensive platform designed to detect, prevent, and manage fraudulent activities within the banking sector. The system can identify suspicious behavior and unauthorized transactions. Key features include monitoring high-risk transactions, real-time alerts for potential fraud, automated case management for fraud investigations, and dynamic risk scoring for transactions. The system integrates with banking APIs to assess transaction histories, customer behaviors, and account activity to flag anomalies. Furthermore, it provides a robust reporting dashboard for compliance teams, ensuring adherence to regulatory requirements. With customizable fraud detection rules, the system adapts to emerging threats and evolving fraud tactics. The platform’s secure and scalable infrastructure supports seamless integration with existing banking software, ensuring a high level of protection for both the bank and its customers. By enhancing fraud detection and response, the system helps mitigate financial losses, prevent reputational damage, and improve customer trust.",
    image: fraud, 
    category: "WEB APP'S",
    githubLink: "https://github.com/Anduamlakalehegne/Fraud-Management-System", 
    technologies: ["React.JS", "Node.JS", "MongoDB", "Express.JS","JWT",]
  },
  {
    title: "Bazra Tracker ",
    description: "Our Logistic System is an advanced platform designed to automate and optimize the entire logistics and supply chain process. It offers end-to-end solutions, from order placement to real-time shipment tracking and final delivery. The system integrates seamlessly with inventory management tools, enabling efficient stock control and order fulfillment. Key features include route optimization for faster deliveries, automated scheduling, and dynamic inventory updates. The platform provides real-time tracking for both businesses and customers, ensuring transparency and reliability. With built-in analytics, it helps identify inefficiencies and provides actionable insights to improve logistics operations. Additionally, the system supports multi-location logistics management, enabling businesses to handle multiple warehouses, distribution centers, and delivery points with ease. By leveraging modern technologies and third-party integrations, the system ensures a smooth and efficient flow of goods, ultimately reducing operational costs and improving customer satisfaction.",
    image: img,
    category: "WEB APP'S",
    githubLink: "https://github.com/BazraTech/bazraTech",
    liveLink: " http://bazralogistics.com/",
    technologies: ["React.JS", "PostgreSQL", "Node.JS", "Express.JS", "Redux", "React Flow","JWT",]
  },
  
];