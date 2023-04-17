import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { ArrowSelectIcon } from "./icons/ArrowSelectIcon";
import { BlockchainIcon } from "./icons/BlockchainIcon";
import { Select, chakraComponents, useChakraSelectProps } from "chakra-react-select";

export const FormAddCommunities = ({
  blockchain,
  setBlockchain,
  contractAddress,
  setContractAddress,
  communitiesLabel,
  setCommunitiesLabel,
}) => {
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

  const selectProps = useChakraSelectProps({
    value: blockchain,
    onChange: setBlockchain,
  });

  const customComponents = {
    Option: ({ children, ...props }) => (
      <chakraComponents.Option {...props}>
        {props.data.icon} {children}
      </chakraComponents.Option>
    ),
    SingleValue: ({ children, ...props }) => (
      <chakraComponents.SingleValue {...props}>
        {props.data.icon} {children}
      </chakraComponents.SingleValue>
    ),
  };

  return (
    <FormControl isRequired display="flex" flexDirection="column" rowGap="24px">
      <Box>
        <FormLabel>Blockchain</FormLabel>
        <Select
          {...selectProps}
          isSearchable={false}
          icon={<ArrowSelectIcon />}
          options={blockchainOptions}
          components={customComponents}
          placeholder="Select blockchain"
          variant="addCommunities"
        />
      </Box>
      <Box>
        <FormLabel>Contract address</FormLabel>
        <Input
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="0x..."
          variant="addCommunities"
        />
      </Box>
      <Box>
        <FormLabel>Come up with a label</FormLabel>
        <Input
          value={communitiesLabel}
          onChange={(e) => setCommunitiesLabel(e.target.value)}
          placeholder="Label"
          variant="addCommunities"
        />
      </Box>
    </FormControl>
  );
};
