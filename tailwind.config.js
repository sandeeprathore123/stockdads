/** @type {import('tailwindcss').Config} */
export default {
  // Define where Tailwind should look for content
  content: [
    "./index.html", // Include index file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JavaScript/TypeScript/React files
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite", // Define marquee animation
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" }, // Start fully outside screen
          "100%": { transform: "translateX(-100%)" }, // End fully outside screen
        },
      },
    },
  },
  plugins: [],
};