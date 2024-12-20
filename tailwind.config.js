/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
    /* {  animation : {
        "loop-scroll" : "loop-scroll 50s linear infinite "
      },
      keyframes : {
        "loop-scroll ": {
          from : { transform : "translateX(0)"},
          to : { transform : "translateX(- 100%)"}
        }
      }, }*/
      gridTemplateColumns: {
        "auto-fill-200-300": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      textColor: {
        skin: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        },
      },
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      }
    }
  },
  plugins: [
    
  ],
}
 

