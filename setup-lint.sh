#!/bin/bash


ESLINT="eslint @typescript-eslint/parser eslint-plugin-astro eslint-config-prettier @tinkoff/eslint-config"
STYLELINT="rome stylelint postcss-html stylelint-config-html @tinkoff/stylelint-config stylelint-config-standard-scss stylelint-scss stylelint-csstree-validator "
POSTCSS="sass postcss-import postcss-scss postcss-font-magician @fullhuman/postcss-purgecss postcss-preset-env postcss postcss-cli"
PRETTIER="prettier prettier-plugin-astro @tinkoff/prettier-config"
DEMO="stylelint-config-prettier container-query-polyfill stylelint-order"
UNOCSS="@unocss/eslint-config "

eval "pnpm add -D $ESLINT $STYLELINT $POSTCSS $PRETTIER $DEMO $UNOCSS"
echo "installation des dev stylelint"

cat $(dirname "$0")/eslintrc.json > eslintrc.json
cat $(dirname "$0")/.prettierrc.cjs > .prettierrc.cjs
cat $(dirname "$0")/.prettierignore > .prettierignore
cat $(dirname "$0")/.stylelintignore > .stylelintignore
cat $(dirname "$0")/.stylelintrc.cjs > .stylelintrc.cjs
cat $(dirname "$0")/postcss.config.cjs > postcss.config.cjs

echo " fin de l'installation des programmes
