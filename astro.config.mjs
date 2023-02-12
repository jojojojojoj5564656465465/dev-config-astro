import presetAttributify from '@unocss/preset-attributify'
import presetWind from '@unocss/preset-wind'
import '@unocss/reset/tailwind.css'
import UnoCSS from 'unocss/astro'

import rome from 'astro-rome'
import { defineConfig } from 'astro/config'




import { astroImageTools } from 'astro-imagetools'

import robotsTxt from 'astro-robots-txt'
import critters from 'astro-critters'
// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import compress from 'astro-compress'

import prefetch from '@astrojs/prefetch'



// https://astro.build/config
export default defineConfig({
  site: 'https://www.brendonovich.dev',
  integrations: [
    astroImageTools,
    prefetch(),
    critters(),
    sitemap(),
    compress(),
    robotsTxt(),
    rome({}),
    UnoCSS({
      presets: [presetWind(), presetAttributify({})],
    }),
  ],
})
