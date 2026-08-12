import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0A0C',
          space: '#0A0A0C',
          deep: '#030303',
        },
        accent: {
          DEFAULT: '#E0561B',
          cyber: '#E0561B',
          green: '#E0561B',
          orange: '#E0561B',
        },
        secondary: {
          DEFAULT: '#C29A70',
          kraft: '#C29A70',
          metallic: '#C29A70',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
