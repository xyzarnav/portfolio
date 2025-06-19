/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jet: "#383838",
        onyx: "#2b2b30",
        "custom-blue": "#5227FF",
        "eerie-black-1": "#212428",
        "eerie-black-2": "#2a2a30",
        "smoky-black": "#121212",
        "white-1": "#ffffff",
        "white-2": "#f5f5f5",
        "orange-yellow-crayola": "#f7c46c",
        "vegas-gold": "#c9ab54",
        "light-gray": "#d6d6d6",
        "light-gray-70": "rgba(214, 214, 214, 0.7)",
        "bittersweet-shimmer": "#bf4545",
        "accent-blue": "#3b82f6",
        "accent-purple": "#8b5cf6",
        "accent-green": "#10b981",
        "neon-blue": "#4CCBFF", // Added bright neon blue color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "fs-1": "2rem", // 32px
        "fs-2": "1.5rem", // 24px
        "fs-3": "1.25rem", // 20px
        "fs-4": "1.125rem", // 18px
        "fs-5": "1rem", // 16px
        "fs-6": "0.875rem", // 14px
        "fs-7": "0.813rem", // 13px
        "fs-8": "0.75rem", // 12px
      },
      fontWeight: {
        "fw-300": "300",
        "fw-400": "400",
        "fw-500": "500",
        "fw-600": "600",
        "fw-700": "700",
      },
      boxShadow: {
        "shadow-1": "-4px 8px 24px rgba(0, 0, 0, 0.25)",
        "shadow-2": "0 16px 30px rgba(0, 0, 0, 0.25)",
        "shadow-3": "0 16px 40px rgba(0, 0, 0, 0.25)",
        "shadow-4": "0 25px 50px rgba(0, 0, 0, 0.15)",
        "shadow-5": "0 24px 80px rgba(0, 0, 0, 0.35)",
        "shadow-dark": "0 8px 30px rgba(0, 0, 0, 0.5)",
        glow: "0 0 15px rgba(76, 203, 255, 0.4)", // Changed to match neon-blue
      },
      backgroundImage: {
        "gradient-onyx":
          "linear-gradient(to bottom right, #3e3e40 3%, #313131 97%)",
        "gradient-jet":
          "linear-gradient(to bottom right, rgba(46, 46, 49, 0.251) 0%, rgba(31, 31, 36, 0) 100%), #212428",
        "gradient-yellow-1":
          "linear-gradient(to bottom right, #f7c46c 0%, rgba(243, 196, 117, 0) 50%)",
        "gradient-yellow-2":
          "linear-gradient(135deg, rgba(243, 196, 117, 0.251) 0%, rgba(243, 195, 116, 0) 59.86%), #212428",
        "border-gradient-onyx":
          "linear-gradient(to bottom right, #404040 0%, rgba(64, 64, 64, 0) 50%)",
        "text-gradient-yellow": "linear-gradient(to right, #f7c46c, #f3c374)",
        "gradient-blue-purple":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-card":
          "linear-gradient(145deg, rgba(59, 59, 59, 0.1) 0%, rgba(59, 59, 59, 0.02) 100%)",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "border-rotate": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease forwards",
        "border-rotate": "border-rotate 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};