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
    endDate: "Present", // Present
    description: [
      "Developed and maintained full-stack production web systems across frontend and backend layers using PHP, Laravel, JavaScript and MySQL based on business and client requirements.",
      "Monitored AWS EC2 cloud server uptime and performed server reboots during downtime incidents to restore service availability and ensure operational continuity.",
      "Conducted manual QA/QC testing, debugging, system diagnostics and sanity checks prior to production deployments while delivering on-site and online technical training for end users.",
    ],
    achievements: [
      "Developed and delivered end-to-end web application modules across frontend and backend layers, translating client specifications into scalable production features.",
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
    companyUrl: "#",
    logo: "/experience/intesh.png",
  },

  // //second experience
  {
    id: "2",
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

  // //third experience
  {
    id: "3",
    position: "Internship, Junior Backend Developer and IT Technician",
    company: "HPCS Sdn Bhd",
    location: "Alam Budiman, Selangor, Malaysia",
    startDate: new Date("2026-01-05"),
    endDate: new Date("2026-05-22"),
    description: [
      "Developed and maintained enterprise web applications utilizing Laravel and Yii2 Advanced, implementing secure Authentication, Role-Based Access Control (RBAC) and custom Middleware layers.",
      "Integrated artificial intelligence features into backend services by setting up LLM-powered text generators via OpenRouter.ai APIs.",
      "Conducted rigorous QA testing, system diagnostics and User Acceptance Testing (UAT) across company applications while authoring comprehensive end-user technical documentation.",
    ],
    achievements: [
      "Designed and optimized core application modules using Laravel and Yii2 Advanced, ensuring efficient CRUD operations, clean MVC architecture and optimized MySQL query performance.",
      "Engineered a granular Role-Based Access Control (RBAC), token-based authentication and middleware system to securely manage user permissions and protect sensitive API endpoints.",
      "Implemented an AI generator feature by integrating OpenRouter.ai APIs, enabling dynamic LLM-powered content generation within production workflows.",
      "Executed comprehensive manual QA testing cycles and structured end-to-end User Acceptance Testing (UAT) scenarios, reducing post-deployment errors and validating system stability.",
      "Authored detailed technical User Manuals and standardized bug reporting workflows, improving cross-team communication and reducing internal IT support overhead.",
      "Managed system patch deployments and software updates across local infrastructure, ensuring minimal downtime and full operational compliance.",
    ],
    skills: [
      "Laravel",
      "Yii2 Advanced",
      "PHP",
      "MySQL",
      "RBAC",
      "Middleware & Auth",
      "OpenRouter.ai",
      "LLM Integration",
      "QA Testing",
      "UAT Coordination",
      "Technical Documentation",
      "IT Troubleshooting",
    ],
    companyUrl: "https://hpcs.com.my/index.php/en/",
    logo: "/experience/hpcs.png",
  },

  // //fourth experience
  {
    id: "4",
    position: "Internship, UI/UX Designer and Joomla CMS Developer",
    company: "HPCS | Beambox Malaysia",
    location: "Alam Budiman, Selangor, Malaysia",
    startDate: new Date("2026-01-05"),
    endDate: new Date("2026-05-22"),
    description: [
      "Designed intuitive, user-centric wireframes, user flows and high-fidelity interactive prototypes to elevate application interfaces.",
      "Developed, customized and maintained responsive corporate web portals utilizing the Joomla Content Management System (CMS).",
      "Collaborated with cross-functional teams to translate user research insights into visually striking, fully functional and modern digital experiences.",
    ],
    achievements: [
      "Created comprehensive UI/UX design systems, components and high-fidelity layouts in Figma, drastically improving visual consistency and interface design workflows.",
      "Built and launched dynamic web platforms using Joomla CMS, configuring custom extensions, templates, modules and plugins to meet business goals.",
      "Conducted detailed heuristic evaluations and user testing to identify usability bottlenecks, leading to layout overhauls that enhanced user engagement.",
      "Optimized front-end asset delivery and Joomla template code to guarantee seamless cross-browser compatibility and faster page load speeds.",
      "Ensured all web designs were highly accessible and fully responsive across mobile, tablet and desktop viewports, maximizing audience reach.",
    ],
    skills: [
      "UI/UX Design",
      "Joomla CMS",
      "Figma",
      "Wireframing & Prototyping",
      "Responsive Web Design",
      "HTML5 & CSS3",
      "Component Customization",
    ],
    companyUrl: "https://beambox.my",
    logo: "/experience/beamboxlogo.png",
  },
];
