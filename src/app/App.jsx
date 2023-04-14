import React, { useState } from "react";
import { Box, Button, ChakraProvider, Flex, Text, useDisclosure } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Header } from "../layout/Header/Header";
import { ModalAddCommunity } from "./components/ModalAddCommunity";
import { ListCommunities } from "./components/ListCommunities";

export const App = () => {
  const [communities, setCommunities] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Flex h="100%">
        <Box w="256px" borderRight="1.5px solid #1D1E1F"></Box>
        <Flex flexDirection="column" flexGrow={1}>
          <Header
            pageTitle="NFT Communities"
            buttonProps={{ text: "Add NFT Communities", state: communities.length, handler: onOpen }}
          />
          {!communities.length ? (
            <Flex flexDirection="column" justifyContent="center" alignItems="center" flexGrow={1}>
              <Text w="371px" fontSize="32px" lineHeight="34px" letterSpacing="-0.015em" textAlign="center" mb="32px">
                You don`t have NFT communities
              </Text>
              <Button size="md" variant="primary" onClick={onOpen}>
                Add Community
              </Button>
            </Flex>
          ) : (
            <ListCommunities communities={communities} />
          )}
        </Flex>
      </Flex>
      <ModalAddCommunity
        isOpen={isOpen}
        onClose={onClose}
        communities={communities}
        add={setCommunities}
        variant="addCommunity"
      />
    </ChakraProvider>
  );
};
