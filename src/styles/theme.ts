import { defineConfig } from "@chakra-ui/react";

export const themeConfig = defineConfig({
  globalCss:{
    "html, body" : {
      backgroundColor:"gray.50",
      color:"black"
    }
  },
  theme : {
    tokens : {
      colors : {},
    },
  },
})

