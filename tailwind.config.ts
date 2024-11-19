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
    backgroundImage: {
      // Fondos personalizados
      cieloClaro:
        "url('https://static.vecteezy.com/system/resources/previews/028/663/748/non_2x/ai-ai-generatedrealistic-4k-sky-with-serene-cumulus-clouds-nature-s-atmospheric-beauty-in-stunning-detail-ideal-for-calming-and-scenic-concepts-free-photo.jpeg')",
      cieloNublado: "url('https://source.unsplash.com/1600x900/?clouds')",
    },
    extend: {
      colors: {
        fondo: "#FFE8D5", // Fondo principal
        tarjeta: "#FFF4F3", // Fondo de tarjetas
        borde: "#FFFFFF", // Borde de tarjetas
        texto: "#4A403A", // Texto principal
        // Color para las nubes
        //Ligth Mode
        light: {
          background: "#F3F4F6", // Fondo claro
          card: "#D9F0FF", // Fondo de tarjetas
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
