import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap"
export default defineConfig({
  output:'static',
 server: {
    host: true,
  },
  site:'https://ingelecsrl.com.ar',
  integrations:[sitemap()],

});