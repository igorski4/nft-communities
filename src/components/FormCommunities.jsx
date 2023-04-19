import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { ArrowSelectIcon } from "./icons/ArrowSelectIcon";
import { Select, chakraComponents } from "chakra-react-select";
import { Controller } from "react-hook-form";

export const FormCommunities = ({ register, control, blockchainOptions }) => {
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
        <Controller
          control={control}
          name="blockchain"
          rules={{ required: true }}
          render={({ field: { onChange, value, name, ref } }) => (
            <Select
              name={name}
              ref={ref}
              onChange={onChange}
              value={value}
              isSearchable={false}
              icon={<ArrowSelectIcon />}
              options={blockchainOptions}
              components={customComponents}
              placeholder="Select blockchain"
              variant="addCommunities"
            />
          )}
        />
      </Box>
      <Box>
        <FormLabel>Contract address</FormLabel>
        <Input placeholder="0x..." variant="addCommunities" {...register("contractAddress", { required: true })} />
      </Box>
      <Box>
        <FormLabel>Come up with a label</FormLabel>
        <Input placeholder="Label" variant="addCommunities" {...register("communitiesLabel", { required: true })} />
      </Box>
    </FormControl>
  );
};
