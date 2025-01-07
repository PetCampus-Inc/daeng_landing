/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#956F4C',

        gray_5: '#A3A3A3',
        gray_6: '#454545',
        line_gray: '#E3E7EB',
        nav_gray: '#515151',
      },
      boxShadow: {
        round: '0px 0px 30px rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
};
