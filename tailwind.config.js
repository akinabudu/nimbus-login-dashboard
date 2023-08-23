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
        white: { A700_7f: "#ffffff7f", A700: "#ffffff" },
        blue_gray: {
          100: "#d9d9d9",
          800: "#19435a",
          "700_87": "#49505787",
          "100_01": "#d1d1d1",
          "100_02": "#d2d6da",
          "900_cc": "#363636cc",
        },
        lime: {
          800: "#c19807",
          900: "#876c0c",
          "800_0c": "#c198070c",
          "800_cc": "#c19807cc",
        },
        black: { "900_3f": "#0000003f", "900_11": "#00000011" },
        gray: {
          200: "#ededed",
          400: "#bbbbbb",
          500: "#a7a7a7",
          900: "#131415",
          "500_01": "#a4a4a4",
          "200_01": "#eaeaea",
          "500_02": "#a3a3a3",
        },
        light_green: { "700_cc": "#5da73acc" },
        amber: { 500: "#fbbc09", "500_99": "#fbbc0999", "500_4c": "#fbbc094c" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs2: "0px 6px  4px 0px #0000003f",
        bs1: "0px 7px  7px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
