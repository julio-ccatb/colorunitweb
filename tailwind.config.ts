import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        purpleDark: "#2e026d",
        purpleAccent: "hsl(280,100%,70%)",
        greenAccent: "#0dd1b5",
        greenLight: "#e8faf7",
        grayPrimary: "#181c32",
        whitePrimary: "#181c32",
      },
    },
  },
  plugins: [],
} satisfies Config;
