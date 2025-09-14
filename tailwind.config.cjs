const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['Sofia Pro'],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
        bubblegum: ['Bubblegum Sans'],
        dancing: ['Dancing Script Variable'],
        bruno: ['Bruno Ace'],
        code: ['Source Code Pro']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
};
