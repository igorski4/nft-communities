import { Text } from "@chakra-ui/react";
import React from "react";

export const BodyText = ({ children }) => {
  return (
    <Text fontWeight="500" fontSize="16px" lineHeight="20px" letterSpacing="0.005em" color="form.300">
      {children}
    </Text>
  );
};
