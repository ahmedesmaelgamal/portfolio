export const site = {
  name: "Ahmed Ismail",
  role: "Backend Engineer",
  email: "ahmedesmaelgamal@gmail.com",
  phone: "+20 112 601 5027",
  location: "Menofia, Egypt",
  availability: "Open to work",
  links: {
    github: "https://github.com/ahmedesmaelgamal",
    linkedin: "https://linkedin.com/in/ahmed-esmael-gamal-9b4179204",
  },
};

export const summary = `Backend Software Engineer with 1.5+ years of experience building scalable web applications and RESTful APIs using Laravel and PHP. Skilled in database optimization, third-party integrations, and multi-tenant systems. Delivers maintainable, secure, production-ready solutions.`;

export const skills = {
  languages: ["PHP", "JavaScript", "SQL"],
  frameworks: ["Laravel", "jQuery", "Bootstrap"],
  databases: ["MySQL", "Indexing", "Query Optimization", "Joins"],
  backend: ["REST APIs", "Authentication", "Authorization", "Queues", "Service Layer"],
  integrations: ["Payment Gateways", "Logistics APIs", "OTP Services", "Firebase"],
  tools: ["Git", "Postman", "VS Code", "PhpStorm", "DataTables", "WordPress", "cPanel"],
  practices: ["SOLID Principles", "API Documentation", "Multi-tenant Architecture"],
};

export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  links: { label: string; href: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "at3aby",
    name: "At3aby",
    description: "Legal services marketplace with case management and lawyer-client communication.",
    longDescription:
      "A comprehensive legal services platform connecting clients with lawyers. Features case management, secure messaging, appointment scheduling, and document handling. Built with Laravel backend serving mobile apps on both iOS and Android.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Firebase"],
    links: [
      { label: "GitHub", href: "https://github.com/ahmedesmaelgamal/at3aby" },
      { label: "Google Play", href: "#" },
      { label: "App Store", href: "#" },
    ],
    featured: true,
  },
  {
    slug: "well7",
    name: "Well7",
    description: "Multi-sided service marketplace with unified backend and real-time tracking.",
    longDescription:
      "A multi-vendor service marketplace supporting multiple service categories under one platform. Includes real-time order tracking, vendor management, customer support, and unified payment processing. Handles complex multi-tenant data isolation.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Real-time Tracking"],
    links: [
      { label: "GitHub", href: "https://github.com/ahmedesmaelgamal/well7" },
      { label: "Google Play", href: "#" },
      { label: "App Store", href: "#" },
    ],
    featured: true,
  },
  {
    slug: "edaarat-365",
    name: "Edaarat 365",
    description: "Real estate management system with property and financial modules.",
    longDescription:
      "Full-featured real estate management platform handling property listings, tenant management, lease tracking, and financial reporting. Includes role-based access control for property managers, owners, and tenants.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "DataTables"],
    links: [
      { label: "GitHub", href: "https://github.com/ahmedesmaelgamal/edaarat-365" },
    ],
    featured: true,
  },
  {
    slug: "agel-platform",
    name: "Agel Platform",
    description: "Futures contracts platform with subscription and logistics management.",
    longDescription:
      "A trading platform for futures contracts with subscription-based access, logistics management, and automated contract lifecycle handling. Integrates payment processing and notification systems.",
    tech: ["Laravel", "PHP", "MySQL", "Payment Gateway", "REST API"],
    links: [
      { label: "GitHub", href: "https://github.com/ahmedesmaelgamal/agel-platform" },
    ],
    featured: false,
  },
  {
    slug: "maxim-seafood",
    name: "Maxim Sea Food",
    description: "Food delivery application with WordPress integration.",
    longDescription:
      "Food delivery app with WordPress-based content management for the storefront. Features menu management, order processing, delivery tracking, and integration with WordPress for content and SEO.",
    tech: ["Laravel", "PHP", "WordPress", "MySQL", "REST API"],
    links: [
      { label: "GitHub", href: "https://github.com/ahmedesmaelgamal/maxim-seafood" },
      { label: "App Store", href: "#" },
    ],
    featured: false,
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "TopBusiness",
    role: "Backend Software Engineer",
    period: "Jan 2025 – Jul 2025",
    location: "Shebeen El-Kom, Egypt",
    description:
      "Built and maintained scalable web applications and RESTful APIs. Worked on multi-tenant systems with payment gateway integrations and real-time features.",
  },
  {
    company: "DotBytes",
    role: "Backend Software Engineer",
    period: "Oct 2024 – Dec 2024",
    location: "Shebeen El-Kom, Egypt",
    description:
      "Developed backend solutions for client projects. Focused on API development, database optimization, and third-party service integrations.",
  },
  {
    company: "Kuwait-Based Company",
    role: "Backend Engineer (Freelance)",
    period: "Sep 2024 – Feb 2025",
    location: "Remote",
    description:
      "Delivered backend solutions for a Kuwait-based client. Built RESTful APIs, implemented authentication systems, and integrated payment and logistics services.",
  },
  {
    company: "Arabicss",
    role: "Application Support",
    period: "Oct 2023 – Jun 2024",
    location: "Maadi, Egypt",
    description:
      "Provided technical support and troubleshooting for production applications. Gained hands-on experience with debugging, monitoring, and maintaining live systems.",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Information Technology",
  school: "Menofia University",
  period: "2021 – 2024",
  location: "Egypt",
};
