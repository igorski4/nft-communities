import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ChangerIcon } from "./icons/ChangerIcon";
import { GarbageIcon } from "./icons/GarbageIcon";
import { PointIcon } from "./icons/PointIcon";
import { Title5 } from "./text/Title5";
import { BodyText } from "./text/BodyText";
import { CopyIcon } from "./icons/CopyIcon";
import { ModalDeleteCommunity } from "./ModalDeleteCommunity";
import { ModalEditCommunity } from "./ModalEditCommunity";
import { BlockchainIcon } from "./icons/BlockchainIcon";

export const ItemListCommunities = ({ el }) => {
  const { isOpen: isOpenChange, onOpen: onOpenChange, onClose: onCloseChange } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: oncloseDelete } = useDisclosure();

  return (
    <Box w="full" pb="24px" borderBottom="1.5px solid" borderBottomColor="dropdown" _last={{ borderBottom: "none" }}>
      <Flex justifyContent="space-between" mb="12px">
        <Flex columnGap="12px" alignItems="center">
          <Title5 text={el.communitiesLabel} />
          <PointIcon />
          <BodyText>33 addresses</BodyText>
        </Flex>
        <Flex columnGap="18px" alignItems="center">
          <ChangerIcon onClick={onOpenChange} />
          <ModalEditCommunity isOpen={isOpenChange} onClose={onCloseChange} el={el} variant="addCommunity" />
          <GarbageIcon onClick={onOpenDelete} />
          <ModalDeleteCommunity isOpen={isOpenDelete} onClose={oncloseDelete} variant="addCommunity" el={el} />
        </Flex>
      </Flex>
      <Flex columnGap="8px" alignItems="center">
        <BlockchainIcon type={el.blockchain} color="gray" />
        <BodyText>{`${el.contractAddress.slice(0, 6)}...${el.contractAddress.slice(-4)}`}</BodyText>
        <CopyIcon
          onClick={() => {
            navigator.clipboard.writeText(el.contractAddress);
          }}
        />
      </Flex>
    </Box>
  );
};
