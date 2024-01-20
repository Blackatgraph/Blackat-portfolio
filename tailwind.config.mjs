/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "doodle-items": 'url("/doodle-items.webp")',
      },
      colors: {
        bg: "#091619",
        "bg-foreground": "#393E46BF",
        text: "#fff",
        "text-foreground": "#eeeeeebf",
        primary: "#20BE55",
        secondary: "#13C3C3",
      },
    },
  },
  plugins: [],
};
