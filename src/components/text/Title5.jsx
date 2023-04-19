import { Text } from "@chakra-ui/react";
import React from "react";

export const Title5 = ({ children, ...restProps }) => {
  return (
    <Text fontWeight="700" fontSize="24px" lineHeight="25px" letterSpacing="-0.005em" color="gray" {...restProps}>
      {children}
    </Text>
  );
};
