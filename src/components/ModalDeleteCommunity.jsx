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
import { fetcherDelete } from "../api/fetchers";

export const ModalDeleteCommunity = ({ isOpen, onClose, variant, el }) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} variant={variant}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mb="11px">Remove NFT Community?</ModalHeader>
        <ModalCloseButton size="lg" />
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
              fetcherDelete({ url: "/communities", id: el.id });
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