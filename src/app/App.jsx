import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Fonts } from "./Fonts";
import theme from "./theme";
import { Header } from "../layout/Header/Header";

export const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Fonts />
      <Flex h="100%">
        <Box w="256px" borderRight="1.5px solid #1D1E1F"></Box>
        <Header pageTitle="NFT Communities" buttonProps={{ text: "Add NFT Communities", state: true }} />
      </Flex>
    </ChakraProvider>
  );
};
