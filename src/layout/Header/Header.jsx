import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = ({ pageTitle, buttonProps }) => {
  return (
    <Flex p="12px 24px 14px" borderBottom="1.5px solid #1D1E1F" h="66px" justifyContent="space-between">
      <Heading as="h1" p="3px 0" fontSize="32px" lineHeight="34px" letterSpacing="-0.015em">
        {pageTitle}
      </Heading>
      {!!buttonProps.state && (
        <Button size="sm" variant="secondary" onClick={buttonProps.handler}>
          {buttonProps.text}
        </Button>
      )}
    </Flex>
  );
};
