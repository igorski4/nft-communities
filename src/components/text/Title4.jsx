import { Text } from "@chakra-ui/react";
import React from "react";

export const Title4 = ({ children, ...restProps }) => {
  return (
    <Text fontWeight="700" fontSize="32px" lineHeight="34px" letterSpacing="-0.015em" color="gray" {...restProps}>
      {children}
    </Text>
  );
};
