const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [flowbite.plugin(),
  require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

