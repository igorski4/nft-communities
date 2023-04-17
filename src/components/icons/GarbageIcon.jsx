import { Icon } from "@chakra-ui/react";
import React from "react";

export const GarbageIcon = ({ onClick }) => {
  return (
    <Icon viewBox="0 0 16 19" fill="none" h="18px" w="16px" cursor="pointer" onClick={onClick}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 0.31665H12V3.31665H16V5.31665H14V18.3167H2V5.31665H0V3.31665H4V0.31665ZM10 2.31665V3.31665H6V2.31665H10ZM4 5.31665V16.3167H12V5.31665H4Z"
        fill="#828690"
      />
    </Icon>
  );
};
