module.exports = {
  plugins: [require('@tinkoff/prettier-config'),require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  endOfLine: 'lf',
  bracketSameLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'none'
};
