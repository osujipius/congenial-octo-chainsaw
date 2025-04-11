"use client";

import {
  ColorModeProvider,
  ColorModeProviderProps,
} from "@/shared/ui/theme/color-mode";
import system from "@/shared/ui/theme/theme";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="light" {...props} />
    </ChakraProvider>
  );
}
