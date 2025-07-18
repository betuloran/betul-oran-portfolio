export interface Project {
  name: string;
  description?: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
}

export interface PersonalInfo {
  name: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  projects: Project[];
  experiences: Experience[];
  skills: {
    frontend: string[];
    styling: string[];
    tools: string[];
    stateManagement: string[];
    backend: string[];
  };
}

export const personalInfo: PersonalInfo = {
  name: "Betül Oran",
  position: "Frontend Developer & Computer Engineer",
  location: "Isparta, Turkey",
  email: "betul.oran2@gmail.com",
  phone: "506 147 2606",
  linkedin: "https://www.linkedin.com/in/betüloran/",
  github: "https://github.com/betuloran",
  projects: [
    {
      name: "Feasta",
      description: "Full Stack Food Ordering App",
      technologies: ["Next.js", "NextAuth", "Redux Toolkit"],
    },
    {
      name: "React Weather App",
      technologies: ["React", "JavaScript", "API Integration"],
    },
    {
      name: "TatlimiGetir",
      description: "Getir Clone",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Animate.css Clone",
      technologies: ["HTML", "CSS", "Animations"],
    },
    {
      name: "FinderClone",
      technologies: ["SCSS", "HTML", "JavaScript"],
    },
  ],
  experiences: [
    {
      company: "mfatech",
      position: "Frontend Developer",
      period: "Nov 2024 – Jun 2025",
    },
    {
      company: "VBT Yazılım A.Ş",
      position: "Intern Software Engineer",
      period: "Jun – Aug 2024",
    },
    {
      company: "Simav Municipality - IT Department",
      position: "Intern",
      period: "Jul – Aug 2023",
    },
  ],
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
    ],
    styling: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn UI",
    ],
    tools: [
      "Git & GitHub",
      "Figma",
      "ESLint",
      "Jira",
    ],
    stateManagement: [
      "Redux",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    backend: ["Node.js (temel seviye)"],
  },
}; 