import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#050729',
        'dark-gray': '#252529',
        gray: '#575861',
        'light-gray': '#A0A0A8',
        'white-gray': '#F0F0F6',
        white: '#FEFEFF',
      },
    },
  },
  plugins: [],
};

export default config;
