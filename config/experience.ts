import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
    //first experience
{
    id: "1",
    position: "Junior Software Engineer (Hired as Junior Programmer)",
    company: "Intesh Synergy Sdn Bhd",
    location: "Kajang, Selangor, Malaysia",
    startDate: new Date("2026-05-25"),
    endDate: "Present", // Present / Current Role
    description: [
      "Developed and maintained full-stack production web systems across frontend and backend layers using PHP, Laravel, JavaScript and MySQL based on business and client requirements.",
      "Monitored AWS EC2 cloud server uptime and performed server reboots during downtime incidents to restore service availability and ensure operational continuity.",
      "Conducted manual QA/QC testing, debugging, system diagnostics and sanity checks prior to production deployments while delivering on-site and online technical training for end users.",
    ],
    achievements: [
      "Architected and delivered end-to-end web application modules across frontend and backend layers, translating client specifications into scalable production features.",
      "Performed database schema analysis, SQL query improvements and operational data analysis to streamline system workflows and reporting accuracy.",
      "Maintained high service availability by actively monitoring AWS EC2 cloud infrastructure and executing timely recovery and server reboot procedures during downtime.",
      "Executed comprehensive manual testing, debugging and pre-deployment quality checks to identify and resolve software defects before production releases.",
      "Led client requirement gathering sessions and conducted physical (on-site) and online technical training programs to ensure smooth end-user onboarding.",
    ],
    skills: [
      "PHP",
      "Laravel",
      "JavaScript",
      "MySQL",
      "Full-Stack Development",
      "AWS EC2 Monitoring",
      "System & Data Analysis",
      "QA/QC Testing",
      "Debugging",
      "Client Training",
    ],
    companyUrl: "https://intesh.com.my",
    logo: "/experience/intesh.png",
  },

  // //second experience
  {
    id: "2",
    position: "Internship, Junior Backend Developer and IT Technician",
    company: "HPCS Sdn Bhd",
    location: "Shah Alam, Selangor, Malaysia",
    startDate: new Date("2026-01-05"),
    endDate: new Date("2026-05-22"),
    description: [
      "Engineered backend web modules utilizing Laravel and Yii2 Advanced (MVC), implementing secure authentication, role-based access control (RBAC) and custom middleware.",
      "Designed responsive interfaces using Tailwind CSS, Bootstrap, AdminLTE and Filament based on Figma UI/UX prototypes while integrating LLM AI features via OpenRouter.ai API.",
      "Conducted manual QA testing, system diagnostics, bug reporting and User Acceptance Testing (UAT) while authoring technical user manuals and troubleshooting guides.",
    ],
    achievements: [
      "Designed and optimized core backend application modules using Laravel and Yii2 Advanced, ensuring clean MVC architecture and reliable MySQL database operations.",
      "Implemented granular Role-Based Access Control (RBAC), authentication and custom middleware layers to secure user permissions and application endpoints.",
      "Built responsive administrative dashboards and UI layouts with Tailwind CSS, Bootstrap, AdminLTE and Filament translated directly from Figma prototypes.",
      "Integrated OpenRouter.ai API to deliver real-time LLM-powered automated text generation features within web workflows.",
      "Authored comprehensive technical user manuals and troubleshooting guides while executing manual QA and UAT cycles to minimize post-release issues.",
      "Managed version control via GitLab, GitHub and SourceTree, handling environment configuration and production updates on Render and Vercel.",
    ],
    skills: [
      "Laravel",
      "Yii2 Advanced",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Filament",
      "RBAC & Middleware",
      "OpenRouter.ai",
      "QA/QC & UAT",
      "GitLab & GitHub",
      "Render & Vercel",
      "Technical Documentation",
    ],
    companyUrl: "https://hpcs.com.my/index.php/en/",
    logo: "/experience/hpcs.png",
  },

  // //third experience
  {
    id: "3",
    position: "Freelance Full-Stack Developer",
    company: "Barokah Bersatu Enterprise (Client Project)",
    location: "Shah Alam, Selangor, Malaysia",
    startDate: new Date("2026-05-01"),
    endDate: "Present",
    description: [
      "Developed and deployed a high-performance corporate landing website using Next.js and Tailwind CSS, ensuring fast loading speeds and seamless cross-device responsiveness.",
      "Integrated OpenRouter.ai API for real-time automated text generation on frontend forms and configured EmailJS for client inquiry messaging without a dedicated mail server.",
      "Executed technical SEO optimizations and Google Search Console indexing, improving Lighthouse SEO scores from 65 to 98 and achieving priority search ranking.",
    ],
    achievements: [
      "Built and deployed a responsive corporate web platform using Next.js and Tailwind CSS with automated CI/CD deployment pipelines via GitHub and Vercel.",
      "Integrated OpenRouter.ai API to power intelligent text generation helpers directly within user input forms.",
      "Configured EmailJS client-side mail routing to deliver instant form notifications and customer inquiries without dedicated backend mail servers.",
      "Resolved crawlability and page speed bottlenecks through structured data, meta tag optimization, asset minification and lazy loading, raising Lighthouse SEO scores from 65 to 98.",
      "Registered and verified the domain on Google Search Console, achieving priority Google Search index placement for client brand queries.",
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "OpenRouter.ai API",
      "EmailJS",
      "CI/CD Pipelines",
      "Vercel",
      "Technical SEO",
      "Core Web Vitals",
      "Google Search Console",
    ],
    companyUrl: "https://barokah-bersatu-enterprise.vercel.app",
    logo: "/experience/barokah.png",
  },
];
