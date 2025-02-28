/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smm: "460px",
        sm: "640px",
        md: "768px",
        mdl: "900px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",

        // 'max-tablet': {"max" : "800px"},
      },
    },
  },
  plugins: [
    
  ]
};
