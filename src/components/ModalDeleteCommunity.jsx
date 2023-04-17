import React from "react";
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

export const ModalDeleteCommunity = ({ isOpen, onClose, variant, el, communities, setCommunities }) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} variant={variant}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mb="11px">Remove NFT Community?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          «{el.communitiesLabel}» is used in a ticket tier on sale. If you remove it, the ticket tier will become
          available to anyone
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
              setCommunities(communities.filter((community) => community.contractAddress !== el.contractAddress));
              onClose();
            }}
          >
            Remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
