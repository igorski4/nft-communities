import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BodyText } from "../../components/text/BodyText";

export const Sidebar = () => {
  return (
    <Box w="256px" position="relative">
      <Flex w="256px" h="100%" borderRight="1.5px solid #1D1E1F" position="fixed" pt="22px" justifyContent="center">
        <BodyText>Planet Oaziz</BodyText>
      </Flex>
    </Box>
  );
};
