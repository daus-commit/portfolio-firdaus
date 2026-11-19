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
  position: "Internship, Junior Backend Developer and IT Technician",
  company: "HPCS Sdn Bhd",
  location: "Alam Budiman, Selangor, Malaysia",
  startDate: new Date("2026-01-05"),
  endDate: new Date("2026-05-22"),
  description: [
    "Developed and maintained robust enterprise web applications utilizing Laravel and Yii2 Advanced, implementing secure Authentication, Role-Based Access Control (RBAC), and custom Middleware layers.",
    "Integrated cutting-edge artificial intelligence features into backend services by setting up LLM-powered text generators via OpenRouter.ai APIs.",
    "Conducted rigorous QA testing, system diagnostics, and User Acceptance Testing (UAT) across company applications while authoring comprehensive end-user technical documentation.",
  ],
  achievements: [
    "Designed and optimized core application modules using Laravel and Yii2 Advanced, ensuring efficient CRUD operations, clean MVC architecture, and optimized MySQL query performance.",
    "Engineered a granular Role-Based Access Control (RBAC), token-based authentication, and middleware system to securely manage user permissions and protect sensitive API endpoints.",
    "Successfully implemented an AI generator feature by integrating OpenRouter.ai APIs, enabling dynamic LLM-powered content generation within production workflows.",
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

  // //second experience
  {
    id: "3",
    position: "Internship, UI/UX Designer and Joomla CMS Developer",
    company: "HPCS | Beambox Malaysia",
    location: "Alam Budiman, Selangor, Malaysia",
    startDate: new Date("2026-01-05"),
    endDate: new Date("2026-05-22"),
    description: [
      "Designed intuitive, user-centric wireframes, user flows, and high-fidelity interactive prototypes to elevate application interfaces.",
      "Developed, customized, and maintained responsive corporate web portals utilizing the Joomla Content Management System (CMS).",
      "Collaborated with cross-functional teams to translate user research insights into visually striking, fully functional, and modern digital experiences.",
    ],
    achievements: [
      "Created comprehensive UI/UX design systems, components, and high-fidelity layouts in Figma, drastically improving visual consistency and interface design workflows.",
      "Successfully built and launched dynamic web platforms using Joomla CMS, configuring custom extensions, templates, modules, and plugins to meet business goals.",
      "Conducted detailed heuristic evaluations and user testing to identify usability bottlenecks, leading to layout overhauls that enhanced user engagement.",
      "Optimized front-end asset delivery and Joomla template code to guarantee seamless cross-browser compatibility and faster page load speeds.",
      "Ensured all web designs were highly accessible and fully responsive across mobile, tablet, and desktop viewports, maximizing audience reach.",
    ],
    skills: ["UI/UX Design", "Joomla CMS", "Figma", "Wireframing & Prototyping", "Responsive Web Design", "HTML5 & CSS3", "Component Customization"],
    companyUrl: "https://beambox.my",
    logo: "/experience/beamboxlogo.png",
  },
];
