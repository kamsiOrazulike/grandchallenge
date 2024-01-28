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
        "sewage":
          "url('https://www.greenpeace.org.uk/wp-content/uploads/2022/09/sewage-outflow-scaled.jpeg')",
        "news": "url('https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706313600&semt=ais')",
      },
    },
  },
  plugins: [],
};
export default config;
