const mode = process.env.NODE_ENV
const dev = mode === 'development'

//const FontMagician = require('postcss-font-magician')
const PresetEnv = require('postcss-preset-env')


//END PROCESS

// FontMagician({ formats: 'woff2 woff' }),

module.exports = {
  plugins: [
    PresetEnv({
      features: {
        'nesting-rules': true
      },
      stage: 0,
      autoprefixer: {
        cascade: false,
        grid: false,
        grid: 'autoplace'
      },
      browsers: 'last 2 versions'
    }),


  ]
}
