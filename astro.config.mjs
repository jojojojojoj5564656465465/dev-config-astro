import '@unocss/reset/tailwind.css'
import { astroImageTools } from 'astro-imagetools'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
import compress from 'astro-compress'

// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  site: 'https://www.brendonovich.dev',
  integrations: [
    astroImageTools,
    UnoCSS(),
    critters(),
    sitemap(),
    compress(),
    robotsTxt(),

  ]
})
