#!/bin/bash

ESLINT="rome eslint @typescript-eslint/parser eslint-plugin-astro "
STYLELINT="stylelint stylelint-config-html stylelint-config-recommended"
POSTCSS="postcss-html postcss-scss postcss-font-magician postcss-preset-env postcss postcss-syntax"
# TINKOFF="@tinkoff/eslint-config @tinkoff/stylelint-config @tinkoff/prettier-config"
# POSTCSS retire="sass postcss-import   @fullhuman/postcss-purgecss postcss-cli"


PRETTIER="prettier prettier-plugin-astro"
SVELTE="postcss-load-config svelte-preprocess"
DEMO="postcss-import"
TOOL="wireit"

UNOCSS="@unocss/preset-icons @unocss/transformer-variant-group @unocss/transformer-directives @unocss/eslint-config unocss @unocss/preset-wind @unocss/reset @unocss/preset-web-fonts @unocss/preset-attributify"
ASTRO="astro-critters @astrojs/sitemap astro-robots-txt astro-compress astro-imagetools"


eval "ni $ESLINT $STYLELINT $POSTCSS $PRETTIER $TOOL $UNOCSS -D"
sleep 1

for astro in $ASTRO; do
  eval "ni -D $astro"
done

for package in $NONDEV; do
  eval "ni $package"
done


cp "$(dirname "$0")"/{eslintrc.json,.prettierrc.cjs,.prettierignore,.stylelintignore,.stylelintrc.cjs,postcss.config.cjs,shims.d.ts,unocss.config.ts,rome.json,astro.config.mjs,wireit.txt,.editorconfig} .

echo .wireit >> .gitignore


npx stylelint "**/*.{css,js,astro}" --fix
code .
nr dev --open




# stylelint-config-recommended postcss-selector-parser stylelint-prettier

