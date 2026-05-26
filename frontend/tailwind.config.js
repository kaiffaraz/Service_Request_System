/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        // MAIN BRAND COLORS

        primary: "#0052CC",       // Trust Blue
        secondary: "#6B778C",     // Slate Gray
        accent: "#00B8D9",        // Electric Cyan
        background: "#F4F5F7",    // Ice White


        // EXTRA UI COLORS

        success: "#36B37E",
        warning: "#FFAB00",
        danger: "#FF5630",
        dark: "#172B4D",
        light: "#FFFFFF",

      },

    },

  },

  plugins: [],

}