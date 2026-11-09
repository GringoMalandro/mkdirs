import type { SiteConfig } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ChatToolkit",
  tagline:
    "Discover AI and productivity tools, digital resources, and creative solutions to make work and everyday life easier.",
  description:
    "Discover AI and productivity tools that simplify your work and everyday life. Explore powerful applications and digital solutions designed to save time, boost creativity, and help you get more done.",
  keywords: [
    "ChatToolkit",
    "AI tools",
    "productivity tools",
    "digital tools",
    "creative solutions",
  ],
  author: "ChatToolkit",
  url: SITE_URL,
  logo: "/chattoolkit-logo.svg",
  // set the logoDark if you have put the logo-dark.png in the public folder
  // logoDark: "/logo-dark.png",
  // please increase the version number when you update the image
  image: `${SITE_URL}/og.png?v=1`,
  mail: "contact@chattoolkit.com",
  utm: {
    source: "chattoolkit.com",
    medium: "referral",
    campaign: "navigation",
  },
  links: {
    twitter: "",
    github: "",
    youtube: "",
  },
};
