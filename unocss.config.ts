import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  //extractors: [extractorSvelte],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetWind(),
    presetAttributify({ ignoreAttributes: ['block'] }),
    presetTagify(),
    presetIcons({
      cdn: 'https://esm.sh/',

      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],

  exclude: [
    'node_modules',
    'dist',
    '.git',
    '.husky',
    '.vscode',
    'public',
    'build',
    'mock',
    './stats.html',
  ],

  rules: [
    [
      /^flex-(row|col)-([1-9])$/,
      ([, direction, number]) => {
        function dd(d: 'row' | 'col'): string {
          if (d === 'row') {
            return 'row'
          } else {
            return 'column'
          }
        }
        function area(n: number): string[] {
          type positionProps = 'start' | 'center' | 'end'| ''
          let position: [positionProps, positionProps]
          switch (n) {
            case 1:
              position = ['start', 'start']
              break
            case 2:
              position = ['center', 'start']
              break
            case 3:
              position = ['end', 'start']
              break
            case 4:
              position = ['start', 'center']
              break
            case 5:
              position = ['center','center']
              break
            case 6:
              position = ['end', 'center']
              break
            case 7:
              position = ['start', 'end']
              break
            case 8:
              position = ['center', 'end']
              break
            case 9:
              position = ['end', 'end']
              break

            default:
              position = ['','']
              break
          }
          return position
        }

        let direction2 = dd(direction as 'row' | 'col')
        let number2 = area(Number(number))
        return {
          display: 'flex',
          'flex-direction': direction2,
          'justify-content': number2[0],
          'align-items': number2[1],
        }
      },
    ],


    [
      /^family-([a-zA-Z]*)$/,
      ([, c]) => {
        return {
          'font-family': `${c}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        }
      },
    ],
    [
      /^p-(\w+)-(\w+)?-?(\w+)?-?(\w+)?$/,
      ([, t, r, b, l]) => {
        const effectiveArr = [t, r, b, l].filter((e) => e)
        const numReg = /^((?![A-Za-z]).)*$/
        const paddingList = effectiveArr.map((e) =>
          numReg.test(e) ? `${e}%` : e,
        )
        return effectiveArr.length === 0
          ? { padding: '0px' }
          : { padding: paddingList.join(' ') }
      },
    ],
    [
      /^m-(\w+)-(\w+)?-?(\w+)?-?(\w+)?$/,
      ([, t, r, b, l]) => {
        const effectiveArr = [t, r, b, l].filter((e) => e)
        const numReg = /^((?![A-Za-z]).)*$/
        const marginList = effectiveArr.map((e) =>
          numReg.test(e) ? `${e}%` : e,
        )
        return effectiveArr.length === 0
          ? { margin: '0px' }
          : { margin: marginList.join(' ') }
      },
    ],
    ['cursor-p', { cursor: 'pointer' }],
  ],
  shortcuts: [
    {
      btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    },

    [
      /^btn-(.*)-(\d+)$/,
      ([, c, d]) => {
        let e = (parseInt(d) + 200).toString()
        return `bg-${c}-${d} hover:bg-${c}-${e} text-${c}-50 font-semibold py-2 px-4 rounded-lg`
      },
    ],
    [
      /^btn-(.*)$/,
      ([, c]) =>
        `bg-${c}-400 hover:bg-${c}-700 text-${c}-50 font-semibold py-2 px-4 rounded-lg`,
    ],
    {
      container:
        'relative px-1 m-1 md:px-[calc(50%-(71rem/5))] box-border mx-auto overflow-hidden bg-red-700',
    },
    {
      cor: 'bg-green-100 mx-[calc(50%_-_(1000px_/_2))]',
    },
    {
      'flex-center': 'items-center justify-center',
    },
    {
      'absolute-center': '-translate-1/2 left-1/2 top-1/2',
    },
    [/^size-(.*)$/, ([, s]) => `h-${s} w-${s}`],
  ],
  theme: {
    colors: {
      primary: {
        dark: 'red-400',
        light: 'red-600',
      },
    },
    fontFamily: {
      sans: 'Montserrat Alternates',
      script: 'Indie Flower',
      mono: 'Mononoki',
    },
    fontSize: {
      xs: ['clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)', '1'],
      sm: ['clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)', '1'],
      base: ['clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)', '1'],
      md: ['clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)', '1'],
      lg: ['clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)', '1'],
      xl: ['clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)', '1'],
      '2xl': ['clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)', '1'],
      '3xl': ['clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)', '1'],
      '4xl': ['clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)', '1'],
      '5xl': ['clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)', '1'],
      '6xl': ['clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)', '1'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    breakpoints: {
      xs: '280px',
      sm: '480px',
      md: '720px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px',
    },
  },

  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
