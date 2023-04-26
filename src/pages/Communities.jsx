import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Header } from "../layout/Header";
import { useCommunities } from "../api/useCommunities";
import { ListCommunities } from "../components/ListCommunities";
import { ModalCommunity } from "../components/ModalCommunity";
import { EmptyListCommunities } from "../components/EmptyListCommunities";
import { Container } from "../layout/Container";

export const Communities = () => {
  const { communities, errorCommunities, isLoadingCommunities } = useCommunities();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container error={errorCommunities} loading={isLoadingCommunities}>
      <Header
        pageTitle="NFT Communities"
        buttonProps={{ text: "Add NFT Communities", state: communities?.length, handler: onOpen }}
      />
      {!communities?.length ? <EmptyListCommunities onOpen={onOpen} /> : <ListCommunities communities={communities} />}
      <ModalCommunity isOpen={isOpen} onClose={onClose} variant="addCommunity" />
    </Container>
  );
};
