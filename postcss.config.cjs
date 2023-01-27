const mode = process.env.NODE_ENV;
const dev = mode === "development";

// const OpenProps = require('open-props')
// const tailwind = require('tailwindcss')
// const postcssMediaRanges = require('postcss-media-minmax');

const FontMagician = require("postcss-font-magician");
const PresetEnv = require("postcss-preset-env");

//END PROCESS

const purgeCSS = require("@fullhuman/postcss-purgecss");

// FontMagician({ formats: 'woff2 woff' }),
// postcssMediaRanges(),
// tailwind('./tailwind.config.js'),

module.exports = {
  plugins: [
    PresetEnv({
      features: {
        "nesting-rules": true,
      },
      stage: 0,
      autoprefixer: {
        cascade: false,
        grid: false,
        grid: "autoplace",
      },
      browsers: "last 2 versions",
    }),

    !dev &&
      purgeCSS({
        content: ["./src/**/*.{astro,svelte,html}"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"],
      }),
  ],
};

