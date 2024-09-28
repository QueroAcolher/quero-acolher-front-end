import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        sfpro: ['SF Pro Display', 'sans-serif']
      }
    }
  },

  plugins: [require('@tailwindcss/typography')]
} as Config;
