// /src/data/site.ts
// Centralized site metadata - Single source of truth for all site-wide content

/**
 * Core site information
 */
export const SITE_NAME = "ODSP Info"; // TODO: Update with your actual company name
export const SITE_TITLE = "ODSP Info";
export const SITE_DESCRIPTION = "ODSP Info is a comprehensive resource for information about the Ontario Disability Support Program (ODSP), providing insights, updates, and support for individuals navigating the program.";
export const SITE_URL = "https://example.com"; // TODO: Update when you get your domain

/**
 * Social sharing defaults
 */
export const DEFAULT_OG_IMAGE = "/images/og-default.jpg"; // TODO: Create and add your default social share image

/**
 * Page-specific titles (append site name automatically)
 */
export const PAGE_TITLES = {
  home: `Home - ${SITE_NAME}`,
  about: `About Us - ${SITE_NAME}`,
  services: `Our Services - ${SITE_NAME}`,
  contact: `Contact Us - ${SITE_NAME}`,
  test: `Test Page - ${SITE_NAME}`,
  cheatsheet: `Bootstrap Cheatsheet - ${SITE_NAME}`,
} as const;

/**
 * Page-specific descriptions for SEO
 */
export const PAGE_DESCRIPTIONS = {
  home: "Welcome to ODSP Info. Discover our services and learn more about what we do.",
  about: "Learn about ODSP Info's mission, values, and the team behind our success.",
  services: "Explore our comprehensive range of professional services designed to meet your needs.",
  contact: "Get in touch with our team. We're here to answer questions and help you succeed.",
  test: "Test page for development purposes.",
  cheatsheet: "Bootstrap component reference and examples.",
} as const;

/**
 * Page-specific hero titles for InnerHero component
 */
export const HERO_TITLES = {
  about: "About Us",
  services: "Our Services",
  contact: "Contact Us",
  test: "Test Page",
  cheatsheet: "Bootstrap Cheatsheet",
} as const;

/**
 * Page-specific Open Graph images (optional - falls back to default)
 */
export const PAGE_OG_IMAGES = {
  about: "/images/about-og.jpg",
  services: "/images/services-og.jpg",
  contact: "/images/contact-og.jpg",
  test: "/images/test-og.jpg",
  cheatsheet: "/images/cheatsheet-og.jpg",
} as const;
