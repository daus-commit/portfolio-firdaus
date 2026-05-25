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
    id: "2",
    position: "Internship, Junior Backend Developer",
    company: "HPCS Sdn Bhd",
    location: "Alam Budiman, Selangor, Malaysia",
    startDate: new Date("5 Jan 2026"),
    endDate: "Present",
    description: [
      "Developed and maintained robust enterprise web applications utilizing Laravel and the Yii2 Advanced framework.",
      "Architected secure application workflows by implementing custom Authentication, Role-Based Access Control (RBAC), and custom Middleware layers.",
      "Integrated cutting-edge artificial intelligence features into backend services by setting up LLM-powered text generators via OpenRouter.ai APIs.",
    ],
    achievements: [
      "Designed and optimized core application modules using Laravel and Yii2 Advanced, ensuring efficient CRUD operations and clean MVC architecture.",
      "Engineered a granular Role-Based Access Control (RBAC) and middleware system to securely manage user permissions and protect sensitive API endpoints.",
      "Successfully implemented an AI generator feature by integrating OpenRouter.ai, allowing the application to utilize advanced LLMs for dynamic content generation.",
      "Streamlined user onboarding and application security by configuring robust token-based Authentication and secure session-handling mechanisms.",
      "Optimized database schemas and backend query performance to support complex data operations and reduce server response latency.",
    ],
    skills: ["Laravel", "Yii2 Advanced", "RBAC", "Middleware & Auth", "CRUD", "OpenRouter.ai", "LLM Integration", "PHP", "MySQL"],
    companyUrl: "https://hpcs.com.my/index.php/en/",
    logo: "/experience/hpcs.png",
  },

  // //second experience
  {
    id: "3",
    position: "Internship, UI/UX Designer and Joomla CMS Developer",
    company: "HPCS | Beambox Malaysia",
    location: "Alam Budiman, Selangor, Malaysia",
    startDate: new Date("5 Jan 2026"),
    endDate: "Present",
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
  //third experience
{
    id: "1",
    position: "Internship, IT Technician",
    company: "HPCS Sdn Bhd",
    location: "Alam Budiman, Selangor, Malaysia",
    startDate: new Date("5 Jan 2026"),
    endDate: "Present",
    description: [
      "Conducted rigorous QA testing and system diagnostics across company applications to identify infrastructure bugs and performance bottlenecks.",
      "Collaborated closely with development teams to log, track, and verify software errors and system hardware vulnerabilities.",
      "Authored comprehensive end-user technical documentation and led User Acceptance Testing (UAT) sessions to ensure seamless system deployments.",
    ],
    achievements: [
      "Executed comprehensive manual and functional QA testing cycles, accurately reporting and tracking system bugs to reduce post-deployment errors.",
      "Designed and structured end-to-end User Acceptance Testing (UAT) scenarios, coordinating with business users to validate system requirements and stability.",
      "Authored detailed technical User Manuals and step-by-step troubleshooting guides, significantly reducing internal IT support tickets and training overhead.",
      "Streamlined the internal bug reporting workflow by introducing standardized error logs, improving cross-team communication between IT support and developers.",
      "Managed the deployment of system patches and software updates across local infrastructure, ensuring minimal downtime and full operational compliance.",
    ],
    skills: ["QA Testing", "UAT Coordination", "Technical Documentation", "Bug Tracking", "IT Troubleshooting", "System Administration"],
    companyUrl: "https://hpcs.com.my/index.php/en/",
    logo: "/experience/hpcs.png",
  },
];
