import type { SiteConfig } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ChatToolkit",
  tagline:
    "Useful tools, resources, and ideas for creators and businesses.",
  description:
    "ChatToolkit brings useful tools, resources, and ideas together to help creators and businesses work smarter and grow their online presence.",
  keywords: [
    "ChatToolkit",
    "creator tools",
    "business resources",
    "online presence",
  ],
  author: "ChatToolkit",
  url: SITE_URL,
  logo: "/logo.png",
  // set the logoDark if you have put the logo-dark.png in the public folder
  // logoDark: "/logo-dark.png",
  // please increase the version number when you update the image
  image: `${SITE_URL}/og.png?v=1`,
  mail: "support@mkdirs.com",
  utm: {
    source: "mkdirs.com",
    medium: "referral",
    campaign: "navigation",
  },
  links: {
    // leave it blank if you don't want to show the link (don't delete)
    twitter: "https://x.com/MkdirsHQ",
    github: "https://github.com/MkdirsHQ",
    youtube: "https://www.youtube.com/@MkdirsHQ",
  },
};
