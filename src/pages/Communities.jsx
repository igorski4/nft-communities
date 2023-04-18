import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../layout/Header/Sidebar";
import { Header } from "../layout/Header/Header";
import { useCommunities } from "../api/useCommunities";
import { ListCommunities } from "../components/ListCommunities";
import { ModalAddCommunity } from "../components/ModalAddCommunity";
import { EmptyListCommunities } from "../components/EmptyListCommunities";

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
          {!communities?.length ? <EmptyListCommunities onOpen={onOpen} /> : <ListCommunities />}
        </Flex>
      </Flex>
      <ModalAddCommunity isOpen={isOpen} onClose={onClose} variant="addCommunity" />
    </>
  );
};
