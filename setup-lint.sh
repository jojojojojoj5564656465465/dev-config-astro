#!/bin/bash


ESLINT="eslint @typescript-eslint/parser eslint-plugin-astro eslint-config-prettier @tinkoff/eslint-config"
STYLELINT="rome stylelint postcss-html stylelint-config-html @tinkoff/stylelint-config stylelint-config-standard-scss stylelint-scss stylelint-csstree-validator stylelint-order"
POSTCSS="sass postcss-import postcss-scss postcss-font-magician @fullhuman/postcss-purgecss postcss-preset-env postcss postcss-cli"
PRETTIER="prettier prettier-plugin-astro @tinkoff/prettier-config"
DEMO="stylelint-config-prettier stylelint-prettier container-query-polyfill wireit"
UNOCSS="@unocss/preset-icons @unocss/transformer-variant-group @unocss/transformer-directives @unocss/eslint-config unocss @unocss/preset-wind @unocss/reset @unocss/preset-web-fonts @unocss/preset-attributify"
ASTRO="astro-critters astro-rome @astrojs/sitemap astro-robots-txt astro-compress"

NONDEV="@astrojs/prefetch astro-imagetools"

eval "ni $ESLINT $STYLELINT $POSTCSS $PRETTIER $DEMO $UNOCSS $ASTRO -D"
sleep 1


for package in $NONDEV; do
  eval "ni $package"
done


cp "$(dirname "$0")"/{eslintrc.json,.prettierrc.cjs,.prettierignore,.stylelintignore,.stylelintrc.cjs,postcss.config.cjs,shims.d.ts,unocss.config.ts,rome.json,astro.config.mjs} .

echo .wireit >> .gitignore


code .





# stylelint-prettier dernier ajout je sias pas si cest bien


## Replace `astro/client` with `@astrojs/image/client`
##  <reference types="@astrojs/image/client" />
## import { Image, Picture } from '@astrojs/image/components';
#The first command variable is used to assign `expr` command to add the values of $x and $y

