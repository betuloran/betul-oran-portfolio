export interface Project {
  name: string;
  description?: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  socials: { label: string; url: string }[];
  about: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
}

export const personalInfo = {
  name: "Betül Oran",
  title: "Frontend Developer & Computer Engineer",
  location: "Isparta, Turkey",
  email: "betul.oran2@gmail.com",
  phone: "+90 506 147 2606",
  linkedin: "https://www.linkedin.com/in/betüloran/",
  github: "https://github.com/betuloran",
  socials: [
    { label: "GitHub", url: "https://github.com/betuloran" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/betüloran/" },
    { label: "Mail", url: "mailto:betul.oran2@gmail.com" },
  ],
  about:
    "Ben Betül, frontend geliştirme alanında uzmanlaşan bir bilgisayar mühendisiyim. Kullanıcı odaklı ve responsive arayüzler tasarlayıp geliştiriyorum. Hedefim, estetik ve işlevselliği bir araya getiren projelerde yer alarak kullanıcı deneyimini en üst düzeye çıkarmak.",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Shadcn UI",
    "Redux",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Node.js (temel)",
    "Git & GitHub",
    "Figma",
    "Jira",
    "ESLint",
  ],
  experiences: [
    {
      company: "mfatech",
      title: "Frontend Developer",
      date: "Kasım 2024 - Haziran 2025 (8 Ay)",
      description:
        "React, TypeScript, JavaScript, Tailwind CSS, Material UI ve Git iş akışları dahil olmak üzere modern ön uç teknolojileriyle çalışarak Pviser kurumsal çalışma alanı uygulaması için kullanıcı dostu ve modern arayüzler geliştirdim. Kod sürdürülebilirliğini iyileştiren yeniden kullanılabilir bileşenler oluşturdum. RESTful API entegrasyonları ve UI/UX iyileştirmeleri yaptım.",
    },
    {
      company: "VBT Yazılım A.Ş",
      title: "Intern Software Engineer",
      date: "Haziran-Ağustos 2024 (3 Ay)",
      description:
        "HTML, CSS, SCSS, JavaScript ve Angular ile çeşitli web projelerinde yer aldım. Git ile versiyon kontrolü ve ekip çalışması, Flutter ile mobil uygulama geliştirme ve SQL ile veri yönetimi deneyimi kazandım.",
    },
    {
      company: "Simav Belediyesi Bilgi İşlem Daire Başkanlığı",
      title: "Intern Software & Hardware Engineer",
      date: "Temmuz-Ağustos 2023 (2 Ay)",
      description:
        "Ağ yapılandırması, güvenlik duvarları ve sunucu sistemleriyle ilgili donanım stajı yaptım. OSI ve TCP/IP protokolleri, güvenlik duvarı yapılandırması ve ağ güvenliği konularında pratik deneyim kazandım.",
    },
  ],
  projects: [
    {
      name: "Feasta",
      description: "Full Stack Food Ordering App",
      technologies: ["Next.js", "NextAuth", "Redux Toolkit"],
      github: "https://github.com/betuloran/feasta",
      demo: "https://feasta.vercel.app/",
    },
    {
      name: "React Weather App",
      description: "Weather forecast app with React and API integration.",
      technologies: ["React", "JavaScript", "API Integration"],
      github: "https://github.com/betuloran/react-weather-app",
      demo: "https://react-weather-betuloran.vercel.app/",
    },
    {
      name: "TatlimiGetir",
      description: "Getir Clone",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/betuloran/tatlimigetir",
      demo: "https://tatlimigetir.vercel.app/",
    },
    {
      name: "Animate.css Clone",
      description: "CSS animation library clone.",
      technologies: ["HTML", "CSS", "Animations"],
      github: "https://github.com/betuloran/animatecss-clone",
      demo: "https://animatecss-betuloran.vercel.app/",
    },
    {
      name: "FinderClone",
      description: "MacOS Finder UI clone.",
      technologies: ["SCSS", "HTML", "JavaScript"],
      github: "https://github.com/betuloran/finderclone",
      demo: "https://finderclone.vercel.app/",
    },
  ],
}; 