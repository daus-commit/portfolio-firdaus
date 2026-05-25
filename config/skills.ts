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
    description:
      "Build elegant, secure, and highly scalable web applications using PHP's premium MVC framework.",
    rating: 5,
    icon: Icons.laravel,
  },
  {
    name: "Yii2 Advanced",
    description:
      "Develop robust enterprise-grade backends with clean tier separation and powerful scaffolding tools.",
    rating: 5,
    icon: Icons.yii,
  },
  {
    name: "Render",
    description:
      "Deploy and manage web apps, APIs, and static sites instantly with seamless cloud hosting infrastructure.",
    rating: 4,
    icon: Icons.render,
  },
  {
    name: "Github",
    description:
      "Manage codebase history, collaborate securely on repositories, and automate deployment workflows.",
    rating: 5,
    icon: Icons.github,
  },
  {
    name: "OpenRouter.ai",
    description:
      "Integrate diverse, advanced Large Language Models into backend code workflows using a unified API key.",
    rating: 4,
    icon: Icons.openrouter,
  },
  {
    name: "Unity Engine",
    description:
      "Build immersive cross-platform interactive software and real-time virtual environment applications.",
    rating: 3,
    icon: Icons.unity,
  },
  {
    name: "Flutter",
    description:
      "Craft beautiful, natively compiled cross-platform mobile and desktop interfaces from a single codebase.",
    rating: 2,
    icon: Icons.flutter,
  },
  {
    name: "Next.js",
    description:
      "Build high-performance, SEO-friendly React web applications with hybrid static and server rendering.",
    rating: 2,
    icon: Icons.nextjs,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "HTML/Blade",
    description:
      "Structure web layouts seamlessly with modern HTML semantic elements and powerful Laravel template engines.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  //   {
  //   name: "Javascript",
  //   description:
  //     "Create interactive and dynamic web experiences with the versatile scripting language.",
  //   rating: 4,
  //   icon: Icons.javascript,
  // },
  // {
  //   name: "React",
  //   description:
  //     "Craft interactive user interfaces using components, state, props, and virtual DOM.",
  //   rating: 5,
  //   icon: Icons.react,
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
