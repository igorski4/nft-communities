import { Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../layout/Header/Sidebar";
import { Header } from "../layout/Header/Header";
import { useCommunities } from "../api/useCommunities";
import { ListCommunities } from "../components/ListCommunities";
import { ModalCommunity } from "../components/ModalCommunity";
import { EmptyListCommunities } from "../components/EmptyListCommunities";
import { Title5 } from "../components/text/Title5";

export const Communities = () => {
  const { communities, errorCommunities, isLoadingCommunities } = useCommunities();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex h="100%">
        <Sidebar />
        <Flex flexDirection="column" flexGrow={1}>
          <Header
            pageTitle="NFT Communities"
            buttonProps={{ text: "Add NFT Communities", state: communities?.length, handler: onOpen }}
          />
          {!!isLoadingCommunities && (
            <Flex h="100%" justifyContent="center" alignItems="center">
              <Spinner color="primary.100" size="lg" />
            </Flex>
          )}
          {!communities?.length ? (
            <EmptyListCommunities onOpen={onOpen} />
          ) : (
            <ListCommunities communities={communities} />
          )}
          {!!errorCommunities && (
            <Title5 textAlign="center" pt="100px">
              Error! Try again later
            </Title5>
          )}
        </Flex>
      </Flex>
      <ModalCommunity isOpen={isOpen} onClose={onClose} variant="addCommunity" />
    </>
  );
};
