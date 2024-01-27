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
        "sewage":"url('https://www.greenpeace.org.uk/wp-content/uploads/2022/09/sewage-outflow-scaled.jpeg')",
        "news": "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3BkbWlzYzEwLWJnLXNtaXRoc25ubWFocndzMjAxNTA2NjY0LWltYWdlLTAxLmpwZw.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
