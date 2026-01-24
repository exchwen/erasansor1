/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Stackblitz bazen app klasörünü src dışına koyabilir, garanti olsun.
  ],
  theme: {
    extend: {
      colors: {
        er: {
          yellow: '#FEE123',
          black: '#000000',
          dark: '#111111',
        },
      },
    },
  },
  plugins: [],
};
