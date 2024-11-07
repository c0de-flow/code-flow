import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBackground: "#120C31",
        borderColor: "#5999BB",
        lightBlue: "#7ED2FF",
        darkBlue : "#1A1240",
        lightGray: "#FFFFFFBF",
        swiperBullet: "#27427B",
        businessOverlay: "rgba(54,37,151,0.8)",
        "section-title": "rgba(255, 255, 255, 0.75)",
        "mobile-team-border": "rgba(255, 255, 255, 0.1)",
        "mobile-team-bg": "rgba(18, 12, 49, 0.63)",
      },
      fontFamily: {
        algerian: ["Algerian", "sans-serif"],
        abhaya: ["Abhaya Libre", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        cherry: ["Cherry bomb", "sans-serif"],
        aladin: ["Aladin", "sans-serif"],
        abril: ["Abril", "sans-serif"],
      },
      backgroundImage: {
        "header-bg": "url('/Header-img.jpeg')",
        "responsive-header-bg": "url('/responsive-header-bg.jpeg')",
      },
      boxShadow: {
        "header-box": "0px 0px 60px 30px rgba(39, 66, 123, 1) inset",
        businessShadow: "0px 4px 0px #120C31",
      },
    },
  },
  plugins: [],
};
export default config;
