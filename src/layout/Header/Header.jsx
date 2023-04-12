import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = ({ pageTitle, buttonProps }) => {
  return (
    <Flex p="12px 24px 14px" borderBottom="1.5px solid #1D1E1F" flexGrow={1} h="66px" justifyContent="space-between">
      <Heading as="h1" p="3px 0" fontSize="32px" lineHeight="34px" letterSpacing="-0.015em">
        {pageTitle}
      </Heading>
      {buttonProps.state && (
        <Button
          bg="#272A2C"
          color="#D9D9D9"
          border="1.5px solid #3D3E42"
          borderRadius="10px"
          p="10px 24px"
          _hover={{ bg: "#3E3F41" }}
        >
          {buttonProps.text}
        </Button>
      )}
    </Flex>
  );
};
