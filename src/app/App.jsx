import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Communities } from "../pages/Communities";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Communities />
    </ChakraProvider>
  );
};
