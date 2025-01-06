/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#956F4C',

        line_gray: '#E3E7EB',
        nav_gray: '#515151',
        text_gray: '#454545'
      },
    },
  },
  plugins: [],
};
