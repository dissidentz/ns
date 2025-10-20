// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/site";

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  compressHTML: false,
});
