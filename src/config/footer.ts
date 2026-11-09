import type { FooterConfig } from "@/types";

export const footerConfig: FooterConfig = {
  links: [
    {
      title: "Product",
      items: [
        { title: "Search", href: "/search" },
        { title: "Collection", href: "/collection" },
        { title: "Category", href: "/category" },
        { title: "Tag", href: "/tag" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Pages",
      items: [
        { title: "Collection 1", href: "/collection/the-best-google-analytics-alternatives-in-2024" },
        { title: "Collection 2", href: "/collection/the-best-alternatives-to-semrush-in-2024" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
        { title: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ],
};
