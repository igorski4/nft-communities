import { Flex } from "@chakra-ui/react";
import React from "react";
import { ItemListCommunities } from "./ItemListCommunities";
import { useCommunities } from "../api/useCommunities";

export const ListCommunities = () => {
  const { communities, errorCommunities, isLoadingCommunities } = useCommunities();

  return (
    <Flex flexDirection="column" pt="120px" mx="auto" w="592px" rowGap="24px" flexGrow={1}>
      {!!communities &&
        communities.map((el) => (
          <ItemListCommunities key={el.id} el={el}/>
        ))}
    </Flex>
  );
};
