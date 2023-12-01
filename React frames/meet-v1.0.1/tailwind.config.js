module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: {
          100: "#debace",
          "100_2b": "#debace2b",
          "100_3f": "#debace3f",
        },
        yellow: { 100: "#fbfacd", 600: "#ebe328" },
        gray: {
          400: "#bebebe",
          800: "#414141",
          "900_bf": "#131313bf",
          "900_3d": "#1313133d",
        },
        white: { A700: "#ffffff", A700_a5: "#ffffffa5", A700_7f: "#ffffff7f" },
        red: { 300: "#ff7171", 500: "#fd3e3e", "500_7f": "#fd3e3e7f" },
        amber: { A200: "#fdd33e", A200_7f: "#fdd33e7f" },
        colors: "#fdd33eff",
        blue: { 300: "#71b2ff", "300_60": "#71b2ff60" },
        deep_purple: { 200: "#ba94d1", A100: "#a771ff" },
        light_green: { A200: "#8dff71" },
        green: { "300_c1": "#69ff66c1", "300_7f": "#69ff667f" },
        blue_gray: { "100_21": "#d9d9d921" },
        black: { 900: "#101010" },
      },
      fontFamily: { poppins: "Poppins", kollektif: "Kollektif" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
