/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [ //garante que em produção todas as classes que comecem com esses termos estarão presentes
    {pattern:/^bg-/},
    {pattern:/^to-/},
    {pattern:/^from-/},
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
