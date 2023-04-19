import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ChangerIcon } from "./icons/ChangerIcon";
import { GarbageIcon } from "./icons/GarbageIcon";
import { PointIcon } from "./icons/PointIcon";
import { Title5 } from "./text/Title5";
import { BodyText } from "./text/BodyText";
import { CopyIcon } from "./icons/CopyIcon";
import { ModalDeleteCommunity } from "./ModalDeleteCommunity";
import { ModalCommunity } from "./ModalCommunity";
import { BlockchainIcon } from "./icons/BlockchainIcon";

export const ItemListCommunities = ({ el }) => {
  const { isOpen: isOpenChange, onOpen: onOpenChange, onClose: onCloseChange } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: oncloseDelete } = useDisclosure();

  const handlerCopy = (el) => {
    navigator.clipboard.writeText(el.contractAddress);
  };

  return (
    <Box w="full" pb="24px" borderBottom="1.5px solid" borderBottomColor="dropdown" _last={{ borderBottom: "none" }}>
      <Flex justifyContent="space-between" mb="12px">
        <Flex columnGap="12px" alignItems="center">
          <Title5>{el.communitiesLabel}</Title5>
          <PointIcon />
          <BodyText>33 addresses</BodyText>
        </Flex>
        <Flex columnGap="18px" alignItems="center">
          <IconButton minWidth="24px" maxHeight="24px" onClick={onOpenChange} icon={<ChangerIcon />} />
          <IconButton minWidth="24px" maxHeight="24px" onClick={onOpenDelete} icon={<GarbageIcon />} />
        </Flex>
      </Flex>
      <Flex columnGap="8px" alignItems="center">
        <BlockchainIcon type={el.blockchain} color="gray" />
        <BodyText>{`${el.contractAddress.slice(0, 6)}...${el.contractAddress.slice(-4)}`}</BodyText>
        <IconButton minWidth="24px" maxHeight="24px" onClick={() => handlerCopy(el)} icon={<CopyIcon />} />
      </Flex>
      <ModalCommunity isOpen={isOpenChange} onClose={onCloseChange} el={el} variant="addCommunity" />
      <ModalDeleteCommunity isOpen={isOpenDelete} onClose={oncloseDelete} el={el} variant="addCommunity" />
    </Box>
  );
};
