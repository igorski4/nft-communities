import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Title4 } from "./text/Title4";

export const EmptyListCommunities = ({ onOpen }) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" rowGap="32px" flexGrow={1}>
      <Title4 w="371px" textAlign="center">
        You don`t have NFT communities
      </Title4>
      <Button size="md" variant="primary" onClick={onOpen}>
        Add Community
      </Button>
    </Flex>
  );
};
