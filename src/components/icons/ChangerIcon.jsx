import { Icon } from "@chakra-ui/react";
import React from "react";

export const ChangerIcon = ({ onClick }) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" h="24px" w="24px" cursor="pointer" onClick={onClick}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 7.42619L16.8905 3.31665L4.36985 15.8373L3 21.3167L8.47939 19.9468L21 7.42619ZM5.78141 18.5352L6.19724 16.8719L16.8905 6.17869L18.138 7.42619L7.44474 18.1194L5.78141 18.5352ZM22 19.3167H13V21.3167H22V19.3167Z"
        fill="#828690"
      />
    </Icon>
  );
};
