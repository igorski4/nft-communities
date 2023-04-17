import React, { useState } from "react";
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

export const ModalAddCommunity = ({ isOpen, onClose, variant, communities, setCommunities }) => {
  const [blockchain, setBlockchain] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [communitiesLabel, setCommunitiesLabel] = useState("");

  const resetForm = () => {
    setBlockchain("");
    setContractAddress("");
    setCommunitiesLabel("");
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} variant={variant}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add NFT Community</ModalHeader>
        <ModalCloseButton />
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
          <Button
            size="md"
            variant="secondary"
            w="full"
            onClick={() => {
              resetForm();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            size="md"
            variant="primary"
            w="full"
            onClick={() => {
              setCommunities([...communities, { blockchain, contractAddress, communitiesLabel }]);
              resetForm();
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
