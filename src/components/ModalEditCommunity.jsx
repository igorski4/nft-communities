import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { FormAddCommunities } from "./FormAddCommunities";

export const ModalEditCommunity = ({ isOpen, onClose, variant, communities, setCommunities, el }) => {
  const [blockchain, setBlockchain] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [communitiesLabel, setCommunitiesLabel] = useState("");

  useEffect(() => {
    setBlockchain(el.blockchain);
    setContractAddress(el.contractAddress);
    setCommunitiesLabel(el.communitiesLabel);
  }, [el]);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} variant={variant}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit NFT Community</ModalHeader>
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
              setCommunities(
                communities.reduce((acc, community) => {
                  if (community.contractAddress !== el.contractAddress) return [...acc, community];
                  return [...acc, { blockchain, contractAddress, communitiesLabel }];
                }, [])
              );
              console.log(communities);

              onClose();
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
