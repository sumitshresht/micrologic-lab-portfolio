/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        // The Dribbble Shot Palette
        bg: {
          cream: "#FFF6F0",   // The soft peach/cream background
          purple: "#5B4DFF",  // The main deep purple hero color
        },
        accent: {
          pink: "#FFC4D6",    // The soft pink cubes
          yellow: "#FFD166",  // The bright yellow blocks
          blue: "#A5B4FC",    // Soft blue accents
          coral: "#FF8B8B",   // Buttons/Highlights
        },
        text: {
          main: "#1E1E2E",    // Soft black
          muted: "#6B7280",
        }
      },
      boxShadow: {
        // "Clay" styling - High depth, soft blur
        'clay-card': '20px 20px 60px #d9d1cd, -20px -20px 60px #ffffff',
        'clay-purple': '10px 10px 30px rgba(60, 40, 180, 0.4), inset 5px 5px 10px rgba(255,255,255,0.2)',
        'float': '0 20px 50px rgba(0,0,0,0.1)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
};