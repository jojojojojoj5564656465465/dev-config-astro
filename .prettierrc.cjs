/** @type {import("prettier").Config} */
module.exports = {
  "extends": [],
  plugins: [

    require.resolve('prettier-plugin-astro')
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],

  endOfLine: 'lf',
  bracketSameLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'none'
}
