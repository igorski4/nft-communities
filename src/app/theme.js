import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'PT Root UI Meduim', sans-serif`,
    body: `'PT Root UI Bold', sans-serif`,
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        color: "#D4D6DB",
        backgroundColor: "#000000",
      },
      html: {
        scrollBehavior: "smooth",
        height: "100%",
      },
      body: {
        height: "100%",
      },
      "#root": { height: "100%" },
    },
  },
});

export default theme;
