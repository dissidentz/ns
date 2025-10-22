// /src/data/site.ts
// Centralized site metadata - Single source of truth for all site-wide content

/**
 * Core site information
 */
export const SITE_NAME = "ODSP Info";
export const SITE_TITLE = "ODSP Info";
export const SITE_DESCRIPTION = "ODSP Info is a comprehensive resource for information about the Ontario Disability Support Program (ODSP), providing insights, updates, and support for individuals navigating the program.";
export const SITE_URL = "https://example.com"; // Update when you get your domain

/**
 * Social sharing defaults
 */
export const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

/**
 * Page-specific titles (append site name automatically)
 */
export const PAGE_TITLES = {
  home: `Ontario Disability Support Program Resources - ${SITE_NAME}`,
  about: `About Us - ${SITE_NAME}`,
  services: `Our Services - ${SITE_NAME}`,
  blog: `ODSP Blog & Updates - ${SITE_NAME}`,
  search: `Search - ${SITE_NAME}`,
  contact: `Contact Us - ${SITE_NAME}`,
  paymentDates: `ODSP Payment Dates 2025 - ${SITE_NAME}`,
  cheatsheet: `Bootstrap Cheatsheet - ${SITE_NAME}`,
} as const;

/**
 * Page-specific descriptions for SEO
 */
export const PAGE_DESCRIPTIONS = {
  home: "Comprehensive ODSP resources, program information, eligibility requirements, and support for Ontario Disability Support Program recipients and applicants.",
  about: "Learn about ODSP Info's mission to support ODSP recipients with accurate information, resources, and guidance for navigating the Ontario Disability Support Program.",
  services: "Explore our ODSP resources including eligibility guides, application assistance, benefits information, and support services for program recipients.",
  contact: "Get in touch with the ODSP Info team. We're here to answer your questions about the Ontario Disability Support Program and help you navigate the system.",
  blog: "Stay informed with the latest ODSP updates, policy changes, eligibility information, and helpful resources for Ontario Disability Support Program recipients.",
  search: "Search for ODSP information, resources, eligibility requirements, benefits, and application guides.",
  cheatsheet: "Bootstrap component reference and examples.",
} as const;

/**
 * Page-specific hero titles for InnerHero component
 */
export const HERO_TITLES = {
  about: "About Us",
  services: "Our Services",
  contact: "Contact Us",
  blog: "ODSP Blog & Updates",
  cheatsheet: "Bootstrap Cheatsheet",
} as const;

/**
 * Page-specific Open Graph images (optional - falls back to default)
 */
export const PAGE_OG_IMAGES = {
  home: "/images/home-og.jpg",
  about: "/images/about-og.jpg",
  services: "/images/services-og.jpg",
  contact: "/images/contact-og.jpg",
  cheatsheet: "/images/cheatsheet-og.jpg",
} as const;
