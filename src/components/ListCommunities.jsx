import { Flex } from "@chakra-ui/react";
import React from "react";
import { ItemListCommunities } from "./ItemListCommunities";

export const ListCommunities = ({ communities, setCommunities }) => {
  return (
    <Flex flexDirection="column" pt="120px" mx="auto" w="592px" rowGap="24px" flexGrow={1}>
      {communities.map((el) => (
        <ItemListCommunities el={el} communities={communities} setCommunities={setCommunities} />
      ))}
    </Flex>
  );
};
