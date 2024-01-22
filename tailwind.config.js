/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "z": "0px",

      "530p": "530px",

      "640p": "640px",

      "850p": "850px",

      "1000p": "1000px",
    },
    extend: {
      colors: {
        'nav': 'linear-gradient(0deg, rgba(0,0,0,0.4724483543417367) 0%, rgba(0,0,0,0.8674063375350141) 100%)',
      },

    },
  },
  plugins: [],
}

