/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem', // 1280px
        '8xl': '90rem', // 1440px
        '9xl': '96rem', // 1536px
        '10xl': '112rem', // 1792px
        '1980': '123.75rem', // 1980px
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navcolor: "#228291",
        darkGray: "#1c1c1e",
        midnightBlue: "#2c3e50",
        slateGray: "#708090",
        charcoal: "#36454f",
        gunmetal: "#2a3439",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
