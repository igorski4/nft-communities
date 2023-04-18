import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FormAddCommunities } from "./FormAddCommunities";
import { fetcherPost } from "../api/fetchers";

export const ModalAddCommunity = ({ isOpen, onClose, variant }) => {
  const [blockchain, setBlockchain] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [communitiesLabel, setCommunitiesLabel] = useState("");

  useEffect(() => {
    setBlockchain("");
    setContractAddress("");
    setCommunitiesLabel("");
  }, [isOpen]);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} variant={variant}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add NFT Community</ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>
          <FormAddCommunities
            blockchain={blockchain}
            setBlockchain={setBlockchain}
            contractAddress={contractAddress}
            setContractAddress={setContractAddress}
            communitiesLabel={communitiesLabel}
            setCommunitiesLabel={setCommunitiesLabel}
          />
        </ModalBody>

        <ModalFooter>
          <Button size="md" variant="secondary" w="full" onClick={onClose}>
            Cancel
          </Button>
          <Button
            size="md"
            variant="primary"
            w="full"
            onClick={() => {
              fetcherPost({
                url: "/communities",
                data: { id: uuidv4(), blockchain: blockchain.value, contractAddress, communitiesLabel },
              });
              onClose();
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
