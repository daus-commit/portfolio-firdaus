import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Laravel",
    description: "Build secure, scalable PHP web applications using an elegant MVC framework.",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: "Yii2 Advanced",
    description: "Develop enterprise-grade PHP backends with tier-separated application structures.",
    rating: 4,
    icon: Icons.yii,
  },
  {
    name: "Github",
    description: "Manage codebase version control, collaborate on repositories, and track changes.",
    rating: 5,
    icon: Icons.github,
  },
  {
    name: "Vercel",
    description: "Deploy fast, Git-integrated frontend applications and serverless functions.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "Render",
    description: "Deploy and host full-stack web applications, APIs, and databases instantly.",
    rating: 5,
    icon: Icons.render,
  },
  {
    name: "Microsoft Office",
    description: "Create professional documentation, technical user manuals, and spreadsheets.",
    rating: 4,
    icon: Icons.microsoft,
  },
  {
    name: "OpenRouter.ai",
    description: "Integrate multiple Large Language Models into applications via a single API gateway.",
    rating: 4,
    icon: Icons.openrouter,
  },
  {
    name: "Unity Engine",
    description: "Develop cross-platform interactive software and real-time virtual environments.",
    rating: 3,
    icon: Icons.unity,
  },
  {
    name: "Flutter",
    description: "Build natively compiled cross-platform mobile and web apps from one codebase.",
    rating: 2,
    icon: Icons.flutter,
  },
  {
    name: "Next.js",
    description: "Build high-performance, SEO-optimized React applications with server rendering.",
    rating: 2,
    icon: Icons.nextjs,
  },
  {
    name: "Bootstrap",
    description: "Quickly construct responsive web layouts using a popular component framework.",
    rating: 3,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description: "Design, manage, and optimize relational databases for dynamic applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "HTML/Blade",
    description: "Structure web semantic layouts using HTML and the Laravel Blade templating engine.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description: "Design custom visual styles, layouts, and animations for web viewports.",
    rating: 3,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description: "Style websites rapidly utilizing a utility-first CSS design framework.",
    rating: 3,
    icon: Icons.tailwindcss,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 2,
    icon: Icons.react,
  },
  {
    name: "Supabase",
    description: "Deploy open-source PostgreSQL databases, authentication, and real-time APIs instantly.",
    rating: 3,
    icon: Icons.supabase,
  },
  {
    name: "Figma",
    description: "Design interactive user interfaces, wireframes, and prototypes collaboratively in real time.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "Canva",
    description: "Create professional marketing graphics, presentations, and visual content quickly.",
    rating: 5,
    icon: Icons.canva,
  },
  //   {
  //   name: "Javascript",
  //   description:
  //     "Create interactive and dynamic web experiences with the versatile scripting language.",
  //   rating: 4,
  //   icon: Icons.javascript,
  // },
  // {
  //   name: "GraphQL",
  //   description:
  //     "Fetch data precisely with a powerful query language for APIs and runtime execution.",
  //   rating: 4,
  //   icon: Icons.graphql,
  // },
  // {
  //   name: "Nest.js",
  //   description:
  //     "Create scalable and modular applications with a progressive Node.js framework.",
  //   rating: 4,
  //   icon: Icons.nestjs,
  // },
  // {
  //   name: "express.js",
  //   description:
  //     "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
  //   rating: 5,
  //   icon: Icons.express,
  // },
  // {
  //   name: "Node.js",
  //   description:
  //     "Run JavaScript on the server side, enabling dynamic and responsive applications.",
  //   rating: 5,
  //   icon: Icons.nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   description:
  //     "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
  //   rating: 5,
  //   icon: Icons.mongodb,
  // },
  // {
  //   name: "Typescript",
  //   description:
  //     "Enhance JavaScript with static types, making code more understandable and reliable.",
  //   rating: 5,
  //   icon: Icons.typescript,
  // },
  // {
  //   name: "React Native",
  //   description:
  //     "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
  //   rating: 4,
  //   icon: Icons.react,
  // },
  // {
  //   name: "Angular",
  //   description:
  //     "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
  //   rating: 3,
  //   icon: Icons.angular,
  // },
  // {
  //   name: "Redux",
  //   description:
  //     "Manage app state effectively using a predictable and centralized state container.",
  //   rating: 4,
  //   icon: Icons.redux,
  // },
  // {
  //   name: "Socket.io",
  //   description:
  //     "Enable real-time, bidirectional communication between clients and servers effortlessly.",
  //   rating: 3,
  //   icon: Icons.socketio,
  // },
  // {
  //   name: "Material UI",
  //   description:
  //     "Create stunning and responsive UIs with a popular React UI framework.",
  //   rating: 4,
  //   icon: Icons.mui,
  // },
  // {
  //   name: "AWS",
  //   description:
  //     "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
  //   rating: 3,
  //   icon: Icons.amazonaws,
  // },
  // {
  //   name: "Netlify",
  //   description:
  //     "Manage and organize relational databases efficiently for data-driven applications.",
  //   rating: 4,
  //   icon: Icons.netlify,
  // },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
