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
        lightGray: "#FFFFFFBF"
      },
      fontFamily: {
        algerian: ["Algerian", "sans-serif"],
        abhaya: ["Abhaya Libre", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "header-bg": "url('/Header-img.jpeg')",
      },
      boxShadow: {
        "header-box": "0px 0px 60px 30px rgba(39, 66, 123, 1) inset",
      },
    },
  },
  plugins: [],
};
export default config;
