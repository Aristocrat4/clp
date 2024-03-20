/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans Georgian",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontWeight: {
        Regular: "400",
        Medium: "500",
        SemiBold: "600",
      },
      fontSize: {
        h1: [
          "24px",
          {
            lineHeight: "40px",
            letterSpacing: "0.35px",
            fontWeight: "600",
          },
        ],
        h2: [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "0.35px",
            fontWeight: "600",
          },
        ],
        "h2-mobile": [
          "16px",
          {
            lineHeight: "28px",
            letterSpacing: "0.35px",
            fontWeight: "600",
          },
        ],
        h3: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.2px", fontWeight: "500" },
        ],
        body: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "400" },
        ],
        "body-medium": [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "500" },
        ],
        "body-uppercase": [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "500" },
        ],
        "small-text": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.2px", fontWeight: "400" },
        ],
      },

      boxShadow: {
        "custom-40": "0px 0px 20px rgba(0, 0, 0, 0.1)",
        "custom-20": "0px 0px 40px rgba(0, 0, 0, 0.08)",
      },

      colors: {
        primary: {
          purple: "#585EE3",
          white: "#F5F8FF",
        },
        interface: {
          black: "#000000",
          darkGray: "#1D2D35",
          lightGray: "#657178",
          darkWhite: "#EFF4F5",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
