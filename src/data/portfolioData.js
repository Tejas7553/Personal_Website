export const personalInfo = {
  name: "Tejas Jadhav",
  title: "Frontend Engineer",
  tagline: "I turn complex requirements into fast, beautiful interfaces.",
  elevator:
    "Frontend Engineer with 3.5+ years shipping scalable web apps at Infosys. I specialise in React.js and Next.js — optimising performance, building reusable component systems, and turning product specs into polished, accessible UIs that users actually enjoy.",
  location: "Pune, Maharashtra, India",
  email: "jadhav.tejas7553@gmail.com",
  phone: "+91 8291680102",
  availability: "Open to opportunities",
  social: {
    linkedin: "https://www.linkedin.com/in/tejas-jadhav-b601571ab/",
    github: "https://github.com/Tejas7553",
    twitter: "https://x.com/Tejas7553",
    medium: "https://medium.com/@jadhav.tejas2009",
    peerlist: "https://peerlist.io/jadhavtejas7553",
    email: "mailto:jadhav.tejas7553@gmail.com",
  },
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
  ],
  backend: ["Node.js", "Java 8", "RESTful APIs", "MySQL", "SQL"],
  tools: [
    "Git",
    "GitHub Actions",
    "JIRA",
    "VS Code",
    "Jest",
    "React Testing Library",
    "Google Cloud Platform",
    "Microsoft Azure",
  ],
  practices: [
    "Agile / Scrum",
    "Component Architecture",
    "Performance Optimisation",
    "Accessibility (a11y)",
    "Code Splitting",
    "Lazy Loading",
  ],
};

export const experience = [
  {
    company: "Infosys Limited",
    role: "Senior System Engineer",
    period: "Oct 2022 – Present",
    location: "Mumbai, India",
    project: "Infosys Recruitment Portal (Internal)",
    description:
      "Leading frontend development of a multi-role recruitment portal used by thousands of Infosys employees. Collaborating with back-end, database, and testing teams to ensure seamless system integration, while driving UI performance and developer productivity improvements.",
    highlights: [
      {
        metric: "25–30%",
        label: "UI performance boost",
        detail: "via React Hooks & Context API refactor",
      },
      {
        metric: "20–25%",
        label: "Dev time reduction",
        detail: "through reusable component library",
      },
      {
        metric: "30–40%",
        label: "Faster page loads",
        detail: "using lazy loading & code splitting",
      },
      {
        metric: "95%",
        label: "On-time sprint delivery",
        detail: "across Agile team collaboration",
      },
    ],
    tech: ["React.js", "Context API", "JavaScript", "REST APIs", "Java", "MySQL", "Git", "JIRA"],
  },
  
  {
    company: "Wipro",
    role: "Project Engineer Intern",
    period: "Mar 2022 – May 2022",
    location: "Mumbai, India",
    project: "Student Management System",
    description:
      "Developed and maintained a Java-based student management system, resolving bugs and improving data handling efficiency.",
    highlights: [
      {
        metric: "20%",
        label: "Data handling improvement",
        detail: "via backend optimisation",
      },
      {
        metric: "10+",
        label: "Bugs resolved",
        detail: "enhancing system stability",
      },
      {
        metric: "100%",
        label: "On-time delivery",
        detail: "across all assigned modules",
      },
    ],
    tech: ["Java", "SQL", "Data Handling"],
  },
];

export const certifications = [
  {
    title: "Google Cloud Certified Professional Cloud Architect",
    issuer: "Google Cloud",
    icon: "☁",
    color: "#4285F4",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    icon: "◈",
    color: "#0078D4",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    icon: "⌥",
    color: "#24292F",
  },
  {
    title: "Infosys Certified FullStack – System Admin – Network Beginner",
    issuer: "Infosys",
    icon: "◉",
    color: "#007CC3",
  },
  {
    title: "Fundamentals of HTML5",
    issuer: "Infosys / Online",
    icon: "◐",
    color: "#E8521A",
  },
];

export const projects = [
  {
    title: "React Meetup App",
    subtitle: "Real-time event management SPA",
    period: "Oct 2023 – Nov 2023",
    type: "Personal Project",
    problem:
      "Needed a lightweight, real-time meetup manager that stays fast across devices without complex backend setup.",
    solution:
      "Built a single-page React app with Firebase Realtime Database, focusing on perceived performance and smooth UX with efficient state management.",
    impact: [
      { metric: "25%", label: "Better navigation efficiency" },
      { metric: "30%", label: "Reduced data latency" },
      { metric: "20%", label: "UX improvement across devices" },
    ],
    tech: ["React.js", "Firebase", "React Router", "CSS Modules"],
    github: "https://github.com/Tejas7553",
    live: "https://react-meetup-project.vercel.app/",
    featured: true,
  },
  {
    title: "Infosys Recruitment Portal",
    subtitle: "Enterprise-scale multi-role web app",
    period: "Oct 2022 – Present",
    type: "Professional",
    problem:
      "Legacy UI with slow page loads, inconsistent UX across roles, and tightly-coupled code making iterations slow.",
    solution:
      "Re-architected the frontend with React Hooks + Context API, introduced a reusable component library, and implemented lazy loading & code splitting strategies.",
    impact: [
      { metric: "30–40%", label: "Page load reduction" },
      { metric: "20–25%", label: "Faster feature development" },
      { metric: "95%", label: "Sprint on-time delivery" },
    ],
    tech: ["React.js", "Context API", "REST APIs", "Java", "MySQL"],
    github: null,
    live: null,
    featured: true,
  },
];

export const education = [
  {
    institution: "University of Mumbai",
    degree: "B.E. in Information Technology",
    grade: "CGPA 8.05/10",
    period: "Aug 2018 – Jul 2022",
  },
];

export const activities = [
  {
    org: "CodeOs Student Community",
    role: "Community Lead",
    period: "Aug 2021 – Sep 2022",
    description:
      "Led hackathons, web development bootcamps, and Python workshops for fellow students.",
  },
  {
    org: "NSS – Social Worker",
    role: "Volunteer",
    period: "Jun 2019 – May 2021",
    description:
      "Contributed to community development at adopted village Mograj through the college NSS unit.",
  },
];

export const marqueeSkills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Git",
  "GitHub Actions",
  "Agile",
  "Performance Optimisation",
  "Component Architecture",
  "Firebase",
  "Google Cloud",
  "Azure",
];
