import { Text } from "@chakra-ui/react";
import React from "react";

export const Title5 = ({ text }) => {
  return (
    <Text fontWeight="700" fontSize="24px" lineHeight="25px" letterSpacing="-0.005em" color="gray">
      {text}
    </Text>
  );
};
