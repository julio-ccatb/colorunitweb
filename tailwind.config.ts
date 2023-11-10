import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        purpleAccent: "hsl(280,100%,70%)",
        greenAccent: "#0dd1b5",
        greenLight: "#e8faf7",
        grayPrimary: "#181c32",
        graySecondary: "#1e1e2d",
        whitePrimary: "#e8faf7",
      },
    },
  },
} satisfies Config;
