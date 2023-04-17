import React, { useState } from "react";
import { Box, Button, ChakraProvider, Flex, useDisclosure } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Header } from "../layout/Header/Header";
import { ModalAddCommunity } from "../components/ModalAddCommunity";
import { ListCommunities } from "../components/ListCommunities";
import { Title4 } from "../components/text/Title4";
import { BodyText } from "../components/text/BodyText";

export const App = () => {
  const [communities, setCommunities] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Flex h="100%">
        <Box w="256px" position="relative">
          <Flex w="256px" h="100%" borderRight="1.5px solid #1D1E1F" position="fixed" pt="22px" justifyContent="center">
            <BodyText>Planet Oaziz</BodyText>
          </Flex>
        </Box>
        <Flex flexDirection="column" flexGrow={1}>
          <Header
            pageTitle="NFT Communities"
            buttonProps={{ text: "Add NFT Communities", state: communities.length, handler: onOpen }}
          />
          {!communities.length ? (
            <Flex flexDirection="column" justifyContent="center" alignItems="center" rowGap="32px" flexGrow={1}>
              <Title4 w="371px" textAlign="center">
                You don`t have NFT communities
              </Title4>
              <Button size="md" variant="primary" onClick={onOpen}>
                Add Community
              </Button>
            </Flex>
          ) : (
            <ListCommunities communities={communities} setCommunities={setCommunities} />
          )}
        </Flex>
      </Flex>
      <ModalAddCommunity
        isOpen={isOpen}
        onClose={onClose}
        communities={communities}
        setCommunities={setCommunities}
        variant="addCommunity"
      />
    </ChakraProvider>
  );
};
