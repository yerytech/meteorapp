import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      md: "768px",
    },

    extend: {
      colors: {
        primary: "#2563EB", // Azul
        secondary: "#000000", // Amarillo
        success: "#22C55E", // Verde
        warning: "#F59E0B", // Amarillo para advertencias
        error: "#EF4444",
        black: "#000000",

        //Ligth Mode
        light: {
          background: "#F3F4F6", // Fondo claro
          card: "#FFFFFF", // Fondo de tarjetas
          text: "#1F2937", // Texto oscuro
        },

        // BalckMode
        dark: {
          background: "#1F2937", // Fondo oscuro
          card: "#374151", // Fondo de tarjetas oscuras
          text: "#F9FAFB", // Texto claro
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {},
    }),
  ],
};
