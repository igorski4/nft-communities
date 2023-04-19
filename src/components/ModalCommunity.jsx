import React from "react";
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
import { FormCommunities } from "./FormCommunities";
import { fetcherPatch, fetcherPost } from "../api/fetchers";
import { useForm } from "react-hook-form";
import { BlockchainIcon } from "./icons/BlockchainIcon";

export const ModalCommunity = ({ isOpen, onClose, variant, el }) => {
  const blockchainOptions = [
    {
      value: "polygon",
      label: "Polygon",
      icon: <BlockchainIcon type="polygon" mr="8px" />,
    },
    {
      value: "avalanche",
      label: "Avalanche",
      icon: <BlockchainIcon type="avalanche" mr="8px" />,
    },
  ];

  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: {
      blockchain: el ? blockchainOptions.find((opt) => opt.value === el.blockchain) : "",
      contractAddress: el?.contractAddress ?? "",
      communitiesLabel: el?.communitiesLabel ?? "",
    },
  });

  const onSubmit = (data) => {
    if (data.type !== "click") {
      if (!el)
        fetcherPost({
          url: "/communities",
          data: {
            id: uuidv4(),
            blockchain: data.blockchain.value,
            contractAddress: data.contractAddress,
            communitiesLabel: data.communitiesLabel,
          },
        });
      else
        fetcherPatch({
          url: "/communities",
          data: {
            ...el,
            blockchain: data.blockchain.value,
            contractAddress: data.contractAddress,
            communitiesLabel: data.communitiesLabel,
          },
        });
      reset();
      onClose();
    }
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} variant={variant}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{el ? "Edit" : "Add"} NFT Community</ModalHeader>
        {!el && <ModalCloseButton size="lg" />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormCommunities register={register} control={control} blockchainOptions={blockchainOptions} />
          </ModalBody>

          <ModalFooter>
            <Button size="md" variant="secondary" w="full" onClick={onClose}>
              Cancel
            </Button>
            <Button size="md" variant="primary" w="full" type="submit" onClick={onSubmit}>
              {el ? "Save" : "Add"}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
