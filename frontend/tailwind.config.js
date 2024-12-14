/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tandoori-red': '#F25C54',       // Primary red for buttons and highlights
        'golden-yellow': '#FFC107',     // Secondary yellow for accents and hover states
        'burnt-orange': '#FF7043',      // Subtle accent for secondary actions
        'olive-green': '#A4B200',       // Tags and labels
        'soft-brown': '#6D4C41',        // Backgrounds like footer or navigation
        'light-beige': '#F5F5F5',       // Main page background
        'slate-gray': '#4E5B5A',        // Text for readability
        'deep-purple': '#5D2F97',       // Special highlights or branding elements
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out',     // Smooth fade-in animation
        'bounce-slow': 'bounce 3s infinite', // Slower bounce effect
        'pulse-slow': 'pulse 3s infinite',   // Slower pulse effect for subtle accents
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Radial gradient
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',   // Conic gradient
      },
    },
  },
  plugins: [],
};
