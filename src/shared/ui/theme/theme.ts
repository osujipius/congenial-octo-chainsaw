import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  variants: {
    size: {
      xl: {
        fontSize: "lg",
        px: 6,
        py: 3,
      },
    },
    variant: {
      solid: {
        bg: "red",
        color: "white",
        _hover: {
          bg: "blue",
          color: "red",
        },
      },
    },
  },
});

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
    recipes: {
      button: buttonRecipe,
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
