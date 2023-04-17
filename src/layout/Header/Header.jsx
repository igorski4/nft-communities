import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Title4 } from "../../components/text/Title4";

export const Header = ({ pageTitle, buttonProps }) => {
  return (
    <Flex p="12px 24px 14px" borderBottom="1.5px solid #1D1E1F" h="66px" justifyContent="space-between">
      <Title4 py="3px">{pageTitle}</Title4>
      {!!buttonProps.state && (
        <Button size="sm" variant="secondary" onClick={buttonProps.handler}>
          {buttonProps.text}
        </Button>
      )}
    </Flex>
  );
};
