/**
 * ============================================================
 * PORTFOLIO CONTENT CONFIG
 * ============================================================
 * Design Direction: KINETIC / MOTION-FIRST
 * All site content lives here. To update projects, skills,
 * or personal info — edit this file ONLY. No layout changes needed.
 * ============================================================
 */

export const personal = {
  name: "Sairam Lakshmanan",
  initials: "SL",
  role: "Full-Stack Developer & AI Enthusiast",
  tagline: "I build systems that scale and interfaces that matter.",
  bio: "Final-year CSE student at SRM IST specialising in Cloud Computing — skilled in Python, Java, and SQL, with hands-on experience spanning full-stack development and data science pipelines. Adept at building robust REST APIs and implementing AI-driven features. A strong problem-solver eager to contribute versatile technical skills to a fast-growing engineering team.",
  email: "sairamlakshmanan2005@gmail.com",
  phone: "+91 9489844965",
  linkedin: "https://www.linkedin.com/in/sairam-lakshmanan-29b883285",   // ← update with exact URL
  github: "https://github.com/sairam5566",              // ← update with exact URL
  leetcode: "https://leetcode.com/u/sm_sairam",          // ← update with exact URL
  resume: "",                                                   // ← replace with PDF link
};

// ============================================================
// SKILLS
// To add a skill: add a new object { name, category, icon }
// ============================================================
export const skills = [
  // Languages
  { name: "Python", category: "Language", icon: "🐍" },
  { name: "Java", category: "Language", icon: "☕" },
  { name: "JavaScript", category: "Language", icon: "⚡" },
  { name: "C++", category: "Language", icon: "⚙️" },
  { name: "C#", category: "Language", icon: "🎯" },
  { name: "SQL", category: "Language", icon: "🗄️" },

  // Frameworks
  { name: "FastAPI", category: "Framework", icon: "🚀" },
  { name: "React", category: "Framework", icon: "⚛️" },
  { name: "ASP.NET Core", category: "Framework", icon: "🔷" },
  { name: "Flask", category: "Framework", icon: "🌶️" },

  // Tools & Databases
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "Git", category: "Tool", icon: "🔀" },
  { name: "NumPy/Pandas", category: "Tool", icon: "📊" },
];

// ============================================================
// PROJECTS
// To add a project: copy one object block and fill in details.
// ============================================================
export const projects = [
  {
    id: 1,
    title: "Blockchain-Encrypted Storage with AI Anomaly Detection",
    shortTitle: "SecureVault AI",
    period: "Mar 2026 – May 2026",
    description:
      "A secure full-stack file-sharing platform using a FastAPI backend and React frontend, integrating AES-128 encryption with decentralised, blockchain-based hashing to guarantee tamper-proof file integrity. Features a real-time AI anomaly detection system with ML-driven data pipelines that continuously analyse user access patterns and proactively identify security threats.",
    tags: ["FastAPI", "React", "Blockchain", "AES-128", "ML", "Python"],
    github: "#",       // ← replace with repo link
    live: "",          // ← replace with live URL or leave empty
    featured: true,
    accentColor: "#00E5CC",
  },
  {
    id: 2,
    title: "AgriSense — AI-Based Crop Recommendation for Farmers",
    shortTitle: "AgriSense",
    period: "Aug 2025 – Oct 2025",
    description:
      "A full-stack agricultural platform utilising FastAPI and JWT role-based access control, integrating the Google Gemini API for AI-powered crop recommendations and disease detection. Supports 22 languages, real-time market pricing, an integrated e-commerce marketplace, and automated weather forecasting to deliver scalable, localised insights.",
    tags: ["FastAPI", "Google Gemini", "JWT", "React", "Python", "NLP"],
    github: "#",
    live: "",
    featured: true,
    accentColor: "#A8FF78",
  },
  {
    id: 3,
    title: "Smart Campus Grievance Resolution System",
    shortTitle: "CampusResolve",
    period: "Mar 2026 – Apr 2026",
    description:
      "A full-stack campus complaint management system using FastAPI and React with role-based access controls for students, faculty, and administrators. Features an automated tracking pipeline that streamlines issue submission, delivers live status updates, and manages resolution workflows end-to-end.",
    tags: ["FastAPI", "React", "Role-Based Auth", "Python", "PostgreSQL"],
    github: "#",
    live: "",
    featured: false,
    accentColor: "#C084FC",
  },
];

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    company: "AmbalSoft InfoTech Private Limited",
    role: "Software Development Engineer — Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Mylapore, Chennai",
    bullets: [
      "Engineered scalable healthcare backend APIs using ASP.NET Core, designing robust RESTful endpoints to efficiently manage patient records, doctor schedules, and medical reports.",
      "Implemented secure business logic for appointment scheduling systems to protect sensitive healthcare workflows and maintain strict data integrity.",
      "Optimised data pipelines for laboratory results, significantly enhancing data flow efficiency and ensuring high system reliability across endpoints.",
    ],
  },
];

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech — Computer Science and Engineering with Cloud Computing",
    period: "2023 – 2027",
    score: "CGPA 8.66 / 10",
    location: "Chennai, India",
  },
  {
    institution: "Smt. Ramkuwar Devi Fomra Vivekananda Vidyalaya",
    degree: "Class XII — CBSE",
    period: "2023",
    score: "79.6%",
    location: "Chromepet, Chennai",
  },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================
export const achievements = [
  {
    title: "2nd Runner-Up — DataSprint 3.0 Hackathon",
    date: "Feb 2026",
    link: "#", // ← replace with certificate link
  },
  {
    title: "Top 50 Teams — Smart India Hackathon (SIH) 2025 Internal Round",
    date: "Sep 2025",
    link: "",
  },
  {
    title: "Solved 130+ Problems on LeetCode",
    date: "Ongoing",
    link: "#", // ← replace with LeetCode profile
  },
];
