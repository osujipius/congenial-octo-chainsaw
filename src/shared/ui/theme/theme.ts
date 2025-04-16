import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const headingRecipe = defineRecipe({
  base: {
    fontFamily: "Zen Dots",
    color: "white",
  },
});

const textRecipe = defineRecipe({
  base: {
    fontFamily: "Space Grotesk",
    color: "white",
  },
});

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: { value: "#FFFF" },
        black: { value: "#000" },
        ash: { value: "#333436" },
        headerHover: { value: "#F1DA00" },
        headerBottomBorder: { value: "#D50B13" },
        grey1: { value: "#5F6163" },
        grey2: { value: "#D8D8D8" },
        grey3: { value: "#A1A1A1" },
        timeline: { value: "#2E374A" },
      },
      fonts: {
        body: { value: "Space Grotesk, sans-serif" },
        heading: { value: "Zen Dots, sans-serif" },
        navigation: { value: "Michroma, sans-serif" },
      },
    },
    recipes: {
      heading: headingRecipe,
      text: textRecipe,
    },
  },
  globalCss: {
    html: {
      scrollBehavior: "smooth",
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
