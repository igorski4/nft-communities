import { Flex } from "@chakra-ui/react";
import React from "react";
import { ItemListCommunities } from "./ItemListCommunities";

export const ListCommunities = ({ communities }) => {
  return (
    <Flex flexDirection="column" pt="120px" alignItems="center" flexGrow={1}>
      {communities.map((el) => (
        <ItemListCommunities el={el} />
      ))}
    </Flex>
  );
};
