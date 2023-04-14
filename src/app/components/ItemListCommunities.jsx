import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

export const ItemListCommunities = ({ el }) => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text>{el.communitiesLabel}</Text>
        <Flex columnGap="18px">
          <IconButton />
          <IconButton />
        </Flex>
      </Flex>
    </Box>
  );
};
