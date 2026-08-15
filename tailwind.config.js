/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <--- THIS MUST BE HERE
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // Included just in case you use a src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)'],
      },
    },
  },
  plugins: [],
}