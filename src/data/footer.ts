export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title?: string;
  links: FooterLink[];
}

export const footerData = {
  brand: {
    name: "ByteSpace",
    logoUrl: "/logos/logo.svg",
    newsletterText:
      "Stay Up to date with our latest features and releases by joining our newsletter.",
    disclaimer:
      "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
    inputPlaceholder: "Enter your email",
    buttonText: "Search",
  },
  columns: [
    {
      title: "Browse",
      links: [
        { label: "Featured Courses", href: "#courses" },
        { label: "Featured Categories", href: "#categories" },
        { label: "Business", href: "#business" },
        { label: "IT", href: "#it" },
        { label: "Design", href: "#design" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Development", href: "#development" },
        { label: "Marketing", href: "#marketing" },
        { label: "Photography", href: "#photography" },
        { label: "Finance", href: "#finance" },
        { label: "Sport", href: "#sport" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Become a Creator", href: "#become-creator" },
        { label: "Affiliate Program", href: "#affiliate" },
        { label: "Contact", href: "#contact" },
        { label: "Help", href: "#help" },
        { label: "About", href: "#about" },
      ],
    },
  ],
  copyright: "@ 2023 ByteSpace. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
  ],
};
