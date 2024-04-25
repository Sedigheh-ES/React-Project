import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: { 
    extend: {
      fontFamily: {
        quickSand:["Quicksand", "sans-serif"],
      },
      colors:{
       'cc-new':'#f0e8d5',
       'hero-font':'#253D4E',
       'hero-bg':'#F4F4F4',
       'third':'#f0e8d5',
       'sec':'#f3e8e8',
       'forth':'#e7eaf3',
       'btnCol':'#fdc040'
      },
      width: {
        '128': '700px',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/img/bg-hero.png')",     
    },

      
    variants: {},
    plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  },
  },
},
  plugins: [],
};
export default config;
