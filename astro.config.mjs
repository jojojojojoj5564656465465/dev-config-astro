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

// MULTILIGUAL TOOL FOR ASTRO
//import astroI18next from 'astro-i18next'


// import svelte from '@astrojs/svelte'
// import mdx from '@astrojs/mdx'

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
//	mdx({
    //  extendMarkdownConfig: false,
     // smartypants: true,
    //  gfm: true,
    //}),

  ]
})
