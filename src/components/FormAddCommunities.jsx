import { Box, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React from "react";

export const FormAddCommunities = ({
  blockchain,
  setBlockchain,
  contractAddress,
  setContractAddress,
  communitiesLabel,
  setCommunitiesLabel,
}) => {
  return (
    <FormControl isRequired display="flex" flexDirection="column" rowGap="24px" requiredIndicator={{ color: "gray" }}>
      <Box>
        <FormLabel>Blockchain</FormLabel>
        <Select
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
          placeholder="Select blockchain"
          variant="addCommunities"
        >
          <option>Polygon 1</option>
          <option>Polygon 2</option>
          <option>Polygon 3</option>
        </Select>
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
