import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        'screen-2xl': '1536px',
        'screen-xl': '1280px',
        'screen-lg': '1024px',
        'screen-md': '768px',
        'screen-sm': '640px',
      },
      fontFamily: {
        'Halyard': ['halyard-display', 'sans-serif'],
        'Articulat': ["articulat-cf", 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
