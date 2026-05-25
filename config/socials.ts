import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@daus-commit",
    icon: Icons.gitHub,
    link: "https://github.com/daus-commit",
  },
  {
    name: "LinkedIn",
    username: "Firdaus Hakimi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/firdaus-hakimi-07a376382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Tiktok",
    username: "Firdaus Hakimi",
    icon: Icons.tiktok,
    link: "https://www.tiktok.com/@hyefellers?_r=1&_t=ZS-94S1hwqlhZd",
  },
  {
    name: "Instagram",
    username: "Firdaus Hakimi",
    icon: Icons.instagram,
    link: "https://www.instagram.com/nisapenihm",
  },
  {
    name: "Gmail",
    username: "Firdaus Hakimi",
    icon: Icons.gmail,
    link: "mailto:hakim.risal.2005@gmail.com",
  },
];
